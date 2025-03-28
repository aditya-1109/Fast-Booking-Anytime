import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <header className="flex absolute top-0 left-0 bg-opacity-50 z-10 w-screen items-center justify-around py-2  ">
            <img src="./images/logo.jpg" className="w-20 h-20" />
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search for Bali"
                className="w-full p-2 pl-10 border rounded-full"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm">INR ₹</span>
              <Button variant="outlined" color="warning">
                Login
              </Button>
            </div>
    </header>
  )
}
