#!/bin/bash

# Color codes
RED='\e[0;31m'
GREEN='\e[0;32m'
ORANGE='\e[0;33m'
NC='\e[0m' # No Color

rm -rf node_modules
npm cache clean --force

# Check if dependencies file exists
if [ -f "requirements.txt" ]; then
    # Read modules from the file and install them
    while IFS= read -r req; do
        echo -e "${ORANGE}installing $req ${NC}"
        npm install "$req" >/dev/null
    done < "requirements.txt"
    echo -e "${GREEN}npm requirements installed successfully.${NC}"
else
    echo -e "${RED}Error: requirements.txt not found.${NC} Make sure you have a list of dependencies in this file."
fi

echo "Checking for updates..."
npm update
