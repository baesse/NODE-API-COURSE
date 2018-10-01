const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async() => {
  var data = await Product.find(
    {
      active: true
    },
    "title price slug"
  );
  return data
};

exports.post = body => {
  var product = new Product(body);
  return product.save();
};

exports.getBySlug = async(slug) => {
  var data = await Product.findOne(
    { active: true, slug: slug },
    "title description price slug tags"
  );
  return data
};

exports.getById = async(id) => {
  var data = await Product.findById(id);
  return data
};

exports.getByTags = async(body) => {
  var data = await Product.find(
    { tags: body.params.tags, active: true },
    "title description price slug tags"
  );
  return data
};

exports.put = async(id,data) => {
  var data = await Product.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price
    }
  });
  return data
};

exports.delet = async(id) => {
   var data  = await Product.findByIdAndDelete(id)
   return data
};
