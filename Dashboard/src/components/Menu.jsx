import React, { act, useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    const [selectedMenu, setSelectedMenu] = useState('0');
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    const handleProfileClick = (index) => {
        isProfileDropDownOpen(!isProfileDropDownOpen);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";


    return (
        <div className='menu-container flex justify-between w-2/3 items-center'>
            <img src="/imagess/MindTradeLogo.png" style={{ width: "200px", height: "40px" }} alt="logo" />
            <div className="menuslist flex justify-between items-center w-3/4">
                <ul className='flex text-white items-center justify-between w-2/3'>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/" onClick={() => handleMenuClick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/orders" onClick={() => handleMenuClick(1)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/holdings" onClick={() => handleMenuClick(2)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/positions" onClick={() => handleMenuClick(3)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/funds" onClick={() => handleMenuClick(4)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/apps" onClick={() => handleMenuClick(5)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />

                <div className="profile flex  text-white w-1/3 justify-center items-center" onClick={handleProfileClick}>
                    <div className="avatar flex items-center justify-between">
                        <img src="/imagess/profile.png" alt="" style={{ width: "45px", borderRadius: "50%",marginRight:"10px" }} />
                        <p className='username'>USERID</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Menu