import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Button, Typography } from '@mui/material'
import CurrencyPicker from './flag';


export default function Header() {
  return (
    <header className="flex w-full bg-opacity-50 z-10 items-center justify-between px-4 md:px-10 py-2 max-w-screen-xl mx-auto">
  {/* Logo */}
  <img src="./images/logo.jpg" className="w-16 h-16 md:w-20 md:h-20" />

  {/* Search Bar */}
  <div className="block md:hidden relative w-full max-w-xs md:max-w-md lg:max-w-lg">
  <input
    type="text"
    placeholder="Search for Destinations"
    className="w-full p-2 pl-10 border rounded-full"
  />
  <FaSearch className="absolute left-3 top-3 text-gray-400" />
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
