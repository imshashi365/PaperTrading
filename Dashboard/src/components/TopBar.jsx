import React from 'react'
import Menu from './Menu'

const TopBar = () => {
    return (
        <div className='top-bar flex w-full bg-zinc-950 h-18 align-center border-b-2 border-zinc-800'>
            <div className="w-1/3 indices-container flex border-r-1 border-zinc-800 justify-around">
                <div className="nifty flex justify-center items-center text-white">
                    <p className="index">NIFTY50</p>
                    <p className="index-points">{100.2}</p>
                    <p className="percent"></p>
                </div>

                <div className="sensex flex justify-center items-center text-white">
                    <p className="index">SENSEX </p>
                    <p className="index-points">{100.2}</p>
                    <p className="percent"></p>
                </div>
            </div>
            <Menu />

        </div>
    )
}

export default TopBar