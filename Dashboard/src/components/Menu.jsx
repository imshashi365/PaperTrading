import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Menu = () => {
    const { user } = useUser();
    const [selectedMenu, setSelectedMenu] = useState('0');

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";


    return (
        <div className='menu-container flex justify-between w-2/3 items-center'>
            <img src="/imagess/MindTradeLogo.png" style={{ width: "200px", height: "40px" }} alt="logo" />
            <div className="menuslist flex justify-between items-center w-3/4 p-3">
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

                <div className="profile flex text-white justify-center items-center bg-zinc-900 rounded-md p-1">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "w-11 h-11",
                                userButtonTrigger: "focus:shadow-none"
                            }
                        }}
                    />
                    {/* <div className="ml-3">
                        <p className="username text-sm font-medium">{user?.firstName || user?.username}</p>
                        <p className="text-xs text-gray-400">{user?.primaryEmailAddress?.emailAddress}</p>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Menu