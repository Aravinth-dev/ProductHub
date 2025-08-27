import React from 'react'
import assest from "@/assets/product-header-img.png"
import { Button } from "./ui/button";

const ProductSubHeader = ({ setIsOpen }) => {
  return (
    <div className='relative w-[96%] max-sm:w-[90%] max-sm:h-auto py-5 h-60 rounded-xl shadow-lg bg-white mb-10 mx-auto overflow-hidden 
                    before:content-[""] before:absolute before:inset-0 
                    before:bg-gradient-to-r before:from-[#1DA1F2] before:to-[#6f00ff]/80 before:z-10'>
      
      {/* Image */}
      <img 
        src={assest} 
        alt="" 
        className='w-full h-full absolute object-cover z-0' 
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col text-white items-center justify-center h-full">
        <h1 className="text-white max-sm:text-4xl text-6xl font-bold">Product Hub</h1>
        <p className='w-[60%] max-sm:text-base max-sm:w-[80%] text-center mt-2 text-xl'>Streamline your inventory with powerful tools to add, edit, and organize your products efficiently.</p>
        <div className='mt-4'>
          <Button
            className="bg-white text-[#1DA1F2] hover:bg-white hover:shadow-blue-200  
               text-lg py-5.5 cursor-pointer hover:scale-102 
               active:scale-98 transition-all duration-700"
            onClick={() => setIsOpen(true)}
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductSubHeader
