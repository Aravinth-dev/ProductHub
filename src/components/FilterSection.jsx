import React from 'react'
import { LuFilter } from "react-icons/lu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaListUl } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";

const FilterSection = ({searchValue,setSearchValue,setSelectedCategory}) => {
  

  return (
    <div className='max-sm:flex-wrap max-sm:py-4 max-sm:h-auto gap-3 w-[96%]  h-24 shadow-xl shadow-gray-200 bg-white/60 mx-auto mb-20 rounded-2xl flex items-center justify-between px-5'>
      
      {/* Search */}
      <div className='w-[70%] max-sm:w-full'>
        <label className="flex items-center gap-2 w-full px-2 py-2 bg-white border border-gray-300 rounded-sm 
          focus-within:ring-2 focus-within:ring-blue-500 
          focus-within:shadow-[0_0_10px_2px_rgba(59,130,246,0.6)] 
          transition-all">
          
          {/* Search Icon */}
          <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          {/* Input */}
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.replace(/[^A-Za-z0-9 ]/g,""))}
            className="grow focus:outline-none placeholder:text-gray-400 text-gray-700"
            placeholder="Search by Product Name"
            aria-label="Search products"
          />

          {/* Shortcut */}
          <div className="flex gap-1 max-md:hidden">
            <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-200 rounded-md text-gray-500">Ctrl</kbd>
            <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-200 rounded-md text-gray-500">K</kbd>
          </div>
        </label>
      </div>

      {/* Filter + View Controls */}
      <div className='flex w-full gap-3 items-center'>

        {/* Filter Dropdown */}
        <LuFilter size={21} className='text-blue-500' />
        <Select onValueChange={setSelectedCategory}
        
        >
          <SelectTrigger
            className="w-[180px] max-sm:w-full md:w-[280px] bg-white border border-gray-300 rounded-sm 
              focus:ring-2 focus:ring-blue-500 
              focus:shadow-[0_0_10px_2px_rgba(59,130,246,0.6)] 
              transition-all"
          >
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Categories" className="cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
              All Categories
            </SelectItem>
            <SelectItem value="Electronics" className="cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
              Electronics
            </SelectItem>
            <SelectItem value="Home & Garden" className="cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
              Home & Garden
            </SelectItem>
            <SelectItem value="Sports" className="cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
              Sports
            </SelectItem>
            <SelectItem value="Clothing" className="cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
              Clothing
            </SelectItem>
          </SelectContent>
        </Select>

       

      </div>
    </div>
  )
}

export default FilterSection
