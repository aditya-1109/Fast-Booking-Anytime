import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
            <img src="./images/logo.jpg" className="w-32 h-32" />
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
