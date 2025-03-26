import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [category, setCategory] = useState([]);
  const [subData, setSubData] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const [cat, setCat] = useState("");
  const [product, setProduct] = useState("");

  const handleSubmit = async () => {
    if (!cat || !subCategory || !product) {
      alert("Please fill all the fields");
      return;
    }

    else{
  let api="http://localhost:8080/api/addproduct"
let res=await axios.post(api,{category:cat,subCategory:subCategory,product:product})
console.log(res.data)
alert("Product Added")
    }
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
      <label>Product Name:</label>
      <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>
        Submit
      </button>

      </div>
    </>
  );
};

export default Product;

