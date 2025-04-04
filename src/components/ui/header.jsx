import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Button, Typography } from '@mui/material'
import CurrencyPicker from './flag';


export default function Header() {
  return (
    <header className="flex w-full bg-opacity-50 z-10 items-center justify-between px-4 md:px-10  max-w-screen-xl mx-auto">
  {/* Logo */}
  <img src="./images/logo.jpg" className="w-16 h-16 md:w-20 md:h-20" />

  {/* Search Bar */}
  <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search for Destinations"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-600"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
    </div>



  {/* Currency & Login */}
  <div className="flex gap-4 items-center">
  {/* Flag + Currency */}
  <CurrencyPicker />

  {/* Login Button */}
  <Button
    variant="text"
    sx={{
      color: '#049a9b',
      fontWeight: 500,
      textTransform: 'none',
    }}
  >
    Login
  </Button>
</div>

  
</header>

  )
}
