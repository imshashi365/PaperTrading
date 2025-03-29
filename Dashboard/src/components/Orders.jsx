import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import { format } from 'date-fns';
import { useUser } from '@clerk/clerk-react';
import { API_URL } from '../config';
import { eventBus, EVENTS } from '../utils/eventBus';

const Orders = () => {  
    const { user } = useUser();
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchOrders = async () => {
        if (!user) return;
        
        try {
            setLoading(true);
            const res = await axios.get(`${API_URL}/allOrders`);
            // Filter orders for the current user
            const userOrders = res.data.filter(order => order.userId === user.id);
            setAllOrders(userOrders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();

        // Listen for new orders
        const handleOrderPlaced = () => {
            fetchOrders();
        };
        
        eventBus.on(EVENTS.ORDER_PLACED, handleOrderPlaced);
        
        return () => {
            eventBus.off(EVENTS.ORDER_PLACED, handleOrderPlaced);
        };
    }, [user]);

    return (
        <div className='text-white p-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-semibold'>My Orders ({allOrders.length})</h1>
                    <p className='text-sm text-zinc-400 mt-1'>Showing orders for {user?.firstName || user?.username}</p>
                </div>
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