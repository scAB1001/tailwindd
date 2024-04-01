import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './Projections.css'; // Ensure the path to your CSS file is correct

const Z = () => {
    const [projections, setProjections] = useState([]);
    const [weeksAhead, setWeeksAhead] = useState(1);  // Default to 1 week ahead
    const [totalRevenue, setTotalRevenue] = useState('');
    
    // const [chartData, setChartData] = useState({ datasets: [] });
    // const [chartOptions, setChartOptions] = useState({});

    const chartRef = useRef(null);
    const containerBodyRef = useRef(null);

    useEffect(() => {
        const response = [
            { "User": "User 1", "Expected Revenue": 1000 },
            { "User": "User 2", "Expected Revenue": 2000 },
            { "User": "User 3", "Expected Revenue": 3000 },
            { "User": "User 4", "Expected Revenue": 4000 },
            { "User": "User 5", "Expected Revenue": 5000 },
            { "User": "User 6", "Expected Revenue": 6000 },
            { "User": "User 7", "Expected Revenue": 7000 },
            { "User": "User 8", "Expected Revenue": 8000 },
            { "User": "User 9", "Expected Revenue": 9000 },
            { "User": "User 10", "Expected Revenue": 10000 },
            { "User": "User 11", "Expected Revenue": 11000 },
            { "User": "User 12", "Expected Revenue": 12000 },
            { "User": "User 13", "Expected Revenue": 13000 },
            { "User": "User 14", "Expected Revenue": 14000 },
            { "User": "User 15", "Expected Revenue": 15000 },
            { "User": "User 16", "Expected Revenue": 16000 },
            { "User": "User 17", "Expected Revenue": 17000 },
            { "User": "User 18", "Expected Revenue": 18000 },
            { "User": "User 19", "Expected Revenue": 19000 },
            { "User": "User 20", "Expected Revenue": 20000 }
        ];

        setWeeksAhead(1);
            

        const labels = response.map(projection => projection['User']);
        const moneyData = response.map(projection => projection['Expected Revenue']);

        const data = {
        labels: labels,
        datasets: [{
            label: 'Expected Revenue',
            data: moneyData,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }]
        };

        const config = {
        type: 'bar',
        data: data,
        options: {
            maintainAspectRatio: false,
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        };

        const myChart = new Chart(chartRef.current, config);

        // Adjust chart container width for scrolling
        const totalLabels = myChart.data.labels.length;
        if (totalLabels > 5) {
        const newWidth = 700 + ((totalLabels - 5) * 150);
        containerBodyRef.current.style.width = `${newWidth}px`;
        }

        // Cleanup chart on component unmount
        return () => myChart.destroy();
    }, []);

    return (
        <><div className="chartCard">
            <div className="chartBox">
                <div className="pseudoYAxis">
                    {/* Y-axis labels here, if necessary */}
                </div>
                <div className="container">
                    <div className="containerBody" ref={containerBodyRef}>
                        <canvas id="myChart" ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </div><div className="table-container">
                <h2 className="weeks-ahead-title">{weeksAhead} Week(s) Ahead</h2>
                <div className="weeks-input-container">
                    <button className="increment-button"
                        onClick={() => setWeeksAhead(prevWeeks => Math.max(1, prevWeeks - 1))}>
                        <strong>-</strong></button>
                    <input
                        type="number"
                        value={weeksAhead}
                        onChange={(e) => setWeeksAhead(Math.max(1, Math.min(52, parseInt(e.target.value, 10) || 1)))}
                        min="1"
                        max="52" />
                    <button className="increment-button"
                        onClick={() => setWeeksAhead(prevWeeks => Math.min(52, prevWeeks + 1))}>
                        <strong>+</strong></button>
                </div>
                <div>
                    <table className="projections-table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Expected Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projections.map((projection, index) => (
                                <tr key={index}>
                                    <td>{projection['User']}</td>
                                    <td>${projection['Expected Revenue']}</td>
                                </tr>
                            ))}
                            <tr className="total-revenue-row">
                                <td>Total Revenue</td>
                                <td>${totalRevenue}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></>
    );
    };

    export default Z;
