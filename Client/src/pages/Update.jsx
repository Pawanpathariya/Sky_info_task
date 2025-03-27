import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [subData, setSubData] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const [cat, setCat] = useState("");
  const [product, setProduct] = useState("");

  const getProduct = async () => {
    try {
      const api = "http://localhost:8080/api/getproduct";
      const res = await axios.post(api, { id: id });
      setCat(res.data.Category);
      setProduct(res.data.Proname);
      setSubCategory(res.data.Subcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/getcategory");
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategory = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/getsubcategory", { category: cat });
      setSubData(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getSubCategory();
  }, [cat]);

  const handleSubmit = async () => {
    try {
      const api = "http://localhost:8080/api/updateproduct";
      const res = await axios.post(api, { id, category: cat, subCategory, product });
      alert("Product Updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

    <div className="category">
      <h1>Update</h1>

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
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Update;
