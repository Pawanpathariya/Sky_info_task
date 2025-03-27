import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Display=()=>{
  const navigate=useNavigate();
    const [category, setCategory] = useState([]);
    const [subData, setSubData] = useState([]);
    const [subCategory, setSubCategory] = useState("");
    const [cat, setCat] = useState("");  
    const [product, setProduct] = useState([]);
    const handleSubmit = async () => {

    let api="http://localhost:8080/api/viewproduct"
  let res=await axios.post(api,{category:cat,subCategory:subCategory})
  setProduct(res.data)
    };
  
    const getCategory = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/getcategory");
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getSubCategory = async () => {
      if (!cat) {
        setSubData([]);
        return;
      }
      try {
        const res = await axios.post("http://localhost:8080/api/getsubcategory", { category: cat });
        setSubData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getCategory();
    }, []);
  
    useEffect(() => {
      getSubCategory();
    }, [cat]);
  


    const handleDelete = async (id) => {
      try {
     let res=await axios.post(`http://localhost:8080/api/deleteproduct`, {id: id });
     alert("Deleted")
     handleSubmit()
      } catch (error) {
   console.log(error);
      }

    }

const ans=product.map((key)=>{
  return(
    <tr>
      <td >{key.Proname}</td>
      <td >{key.Category}</td>
      <td>{key.Subcategory}</td>
      <td><button onClick={() => handleDelete(key._id)}>Delete</button></td>
      <td><button onClick={() => handleEdit(key._id)}>Edit</button></td>
    </tr>
  )
})




const handleEdit = async (id) => {
navigate('/update/'+id)
}


    return (
      <>
              <div className="category">
        <h1>Product</h1>
        <label>Select Category:</label>
        <select name="category" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="">--Select Category--</option>
          {category.map((key) => (
            <option key={key.category} value={key.category}>
              {key.category}
            </option>
          ))}
        </select>
        <br />
        <label>Select SubCategory:</label>
        <select
          name="subCategory"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          disabled={!cat}
        >
          <option value="">--Select SubCategory--</option>
          {subData.map((item) => (
            <option key={item.SubCategory} value={item.SubCategory}>
              {item.SubCategory}
            </option>
          ))}
        </select>
        <br />
        <button onClick={handleSubmit}>
          Submit
        </button>
        </div>
<table style={{marginTop:"20px", border:"1px solid black"}}>
<tr>
    <th>Product</th>
    <th>Category</th>
    <th>SubCategory</th>
    <th>Delete</th>
    <th>Edit</th>
</tr>
{ans}
</table>

      </>
    );
  };
export default Display