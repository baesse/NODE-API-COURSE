const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");

router.post("/", controller.post);

router.get("/", controller.get);

router.get("/:slug", controller.getBySlug);

router.get("/tags/:tags", controller.getByTags);

router.get("/admin/:id", controller.getById);

router.put("/:id", controller.put);

router.delete("/:id", controller.delete);

module.exports = router;
