import React, { useState, useEffect } from 'react';
import BarChart from './BarChart'; // Adjust the path as necessary
import './Projections.css'; // Import a CSS file for styling

function Projections(props) {
    const [projections, setProjections] = useState([]);
    const [weeksAhead, setWeeksAhead] = useState(1);  // Default to 1 week ahead
    const [totalRevenue, setTotalRevenue] = useState('');
    
    const [chartData, setChartData] = useState({ datasets: [] });
    const [chartOptions, setChartOptions] = useState({});

    // useEffect hook to set the initial data
    useEffect(() => {
        // Simulate fetching data
        const response = [
            { 'User': 'user1', 'Expected Revenue': 46 },
            { 'User': 'user6', 'Expected Revenue': 46 },
            { 'User': 'user2', 'Expected Revenue': 35 },
            { 'User': 'user3', 'Expected Revenue': 35 },
            { 'User': 'user4', 'Expected Revenue': 35 },
            { 'User': 'user7', 'Expected Revenue': 35 },
            { 'User': 'user8', 'Expected Revenue': 35 },
            { 'User': 'user10', 'Expected Revenue': 35 },
            { 'User': 'user11', 'Expected Revenue': 35 },
            { 'User': 'user12', 'Expected Revenue': 35 },
            { 'User': 'testing', 'Expected Revenue': 35 },
            { 'User': 'user7', 'Expected Revenue': 35 },
            { 'User': 'user8', 'Expected Revenue': 35 },
            { 'User': 'user10', 'Expected Revenue': 35 },
            { 'User': 'user11', 'Expected Revenue': 35 },
            { 'User': 'user12', 'Expected Revenue': 35 },
            { 'User': 'testing', 'Expected Revenue': 35 },
        ];

        const total = 302;

        setTotalRevenue(total);
        setProjections(response);

        const labels = response.map(projection => `${projection['User']}`);
        const data = response.map(projection => parseFloat(projection['Expected Revenue']));
        const maxRevenueValue = Math.max(...data) * 1.1;

        setChartOptions({
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Customers',
                        color: '#000000',
                        font: {
                            size: 18,
                            weight: 'bold',
                        },
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Expected Revenue ($)',
                        color: '#000000',
                        font: {
                            size: 18,
                            weight: 'bold',
                        },
                    },
                    beginAtZero: true,
                    suggestedMax: maxRevenueValue,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            maintainAspectRatio: false,
        });

        setChartData({
            labels: labels,
            datasets: [{
                label: 'Revenue $',
                data: data,
                barThickness: 150, // Set this to a fixed value that suits your layout
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 1,
            }],
        });

        
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
    <>
        <div className="projections-container h-screen w-full" style={{height: 'calc(100vh - 80px)'}}>
            <h1 className="projections-title">Revenue Projections</h1>

            <div className="content-container">
                    <div className="chart-container">
                        <div className='chart-scroll-container'>
                            <BarChart chartData={chartData} chartOptions={chartOptions} />
                        </div>
                    </div>

                {/* <div className="table-container">
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
                            max="52"
                        />
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
                </div> */}
            </div>
        </div>
    </>
    );
}

export default Projections;
