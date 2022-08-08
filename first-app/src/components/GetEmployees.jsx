import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

export const GetEmployees= () => {
    const [employee, setEmployee] = useState([]);

    const getData = async () => {
        const res = await axios.get('http://localhost:8080/employees/')
        console.log(res)
        setEmployee(res.data.employeeList)
    }

    // useEffect(() => {
    //     getData()
    // }, []);

    return (
        <>
            <div>
            <button onClick={() => {getData()}}>Get Employee</button>
            {employee.map((data, idx) => (
                <p key={idx}>{idx} - {data.firstName} - {data.lastName} - {data.email}</p>
            ))}
            </div>
        </>
    )
}