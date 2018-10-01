const repository = require("../repositories/customer-repository");



exports.post = async(req, res, next) => {
   try{
    var data = await repository
    .post(req.body)   
    res.status(201).send({ message: "Client cadastrado com sucesso" });  
  }catch(e){
    res
    .status(400)
    .send({ message: "Falha ao cadastrar o produto", data: e });
  }
};
