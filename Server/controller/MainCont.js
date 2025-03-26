const Catmodel=require('../model/CategoryModel')
const Subcatmodel=require('../model/SubcategoryModel')
const Productmodel=require('../model/ProductModel')
const CategoryAdd=async(req,res)=>{
    try {
        const {category}= req.body
        const cat=await Catmodel.create({category:category})
        res.send(cat)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}

const GetCategory=async(req,res)=>{
    try {
        const cat=await Catmodel.find()
        res.send(cat)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}


const SubCategoryAdd=async(req,res)=>{
    try {
        const {subCategory,category}= req.body
        const catId=await Catmodel.findOne({category:category})
        const subcat=await Subcatmodel.create({SubCategory:subCategory,CategoryId:catId._id,Category:category})
        res.send("ok")
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}

const GetSubCategory=async(req,res)=>{
    try {
        const {category}= req.body
        const subcat=await Subcatmodel.find({Category:category})
        res.send(subcat)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}

const AddProduct=async(req,res)=>{
    try {
        const{category, subCategory, product}=req.body;
        const product1=await Productmodel.create({Category:category,Subcategory:subCategory,Proname:product})
        res.send(product1);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}

const ViewProduct=async(req,res)=>{
    try {
        const{category, subCategory}=req.body;
       if(!subCategory){
        const product2=await Productmodel.find({Category:category})
        res.send(product2);
        return;
       }
else{
        const product3=await Productmodel.find({$and:[{Category:category},{Subcategory:subCategory}]})
        res.send(product3);
}
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}


const DeleteProduct=async(req,res)=>{
    try {
        const{id}=req.body
        const product=await Productmodel.findByIdAndDelete(id)
        res.send("Deleted")
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong"})
    }
}





module.exports={CategoryAdd,GetCategory,SubCategoryAdd,GetSubCategory,AddProduct,ViewProduct,DeleteProduct}
