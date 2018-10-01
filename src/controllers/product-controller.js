const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const ValidationContract = require("../validators/validator");
const repository = require("../repositories/product-repository");
exports.post = async(req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.title,
    3,
    "o Titulo deve conter pelo menos 3 carecteres"
  );

  if (!contract.isValid()) {
    res
      .status(400)
      .send(contract.errors())
      .end();
    return;
  }

  try{
    var data = await repository
    .post(req.body)   
    res.status(201).send({ message: "Produto cadastrado com sucesso" });  
  }catch(e){
    res
    .status(400)
    .send({ message: "Falha ao cadastrar o produto", data: e });
  }
};

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    var data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getById = (req, res, next) => {
  try {
    var data = repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (x) {
    res.status(500).send(x);
  }
};

exports.getByTags = async (req, res, next) => {
  try {
    var data = await repository.getByTags(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.put = async (req, res, next) => {
  try {
    var data = await repository.put(req.params.id, req.body);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.delete = async (req, res, next) => {
  try {
    var data = await repository.delet(req.params.id)
    res.status(400).send(data);
  } catch (e) {
    res.status(200).send(e);
  }
};
