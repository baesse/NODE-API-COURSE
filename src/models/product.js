const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: string,
    required: true,
    trim: true
  },
  price: {
    type: number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  tags: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = mongoose.model("Product", schema);
