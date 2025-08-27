import React,{useEffect} from 'react'
import { IoWarningOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const DeletePopup = ({isDelete,setIsDelete,popUpProduct,deleteProduct}) => {

  useEffect(() => {
        const handleKeyDown = (e) => {
          if (!isDelete) return;
    
          if (e.key === "Escape") {
            setIsDelete(false);
          } 
          else if (e.key === "Enter") {
            e.preventDefault(); 
            deleteProduct(); 
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [isDelete, deleteProduct, setIsDelete]);

    if(!isDelete) return null

  return (
    <div className='fixed z-[1000] inset-0 h-full bg-black/40 flex items-center justify-center'>
      <div className='w-120 h-auto bg-white rounded-xl p-6 font-roboto flex gap-3'>
        <div className='bg-red-100 h-fit w-fit p-3 rounded-4xl text-red-600 '>
            <IoWarningOutline size={30}/>
        </div>
        <div>
            <h2 className='text-xl font-semibold'>Delete Product</h2>
            <p className='text-sm text-gray-400'>Are you sure you want to delete <span className='font-semibold text-black'>{popUpProduct.title}</span> ? This action cannot be undone.</p>
            <div className='flex justify-end gap-3 mt-4'>
                <Button className='bg-gray-200 text-black p-5 cursor-pointer hover:bg-gray-300' onClick={()=>setIsDelete(false)}>Cancel</Button>
                <Button className='bg-red-500 p-5 hover:bg-red-600 cursor-pointer' onClick={() => {
                    deleteProduct(popUpProduct.id)
                    setIsDelete(false)
                }}>Yes, Delete</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePopup
