import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/allPositions").then((res) => {
            setAllPositions(res.data)
        });
    }, []);

    return (
        <div className='text-white p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Positions ({allPositions.length}) </h1>
                <button className='bg-zinc-700 text-zinc-100 px-4 py-1 rounded-md'>Add Holding</button>
            </div>
            <div className='mt-4'>
                <table className='w-full bg-zinc-900 px-5'>
                    <thead>
                        <tr className='bg-zinc-900 text-zinc-300'>
                            <th className='text-left w-48 p-2'>Product</th>
                            <th className='text-left w-48 p-2'>Stock</th>
                            <th className='text-left w-48 p-2'>Qty.</th>
                            <th className='text-left w-48 p-2'>Avg</th>
                            <th className='text-left w-48 p-2'>LTP</th>
                            <th className='text-left w-48 p-2'>P&L</th>
                            <th className='text-left w-48 p-2'>Chg.</th>
                        </tr>
                        {allPositions.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? 'text-green-500' : 'text-red-500';
                            const dayClass = stock.isLoss ? 'text-red-500' : 'text-green-500';
                            return (
                                <tr key={index} className='tableRow border-t-1 border-zinc-700 text-zinc-400'>
                                    <td className='p-3'>{stock.product}</td>
                                    <td className='p-3'>{stock.name}</td>
                                    <td className='p-3'>{stock.qty}</td>
                                    <td className='p-3'>{stock.avg.toFixed(2)}</td>
                                    <td className='p-3'>{stock.price.toFixed(2)}</td>
                                    <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Positions