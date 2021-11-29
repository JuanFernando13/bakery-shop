import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
})

export default models.Product || model('Product', ProductSchema) 