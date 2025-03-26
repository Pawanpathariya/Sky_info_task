const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Proname: {
        type: String,
        required: true,
    },
    Category: {
      type: String,
      required: true,
      },
      Subcategory: {
        type: String,
        required: true,
      }

});


module.exports = mongoose.model("Product", ProductSchema);
