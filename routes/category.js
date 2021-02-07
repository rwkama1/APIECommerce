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

router.get('/getCategory/(:name)', async function (req, res) {
    try
    {
    var getCategory=await FactoryLogic.getLCategory().getCategory(req.params.name);
  
    res.send(getCategory);
    }
    catch(error)
    {
         res.status(400).send({ error: error.toString() });
    }
});
router.post('/addCategory', async function (req, res) {
    try
    {
    var dtcat = new Category(req.body.name, req.body.description);
    var addCategory=await FactoryLogic.getLCategory().addCategory(dtcat);
    res.send(addCategory);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});
router.put('/updateCategory', async function (req, res) {
    try
    {
    var dtcat = new Category(req.body.name, req.body.description);
    var updCategory=await FactoryLogic.getLCategory().updateCategory(dtcat);
    res.send(updCategory);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});
router.delete('/deleteCategory', async function (req, res) {
    try
    {
    var dtcat = new Category(req.body.name, "");
    var delCategory=await FactoryLogic.getLCategory().deleteCategory(dtcat);
    res.send(delCategory);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});

module.exports = router;
