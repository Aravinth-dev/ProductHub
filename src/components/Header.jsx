import React from "react";
import { FaBox } from "react-icons/fa6";
import { Button } from "./ui/button";

const Header = ({ setIsOpen }) => {
  return (
    <div
      className="w-full fixed top-0 h-22 shadow-lg px-6 flex gap-4 items-center justify-between
                bg-white/30 backdrop-blur-md border border-white/20 z-[1000]"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-2">
        <div className="p-3 bg-gradient-to-r from-[#1DA1F2] to-[#0066FF] text-white rounded-lg">
          <FaBox size={28} />
        </div>

        <div className="gap-0">
           <h2
          className="text-2xl max-sm:text-xl font-roboto font-bold 
             bg-gradient-to-r from-[#1DA1F2] to-[#0066FF] 
             bg-clip-text text-transparent">ProductHub</h2>
              <p className="text-gray-600 max-sm:text-[12px] -mt-2">Manage your inventory with style</p>
        </div>
      
        </div>
        

        <div>
          <Button
            className="bg-gradient-to-r from-[#1DA1F2] to-[#0066FF] 
               hover:shadow-2xl hover:shadow-blue-200  
               text-lg py-6 cursor-pointer hover:scale-102 
               active:scale-98 transition-all duration-700"
            onClick={() => setIsOpen(true)}
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
