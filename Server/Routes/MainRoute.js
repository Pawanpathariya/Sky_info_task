const express=require('express');
const router=express.Router();
const MainCont=require("../controller/MainCont")
router.post('/Category',MainCont.CategoryAdd);
router.get("/getCategory",MainCont.GetCategory)
router.post('/subcategory',MainCont.SubCategoryAdd);
router.post("/getsubcategory",MainCont.GetSubCategory)
router.post("/addproduct",MainCont.AddProduct)
router.post("/viewproduct",MainCont.ViewProduct)
router.post("/deleteproduct",MainCont.DeleteProduct)
router.post("/deletesubcat",MainCont.DeleteSubcat)
router.post('/getproduct',MainCont.getProduct)
router.post('/updateproduct',MainCont.UpdateProduct)
router.post('/deletecat',MainCont.DeleteCat)

module.exports=router