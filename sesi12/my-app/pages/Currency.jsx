import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

export const Currency = () => {
    const listCCy = ['CAD','EUR','IDR','JPY','CHF','GBP']
    const [ccy, setCCY] = useState('');

    const getData = async () => {
        const res = await axios.get(`https://api.currencyfreaks.com/latest?apikey=d84c042ced314248b39bfe18b01719d3&symbols=${listCCy}`)
        console.log(res)
        setCCY(res.data.rates)
    }

    const percentLower = (actual) => {
        console.log(actual, '===================== actual')
        let temp = actual - ((5/100) * actual)
        console.log(temp, '===================== percentLower')
        return temp
    }

    const percentHigher = (actual) => {
        console.log(actual, '===================== actual')
        let temp = actual + ((5/100) * actual)
        console.log(temp, '===================== percentHigher')
        return temp
    }

    useEffect(() => {
        getData()
    }, []);
    
    return (
        <>
            {ccy && 
            <>
                <table>
                <th>
                    Currency
                </th>
                <th>
                    We Buy
                </th>
                <th>
                    Exhange rate
                </th>
                <th>
                    We Sell
                </th>
                {listCCy?.map((ccy1) =>
                    <tr>
                        <td>{ccy1}</td> 
                        <td>{parseFloat(percentHigher(ccy[ccy1])).toFixed(4)}</td>
                        <td>{parseFloat(ccy[ccy1]).toFixed(4)}</td>
                        <td>{parseFloat(percentLower(ccy[ccy1])).toFixed(4)}</td>
                    </tr>
                    )}
            </table>
            </>}
            
        
        </>
    )
}