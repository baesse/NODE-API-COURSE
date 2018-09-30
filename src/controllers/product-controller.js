const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.post = (req, res, next) => {
  var product = new Product(req.body);
  product
    .save()
    .then(x => {
      res.status(201).send({ message: "Produto cadastrado com sucesso" });
    })
    .catch(e => {
      res
        .status(400)
        .send({ message: "Falha ao cadastrar o produto", data: e });
    });
};

exports.get = (req, res, next) => {
  Product.find({ active: true }, "title price slug")
    .then(x => {
      res.status(200).send(x);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) => {
  Product.findOne(
    { active: true, slug: req.params.slug },
    "title description price slug tags"
  )
    .then(x => {
      res.status(200).send(x);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Product.findById(req.params.id)
    .then(x => {
      res.status(200).send(x);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.getByTags = (req, res, next) => {
  Product.find(
    { tags: req.params.tags, active: true },
    "title description price slug tags"
  )
    .then(x => {
      res.status(200).send(x);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price
    }
  })
    .then(x => {
      res.status(200).send(x);
    })
    .catch(x => {
      res.status(400).send(x);
    });
};

exports.delete = (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(x => {
      res.status(200).send(x);
    })
    .catch(x => {
      res.status(400).send(x);
    });
};
