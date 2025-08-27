import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Input } from "./ui/input";
import { FaBox } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const EditProduct = ({ setEditProduct, editProduct, isEditOpen, setIsEditOpen,updateProdct,error,setError }) => {
  if (!isEditOpen) return null; // ✅ cleaner conditional rendering
console.log(editProduct)
  return (
    <div className="fixed z-[1000] inset-0 h-full bg-black/40 flex items-center justify-center">
      <div className="w-120 h-auto bg-white rounded-xl p-6 font-roboto">
        
        
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center"> 
            <div className="p-3 bg-gradient-to-r from-[#1DA1F2] to-[#0066FF] text-white rounded-lg">
                      <FaBox size={20} />
            </div>
            <div>
               <h2 className="text-2xl font-bold">Edit Product</h2>
               <p className="text-base text-gray-400">Update product information</p>
            </div>
           
          </div>
          
          <RxCross2 
            size={20} 
            className="cursor-pointer" 
            onClick={() => setIsEditOpen(false)} 
          />
        </div>

       
        <div className="mt-4 flex flex-col gap-4 w-full">
          
          <div className="grid w-full items-center gap-1 ">
            <label htmlFor="product">Product Name <span>*</span></label>
            <Input 
              type="text" 
              id="product" 
              placeholder="Enter the Product Name"
              value={editProduct.title}
              onChange={(e) => {
                let value= e.target.value.trimStart().replace(/[^A-Za-z0-9 ]/g, "")
                setEditProduct((prev) => ({
                  ...prev,
                  title: value,
                }));
                if(!value){
                setError((prev) => ({
                  ...prev,
                  title:"Title is required"
                }))
              }else{
                setError((prev) => ({
                  ...prev,
                  title:""
                }))
              }
              }} 
            />
            <p className="text-red-500">{error.title}</p>
          </div>

          
          <div className="grid w-full items-center gap-1">
  <label htmlFor="Category">Category <span>*</span></label>
  <Select
   
    value={editProduct.category || "All Categories" }
    onValueChange={(value) =>{
      setEditProduct((prev) => ({
        ...prev,
        category: value,
      }))
      if(!value || value === 'All Categories'){
                setError((prev) => ({
                  ...prev,
                  category:"Category is required"
                }))
              }else{
                setError((prev) => ({
                  ...prev,
                  category:""
                }))
              }
      }
    }
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="All Categories" />
    </SelectTrigger>
    <SelectContent className="z-[1003]">
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
   <p className="text-red-500">{error.category}</p>
</div>
          
          <div className="grid w-full items-center gap-1">
            <label htmlFor="price">Price(USD) <span>*</span></label>
            <Input 
              type="number" 
              id="price" 
              placeholder="0" 
              value={editProduct.price}
              onChange={(e) => {
                let value = Number(e.target.value)
                setEditProduct((prev) => ({
                  ...prev,
                  price:value,
                }));
                if(!value || value <= 0){
                setError((prev) => ({
                   ...prev,
                  price:"Price must be greater than 0",
                }))
              }else{
                setError((prev) => ({
                   ...prev,
                  price:"",
                }))
              }
              }}
            />
            <p className="text-red-500">{error.price}</p>
          </div>

         
          <div className="grid w-full items-center gap-1">
            <label htmlFor="url">Image URL <span>*</span></label>
            <Input 
              type="url" 
              id="url" 
              placeholder="https://example.com/image.jpg"
              value={editProduct.images}  
              onChange={(e) => {
                let value =e.target.value
                setEditProduct((prev) => ({
                  ...prev,
                  images: value,
                }));
                if(!value){
                  setError((prev) => ({
                    ...prev,
                  images: "Image URL is required",
                  }))
                }else{
                  setError((prev) => ({
                    ...prev,
                  images: "",
                  }))
                }
              }}
            />
             <p className="text-red-500">{error.images}</p>
          </div>

          
          <div className="grid w-full items-center gap-1">
            <label htmlFor="description">Description <span>*</span></label>
            <Textarea 
              id="description" 
              placeholder="Enter product description" 
              value={editProduct.description}
              onChange={(e) => {
                setEditProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />
          </div>

          
          <div className="flex justify-end gap-3">
            <Button 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => setIsEditOpen(false)} // close on cancel
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-tr from-sky-500 to-indigo-500 hover:shadow-2xl  hover:shadow-indigo-200 cursor-pointer hover:scale-102 active:scale-98 transition-all duration-700" onClick={updateProdct}>
              Edit Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
