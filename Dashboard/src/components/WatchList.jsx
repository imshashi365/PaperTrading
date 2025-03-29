import React, { useState } from 'react';
import { Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { watchlist } from "../Data/data";
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { API_URL } from '../config';
import { eventBus, EVENTS } from '../utils/eventBus';

const WatchList = () => {
  return (
    <div className="w-1/3 bg-[#0F0616] p-5">
      <input
        type="text"
        placeholder="Search 5000+ Stock & ETFs"
        className="w-full bg-zinc-900 h-10 p-5 rounded-md"
      />
      <span className="counts">{watchlist.length} / 50</span>
      <ul className="p-2">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlist, setShowWatchlist] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setShowWatchlist(true)}
      onMouseLeave={() => setShowWatchlist(false)}
    >
      <div className="items flex w-full justify-between p-3 border-t border-t-zinc-900">
        <p className="text-white">{stock.name}</p>

        <div className="stockItems flex w-2/5 justify-around">
          <span className="percent">{stock.percent}</span>
          <span className="arrow">
            {stock.isDown ? (
              <ArrowDownIcon style={{ color: "red" }} />
            ) : (
              <ArrowUpIcon style={{ color: "green" }} />
            )}
          </span>
          <span className="price" style={{ color: stock.isDown ? "red" : "green" }}>
            {stock.price}
          </span>
        </div>
      </div>
      {showWatchlist && <WatchlistAction uid={stock.name} />}
    </li>
  );
};

const WatchlistAction = ({ uid }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState('');

  const handleOpenBuy = () => {
    if (!isSignedIn) {
      setError('Please sign in to place orders');
      return;
    }
    setError('');
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setError('');
    setOpenBuy(false);
  };

  const handleOpenSell = () => {
    if (!isSignedIn) {
      setError('Please sign in to place orders');
      return;
    }
    setError('');
    setOpenSell(true);
  };

  const handleCloseSell = () => {
    setError('');
    setOpenSell(false);
  };

  const createOrder = async (mode) => {
    try {
      if (!isLoaded || !isSignedIn || !user) {
        setError('Please sign in to place orders');
        return;
      }

      if (!user.primaryEmailAddress?.emailAddress) {
        setError('User email not available');
        return;
      }

      const orderData = {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: mode,
        userId: user.id,
        userEmail: user.primaryEmailAddress.emailAddress
      };

      const response = await axios.post(`${API_URL}/newOrder`, orderData);
      if (response.data.message) {
        mode === 'BUY' ? handleCloseBuy() : handleCloseSell();
        setStockQuantity(1);
        setStockPrice(0.0);
        setError('');
        // Emit order placed event
        eventBus.emit(EVENTS.ORDER_PLACED, response.data.order);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Failed to place order';
      setError(errorMessage);
      console.error(`Error placing ${mode.toLowerCase()} order:`, error);
      console.error(`Error placing ${mode.toLowerCase()} order:`, error);
    }
  };

  const OrderDialog = ({ open, handleClose, mode }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{mode} {uid}</DialogTitle>
      <DialogContent>
        <div className="space-y-4 p-4">
          <fieldset className="border rounded p-3">
            <legend className="text-sm px-2">Qty.</legend>
            <input
              type="number"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              min="1"
            />
          </fieldset>
          <fieldset className="border rounded p-3">
            <legend className="text-sm px-2">Price</legend>
            <input
              type="number"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
              step="0.05"
            />
          </fieldset>
          <div className="mt-4 text-sm text-gray-600">
            {mode === 'BUY' ? 'Margin' : 'Value'} required ₹{(stockQuantity * stockPrice).toFixed(2)}
          </div>
        </div>
      </DialogContent>
      <DialogActions className="p-4">
        <button
          onClick={handleClose}
          className="px-4 py-2 rounded text-gray-700 border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() => createOrder(mode)}
          className={`px-4 py-2 rounded text-white hover:opacity-90 ml-2 ${mode === 'BUY' ? 'bg-blue-500' : 'bg-red-500'}`}
        >
          {mode}
        </button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-opacity-90">
      {error && (
        <div className="absolute top-0 left-0 w-full text-center bg-red-500 text-white py-1 text-sm">
          {error}
        </div>
      )}
      <Tooltip title="Buy (B)" placement="top" arrow>
        <button
          onClick={handleOpenBuy}
          className="w-12 h-6 rounded text-center mr-2 cursor-pointer bg-green-500 text-white"
        >
          BUY
        </button>
      </Tooltip>

      <OrderDialog open={openBuy} handleClose={handleCloseBuy} mode="BUY" />

      <Tooltip title="Sell (S)" placement="top" arrow>
        <button
          onClick={handleOpenSell}
          className="w-12 h-6 rounded text-center mr-2 cursor-pointer bg-red-500 text-white"
        >
          SELL
        </button>
      </Tooltip>

      <OrderDialog open={openSell} handleClose={handleCloseSell} mode="SELL" />

      <Tooltip title="Analytics" placement="top" arrow>
        <BarChartOutlined className='icon w-12 h-6 rounded text-center mr-2 cursor-pointer bg-white text-black' />
      </Tooltip>
      <Tooltip title="More" placement="top" arrow>
        <MoreHoriz className='w-15 h-6 rounded text-center mr-2 cursor-pointer bg-white text-black' />
      </Tooltip>
    </div>
  );
};

export default WatchList;