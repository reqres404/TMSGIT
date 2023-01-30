const express = require("express");
const  router = express.Router()
const {
    createItem,
    getItem,
    getItems,
    deleteItem,
    updateItem,
  } = require("../controllers/itemController");

router.get("/",getItems);

router.get("/:id",getItem);

router.post("/", createItem);

router.delete("/:id",deleteItem);

router.patch("/:id",updateItem);

module.exports = router;
