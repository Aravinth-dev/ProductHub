import Card from "@/components/Card"
import FilterSection from "@/components/FilterSection"
import Header from "@/components/Header"
import { useEffect, useState } from "react"
import AddProduct from "@/components/AddProduct";
import ProductSubHeader from "@/components/ProductSubHeader";
import {db} from "@/lib/firebase"
import { collection, addDoc,onSnapshot,deleteDoc,updateDoc,doc } from "firebase/firestore";
import EditProduct from "@/components/EditProduct";
import DeletePopup from "@/components/DeletePopup";
import {  toast, Bounce } from 'react-toastify';


const Home = () => {
  const [product,setProduct] = useState([])
  const [isopen,setIsOpen] = useState(false)
  const [popUpProduct,setPopUpProduct] = useState()
  const [isEditOpen,setIsEditOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('');
  const [isDelete,setIsDelete] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [addProduct, setAddProduct] = useState({
  title: "",
  category: "", 
  price: '',
  images: "",
  description: "",
});
const [error,setError] = useState({
  title: "",
  category: "", 
  price: "",
  images: "",

})
 

//Add Product
const createProduct = async () => {
  
   let newError = { title: "", category: "", price: "", images: ""};
  let isValid = true;


  if (!addProduct.title.trim()) {
    newError.title = "Title is required";
    isValid = false;
  }
  if (!addProduct.category || addProduct.category === "All Categories") {
    newError.category = "Category is required";
    isValid = false;
  }
  if (!addProduct.price || Number(addProduct.price) <= 0) {
    newError.price = "Price must be greater than 0";
    isValid = false;
  }
  if (!addProduct.images.trim()) {
    newError.images = "Image URL is required";
    isValid = false;
  }
  

  setError(newError);

  if (!isValid) {
    return; 
  }
  try {
    const response = await addDoc(collection(db, "products"), {
      title: addProduct.title,
      category: addProduct.category,
      price: Number(addProduct.price), 
      images: addProduct.images,
      description: addProduct.description,
      createdAt: new Date(), 
    });
    toast( <div className="flex flex-col space-x-2">
      <span className="text-green-600 font-bold">✅ Success!</span>
      <span className="text-gray-700">Product added successfully</span>
    </div>, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
 style: {
          backgroundColor: "#f2fef5",
          border: "1px solid #44ef61",
          color: "#1b9921",
        },
});
    console.log("Product added with ID:", response.id);
    setAddProduct({
      title: "",
      category: "All Categories",
      price: "",
      images: "",
      description: "",
    }); 
    setIsOpen(false); 
  } catch (err) {
    console.error("Error adding product:", err);
  }
};

const handleOpen = (id,module) => {
  console.log(id,module)
  const data = product.find((item)=> item.id === id)

  if(module === 'edit'){
    setIsEditOpen(true)
  }else if(module==='delete'){
    setIsDelete(true)
  }
  setPopUpProduct(data)
}

//Update Product
const updateProdct =  async() =>{
  
   let newError = { title: "", category: "", price: "", images: ""};
  let isValid = true;

  // Validation rules
  if (!popUpProduct.title.trim()) {
    newError.title = "Title is required";
    isValid = false;
  }
  if (!popUpProduct.category || popUpProduct.category === "All Categories") {
    newError.category = "Category is required";
    isValid = false;
  }
  if (!popUpProduct.price || Number(popUpProduct.price) <= 0) {
    newError.price = "Price must be greater than 0";
    isValid = false;
  }
  if (!popUpProduct.images.trim()) {
    newError.images = "Image URL is required";
    isValid = false;
  }
  

  setError(newError);

  if (!isValid) {
    return; // stop execution if validation fails
  }
  try{
  const product = doc(db,"products",popUpProduct?.id || "");
  await updateDoc(product,{
    title: popUpProduct.title,
      category: popUpProduct.category,
      price: Number(popUpProduct.price), 
      images: popUpProduct.images,
      description: popUpProduct.description,
      updateAt: new Date(), 
  });
   toast( <div className="flex flex-col space-x-2">
      <span className="text-green-600 font-bold">✅ Success!</span>
      <span className="text-gray-700">Product Updated successfully...</span>
    </div>, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
 style: {
          backgroundColor: "#f2fef5",
          border: "1px solid #44ef61",
          color: "#1b9921",
        },
});
  setIsEditOpen(false)
  popUpProduct("")
}catch (err){
  console.log("Error saving note:", err)
}
}

//Delete Product
  const deleteProduct = async (id) => {
    deleteDoc(doc(db,"products",id))
    toast( <div className="flex flex-col space-x-2">
      <span className="text-green-600 font-bold">✅ Success!</span>
      <span className="text-gray-700">Product deleted successfully</span>
    </div>, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
 style: {
          backgroundColor: "#f2fef5",
          border: "1px solid #44ef61",
          color: "#1b9921",
        },
});
  }
  useEffect(()=>{

  
   const getProduct = onSnapshot(collection(db,'products'),(snapshot) => {
   const productData = snapshot.docs.map(doc => ({
    id:doc.id,
    ...doc.data()
   }))
   console.log(productData)
   setProduct(productData)
  })

  return () => getProduct()
  },[])


  const filteredProducts = product.filter((product) => {
    const matchesSearch = product?.title?.toLowerCase().includes(searchValue.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="h-auto bg-[#f6f8fa] min-h-screen pt-30">
      <Header  setIsOpen={setIsOpen}/>
      <div className="max-w-[1280px] mx-auto">
        <ProductSubHeader setIsOpen={setIsOpen}/>
      <FilterSection 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <Card product={filteredProducts}
      
      handleEdit={handleOpen}/>
      <AddProduct 
      isopen={isopen}
      setIsOpen={setIsOpen}
      addProduct = {addProduct}
      setAddProduct = {setAddProduct}
      createProduct={createProduct}
      error={error}
      setError={setError}
      />
      <EditProduct 
      editProduct={popUpProduct}
      setEditProduct={setPopUpProduct}
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
      updateProdct={updateProdct}
      error={error}
      setError={setError}
      />
      <DeletePopup 
      isDelete={isDelete}
      setIsDelete={setIsDelete}
      popUpProduct={popUpProduct}
      deleteProduct={deleteProduct}
      />
      </div>
      
    </div>
  )
}

export default Home
