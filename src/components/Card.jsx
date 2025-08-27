import React from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const Card = ({ product,handleEdit }) => {
  if(product === 0){
    return(
      <p className="text-gray-500 col-span-full text-center">No products found.</p>
    )
  }
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 font-roboto pb-12">
  {product.map((items) => (
    <div
      key={items.id}
      className="bg-white max-lg:max-w-[380px] max-lg:mx-auto rounded-xl shadow-md shadow-gray-200  hover:shadow-gray-100 transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={items?.images}
          alt={items.title || "Product"}
          className="w-full h-full object-cover transform  group-hover:scale-106 transition-transform duration-500"
        />

        <span className="absolute top-3 right-3 bg-sky-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow">
          ${items.price}
        </span>
      </div>

     
      <div className="p-5 flex flex-col gap-3 group-hover:-translate-y-2 transition-all duration-500">
     
        <div className="flex gap-2">
          <h3 className="text-lg font-semibold  text-gray-900 line-clamp-2 group-hover:text-[#1DA1F2] transition-all duration-500">
            {items.title}
          </h3>
          <span className=" h-fit text-xs font-medium px-3 py-1 rounded-full bg-[#1DA1F2] text-white w-fit">
            {items?.category}
          </span>
        </div>


        <p className="text-sm text-gray-600 line-clamp-2">
          {items.description}
        </p>

      
        <div className="flex items-center gap-3 mt-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium hover:-translate-y-1 transition-all duration-500  cursor-pointer"
          onClick={() => handleEdit(items?.id,'edit')}>
            <MdModeEditOutline size={20} />
            Edit
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 hover:-translate-y-1 transition-all duration-500  cursor-pointer"
            onClick={() => handleEdit(items?.id,'delete')}
          >
            <MdDelete size={20} />
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default Card;
