import React from "react";
import './dashboard.css';
const  Dashboard = () => {
    let acData = [
        {
            id: 1,
            status: "Active",
            temperature: "25",
        },
        {
            id: 2,
            status: "Active",
            temperature: "25",
        },
        {
            id: 3,
            status: "Active",
            temperature: "25",
        },
        //  {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        //  {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        //  {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 1,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 2,
        //     status: "Active",
        //     temperature: "25",
        // },
        // {
        //     id: 3,
        //     status: "Active",
        //     temperature: "25",
        // },
    ]
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
                        <tr key={item.id}>
                            <td>{item.id}</td>
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