import React, {useState,useEffect} from 'react'
import axios from 'axios' 
import { format } from 'date-fns';

const Orders = () => {  
    const [allOrders,setAllOrders]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3002/allOrders").then((res)=>{
            setAllOrders(res.data)
        });
    },[]);

    return (
        <div className='text-white p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Orders ({allOrders.length})</h1>
            </div>
            <div className='mt-4'>
                <table className='w-full bg-zinc-900 px-5'>
                    <thead>
                        <tr className='bg-zinc-900 text-zinc-300'>
                            <th className='text-left w-48 p-2'>Time</th>
                            <th className='text-left w-48 p-2'>Stock</th>
                            <th className='text-left w-48 p-2'>Qty.</th>
                            <th className='text-left w-48 p-2'>Price</th>
                            <th className='text-left w-48 p-2'>Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order,index)=>{
                            const orderDate = new Date(order.timestamp);
                            return (
                                <tr key={index} className='tableRow border-t border-zinc-700 text-zinc-400'>
                                    <td className='p-3'>{format(orderDate, 'MMM dd, HH:mm:ss')}</td>
                                    <td className='p-3'>{order.name}</td>
                                    <td className='p-3'>{order.qty}</td>
                                    <td className='p-3'>{order.price.toFixed(2)}</td>
                                    <td className='p-3'>
                                        <span className={order.mode === 'BUY' ? 'text-green-500' : 'text-red-500'}>
                                            {order.mode}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders