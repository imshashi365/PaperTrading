import { Watch } from 'lucide-react'
import React from 'react'
import WatchList from './WatchList'
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Funds from './Funds';
import Positions from './Positions';

const Dashboard = () => {
    return (
        <div className='dashboard-container min-h-screen max-h-full flex bg-zinc-950 text-zinc-500 w-full'> 
            <WatchList />
            <div className="content w-2/3">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard