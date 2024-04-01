import './App.css';
// import Projections from './Projections'; // Adjust the path as necessary if Projections.jsx is in a different directory
import Projections from './Projections.jsx'; // Adjust the path as necessary if Z.jsx is in a different directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Projections /> {/* Include the Projections component here */}
    </div>
  );
}


export default App;
