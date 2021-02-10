'use strict';
var express = require('express');
var router = express.Router();
var FactoryLogic =require("e-commercee/ECommerce/dist/logic/FactoryLogic").FactoryLogic;
var Order =require("e-commercee/ECommerce/dist/shared/entity/Order").Order;
var Client =require("e-commercee/ECommerce/dist/shared/entity/Client").Client;

router.get('/', async function (req, res) {

    res.send("Welcome to Order");
});

router.post('/startOrder', async function (req, res) {
    try
    {
    var sorder=await FactoryLogic.getLOrder().startOrder();
  
    res.send(sorder);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.post('/registerItemonOrder', async function (req, res) {
    try
    {
    
        var sorderreg=await FactoryLogic.getLOrder().registerItemonOrder(req.body.barcode,req.body.quantity);
        res.send(sorderreg);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.post('/closeOrder', async function (req, res) {
    try
    {
        var closeorder=await FactoryLogic.getLOrder().closeOrder();     
        res.send(closeorder);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.post('/saveOrder', async function (req, res) {
    try
    {
        var dtclient = new Client("72289541",'Client3',"Client3","Client3","","");
        var savorder=await FactoryLogic.getLOrder().saveOrder(dtclient);     
        res.send(savorder);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
//********************************************** */
router.delete('/removeItemonOrder/(:barcode)', async function (req, res) {
    try
    {
        var remorder=await FactoryLogic.getLOrder().removeItemonOrder(req.params.barcode);     
        res.send(remorder);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.post('/cancelOrder', async function (req, res) {
    try
    {
        var cancelorder=await FactoryLogic.getLOrder().cancelorder();     
        res.send(cancelorder);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});

module.exports = router;
