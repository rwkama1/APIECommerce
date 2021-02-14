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
router.post('/saveOrder/(:idencard)', async function (req, res) {
    try
    {
        var dtclient = await FactoryLogic.getLUser().getUser(req.params.idencard);
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
/**********************/
//GETS */
router.get('/getOrder/(:id)', async function (req, res) {
    try
    {
        var idnumber=parseInt(req.params.id)
    var getor=await FactoryLogic.getLOrder().getOrder(idnumber);  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.get('/getPendingOrders', async function (req, res) {
    try
    {
    var getor=await FactoryLogic.getLOrder().getPendingOrders();  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.get('/getClientOrders/(:idcard)', async function (req, res) {
    try
    {
    var getor=await FactoryLogic.getLOrder().getClientOrders(req.params.idcard);  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.get('/getAllOrders', async function (req, res) {
    try
    {
    var getor=await FactoryLogic.getLOrder().getAllOrders();  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.get('/getDeliveredOrders', async function (req, res) {
    try
    {
    var getor=await FactoryLogic.getLOrder().getDeliveredOrders();  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.get('/getOrdersbyDates', async function (req, res) {
    try
    {
        var dateone=new Date(req.body.date1);
        var datetwo=new Date(req.body.date2);
    var getor=await FactoryLogic.getLOrder().getOrdersbyDates(dateone,datetwo);  
    res.send(getor);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
//************************** */
router.post('/deliverOrder/(:id)', async function (req, res) {
    try
    {
    var parseeint=parseInt(req.params.id);
    let getorder = await FactoryLogic.getLOrder().getOrder(parseeint);
    var deliord=await FactoryLogic.getLOrder().deliverOrder(getorder);  
    res.send(deliord);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
router.post('/personalOrder/(:id)', async function (req, res) {
    try
    {
   var parseeint=parseInt(req.params.id);
    let getorder = await FactoryLogic.getLOrder().getOrder(parseeint);
    var persorder=await FactoryLogic.getLOrder().personalOrder(getorder);  
    res.send(persorder);
     }
   catch(error)
   {
    res.status(400).send(error.toString());
   }
});
module.exports = router;
