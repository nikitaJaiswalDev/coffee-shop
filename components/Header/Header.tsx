'use client'
import { useState } from 'react'
import { Searchbar } from '..'

const Header = () => {
  const [search, setSearch] = useState('')
  const handleChange = () => {
    
  }
  return (
    <div className='flex p-5'>
        <div className="w-1/2">
        <h1 className='text-2xl font-display font-bold'>Welcome to Coffeehouse</h1>
        <h6 className="text-gray-300">Choose the category</h6>
        </div>
        <div className="w-1/2">
        <Searchbar search={search} handleChange={handleChange}/>
        </div>
    </div>
  )
}

export default Header