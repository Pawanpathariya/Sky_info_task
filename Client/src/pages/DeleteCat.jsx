import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
 const DeleteCat = () => {
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState("");

  const handleSubmit = async () => {
  let api="http://localhost:8080/api/deletecat"
let res=await axios.post(api,{category:cat})
console.log(res.data)
alert("Category Deleted")
  };

  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/getcategory");
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCategory();
  }, []);


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
      <button onClick={handleSubmit}>
        Delete
      </button>

      </div>
    </>
  );
};

export default DeleteCat