const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
  CategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  SubCategory:String,
  Category:String
});

module.exports = mongoose.model("SubCategory", SubcategorySchema);

