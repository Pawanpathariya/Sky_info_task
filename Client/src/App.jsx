import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SubCategory from "./pages/subCategory"
import Product from "./pages/Product"
import Display from "./pages/Display"
import Layout from "./Layout"
import DeleteSubcat from "./pages/DeleteSubcat"
import Update from "./pages/Update"
import DeleteCat from "./pages/DeleteCat"
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>

<Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/subcategory" element={<SubCategory/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/display" element={<Display/>}/>
         <Route path="/delsub" element={<DeleteSubcat/>}/>
         <Route path="/delcat" element={<DeleteCat/>}/>
         <Route path="/update/:id" element={<Update/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App