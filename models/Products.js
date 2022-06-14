import mongoose from "../db/config"

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  stock: {
    type: Number,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
});

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
