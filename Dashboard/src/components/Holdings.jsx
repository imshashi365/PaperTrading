import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { VerticalGraph } from './VerticalGraph.jsx';

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3002/allHoldings").then((res) => {
            console.log(res.data)
            setAllHoldings(res.data)
        });
    }, [])

    const labels = allHoldings.map((stock) => stock.name);
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Current Value',
                data: allHoldings.map((stock) => stock.price * stock.qty),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
                label: 'Investment Value',
                data: allHoldings.map((stock) => stock.avg * stock.qty),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    const handleChartOpen = () => setShowChart(true);
    const handleChartClose = () => setShowChart(false);

    return (
        <div className='text-white p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Holdings ({allHoldings.length}) </h1>
                <button
                    onClick={handleChartOpen}
                    className='bg-zinc-700 text-zinc-100 px-4 py-1 rounded-md flex items-center gap-2 hover:bg-zinc-600'
                >
                    <SignalCellularAltIcon /> Charts
                </button>
            </div>
            <div className='mt-4'>
                <table className='flex w-full bg-zinc-900 p-2 px-5'>
                    <thead className='w-full'>
                        <tr className=' bg-zinc-900 text-zinc-300'>
                            <th className='text-left w-48 p-2'>Stock</th>
                            <th className='text-left w-48'>Qty.</th>
                            <th className='text-left w-48'>Avg. Cost</th>
                            <th className='text-left w-48'>LTP</th>
                            <th className='text-left  w-48'>Cur. Value</th>
                            <th className='text-left  w-48'>P&L</th>
                            <th className='text-left  w-48'>Net Chg.</th>
                            <th className='text-left w-48'>Day Chg.</th>
                        </tr>
                        {allHoldings.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? 'text-green-500' : 'text-red-500';
                            const dayClass = stock.isLoss ? 'text-red-500' : 'text-green-500';
                            return (
                                <tr key={index} className='tableRow border-t-1 border-zinc-700 p-2 text-zinc-400'>
                                    <td >{stock.name}</td>
                                    <td className='p-2'>{stock.qty}</td>
                                    <td className='p-2'>{stock.avg.toFixed(2)}</td>
                                    <td className='p-2'>{stock.price.toFixed(2)}</td>
                                    <td className='p-2'>{curValue.toFixed(2)}</td>
                                    <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                                    <td className={profClass}>{stock.net}</td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>

            <Dialog
                open={showChart}
                onClose={handleChartClose}
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle className="flex justify-between items-center bg-zinc-900 text-white">
                    Holdings Chart
                    <IconButton onClick={handleChartClose} size="small">
                        <CloseIcon className="text-white" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="bg-zinc-900">
                    <div className="h-[600px] w-full py-4">
                        <VerticalGraph data={chartData} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Holdings