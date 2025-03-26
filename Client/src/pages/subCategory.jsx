import { useState,useEffect} from "react"
import axios from "axios";
const SubCategory=()=>{
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState("");
    const [cat,setcat]= useState("")

const handleSubmit=async()=>{
if(subCategory==""||cat==""){
    alert("Please fill all the fields")
}
else{
let api="http://localhost:8080/api/subcategory"
let res=await axios.post(api,{subCategory:subCategory,category:cat})
alert("SubCategory Added")

}
}

    const getCategory=async()=>{    
        let api="http://localhost:8080/api/getcategory"
        let res=await axios.get(api)
        setCategory(res.data)
    }

    useEffect(()=>{
        getCategory()
    },[])


    const ans=category.map((key)=>{
        return(
            <>
            <option value={key.category}>{key.category}</option>
            </>
        )
    })

    return(
        <>

<div className="category">
        <h1>Sub Category</h1>




Select Category:
        <select name="category" value={cat} onChange={(e) => setcat(e.target.value)}>
          {ans}
        </select> <br />

   Enter SubCategory :<input type="text"  value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} />
<br />
   <button onClick={handleSubmit}>Submit</button>
      
      </div>
        </>
    )
}

export default SubCategory