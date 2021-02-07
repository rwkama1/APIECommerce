'use strict';
var express = require('express');
var router = express.Router();
var FactoryLogic =require("e-commercee/ECommerce/dist/logic/FactoryLogic").FactoryLogic;
var Article =require("e-commercee/ECommerce/dist/shared/entity/Article").Article;


router.get('/', async function (req, res) {
    var getArticles=await FactoryLogic.getLArticle().getArticles();
    res.send(getArticles);
});

router.get('/getArticle/(:barcode)', async function (req, res) {
    try
    {
    var getArticle=await FactoryLogic.getLArticle().getArticle(req.params.barcode);
  
    res.send(getArticle);
    }
    catch(error)
    {
         res.status(400).send({ error: error.toString() });
    }
});
router.post('/addArticle', async function (req, res) {
    try
    {
    var dtart = new Article(req.body.barcode,req.body.name,req.body.price,req.body.stock,
        req.body.description,req.body.img,req.body.category);
    var addArticle=await FactoryLogic.getLArticle().addArticle(dtart);
    res.send(addArticle);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});
router.put('/updateArticle', async function (req, res) {
    try
    {
    var dtartup = new Article(req.body.barcode,req.body.name,req.body.price,req.body.stock,
        req.body.description,req.body.img,req.body.category);
    var updateArticle=await FactoryLogic.getLArticle().updateArticle(dtartup);
    res.send(updateArticle);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});
router.delete('/deleteArticle', async function (req, res) {
    try
    {
    var dtartdel = new Article(req.body.barcode,"",0,0,"","",null);
    var delArt=await FactoryLogic.getLArticle().deleteArticle(dtartdel);
    res.send(delArt);
    }
    catch(error)
    {
        res.status(400).send({ error: error.toString() });
    }
});

module.exports = router;
