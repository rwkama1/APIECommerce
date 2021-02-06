'use strict';
var express = require('express');
var router = express.Router();
var FactoryLogic =require("e-commercee/ECommerce/dist/logic/FactoryLogic").FactoryLogic;
var Category =require("e-commercee/ECommerce/dist/shared/entity/Category").Category;

/* GET categories listing. */
router.get('/', async function (req, res) {
    var getCategories=await FactoryLogic.getLCategory().getCategories();
    res.send(getCategories);
});

router.get('/getCategory', async function (req, res) {
    try
    {
    var getCategory=await FactoryLogic.getLCategory().getCategory("");
  
    res.send(getCategory);
    }
    catch(error)
    {
         res.status(400).send({ error: error.toString() });
    }
});
router.get('/addCategory', async function (req, res) {
    try
    {
    var dtcat = new Category("Conectividad", "");
    var addCategory=await FactoryLogic.getLCategory().addCategory(dtcat);
  
    res.send(addCategory);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});
module.exports = router;
