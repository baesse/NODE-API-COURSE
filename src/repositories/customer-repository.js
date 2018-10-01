const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");


exports.post = async body => {
  var costumer = new Customer(body);
  var data = await costumer.save();
  return data;
};
