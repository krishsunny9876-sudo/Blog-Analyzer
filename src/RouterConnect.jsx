import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { createContext } from 'react'

const UserContext = createContext();

export default function RouterConnect() {
    const [isFooterabsolute, setIsFooterabsolute] = useState(true);
    return (
        <UserContext.Provider value={{ isFooterabsolute, setIsFooterabsolute }}>
            <div className="body2">
            </div>
            <Navbar />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    )
}

export { UserContext }