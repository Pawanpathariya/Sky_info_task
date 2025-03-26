import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SubCategory from "./pages/subCategory"
import Product from "./pages/Product"
import Display from "./pages/Display"
import Layout from "./Layout"
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

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App