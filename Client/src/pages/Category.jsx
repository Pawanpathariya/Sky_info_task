import { useState } from "react"
import axios from "axios"
const Category=()=>{
    const [category, setCategory] = useState("")

const handleSubmit=async()=>{
let api="http://localhost:8080/api/category"
let res=await axios.post(api,{category:category})
console.log(res.data)
alert("Category Added")
}

    return(
        <>
        <div className="category">
        <h1>Category</h1>

    Enter Category
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Category