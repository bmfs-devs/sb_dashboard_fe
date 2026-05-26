import React from "react";
import { FetchACList } from "../state/ac";
import './dashboard.css';
const  Dashboard = async () => {
    // Fetch AC data from backend
    let acDataRes = await FetchACList();
    acDataRes.ACData.map((item) => {
        item.status = item.status === 1 ? 'on' : 'off';
    })
    let acData = acDataRes.ACData;
    
    return (
       <div className="dashboard" style={{ backgroundColor: '#d12345', color: '#ffffff' }}>
    <div className="ac">
        <div className="table-container"> 
            <table className="ac_table">
                <thead>
                    <tr>
                        <th scope="col">AC Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Temperature</th>
                    </tr>
                </thead>
                <tbody className="ac_table_body">
                    {acData.map((item) => (
                        <tr key={item.ac_number}>
                            <td>{item.ac_number}</td>
                            <td>{item.status}</td>
                            <td>{item.temperature}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <div className="dummy">
        <h2>Dummy Data</h2>
    </div>
</div>
    )
}

export default Dashboard