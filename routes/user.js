'use strict';
var express = require('express');
var router = express.Router();
var FactoryLogic =require("e-commercee/ECommerce/dist/logic/FactoryLogic").FactoryLogic;
var  Client =require("e-commercee/ECommerce/dist/shared/entity/Client").Client;
var  Administrator =require("e-commercee/ECommerce/dist/shared/entity/Administrator").Administrator;

router.get('/', async function (req, res) {

    res.send("Welcome to User");
});
//**************** */
//CLIENTS
router.get('/getClients', async function (req, res) {
    try
    {
    var gc=await FactoryLogic.getLUser().getClients();
  
    res.send(gc);
    }
    catch(error)
    {
         res.status(400).send(error.toString());
    }
});
router.post('/addClient', async function (req, res) {
    try
    {
    var dtc = new Client(req.body.idcard,req.body.cname,req.body.password,req.body.username,req.body.address
        ,req.body.creditcard);
    var addClient=await FactoryLogic.getLUser().addUser(dtc);
    
    res.send(addClient);
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(400).send(error.toString());
    }
});
router.put('/updateClient', async function (req, res) {
    try
    {
    var dtc = new Client(req.body.idcard,req.body.cname,req.body.password,req.body.username,req.body.address
        ,req.body.creditcard);
    var upclient=await FactoryLogic.getLUser().updateUser(dtc);
    res.send(upclient);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.delete('/deleteClient', async function (req, res) {
    try
    {
    var dtc = new Client(req.body.idcard,"","","",""
        ,"");
    var delclient=await FactoryLogic.getLUser().deleteUser(dtc);
    res.send(delclient);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
//******************************************************* */
//ADMIN
router.get('/getAdmins', async function (req, res) {
    try
    {
    var gc=await FactoryLogic.getLUser().getAdmins();
  
    res.send(gc);
    }
    catch(error)
    {
         res.status(400).send(error.toString());
    }
});
router.post('/addAdmin', async function (req, res) {
    try
    {
    var dtc = new Administrator(req.body.idcard,req.body.cname,req.body.password,req.body.username
        ,req.body.position);
    var addAdmin=await FactoryLogic.getLUser().addUser(dtc);
    
    res.send(addAdmin);
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(400).send(error.toString());
    }
});
router.put('/updateAdmin', async function (req, res) {
    try
    {
    var dtc = new Administrator(req.body.idcard,req.body.cname,req.body.password,req.body.username
        ,req.body.position);
    var upddcli=await FactoryLogic.getLUser().updateUser(dtc);
    res.send(upddcli);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.delete('/deleteAdmin', async function (req, res) {
    try
    {
    var dtc = new Administrator(req.body.idcard,"","","","");
    var delad=await FactoryLogic.getLUser().deleteUser(dtc);
    res.send(delad);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
/***************************************************** */
//LOGIN */
router.post('/loginUser', async function (req, res) {
    try
    {
  
    var luser=await FactoryLogic.getLUser().loginUser(req.body.username,req.body.password);
    res.send(luser);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
router.get('/getUser/(:idcard)', async function (req, res) {
    try
    {
  
    var luser=await FactoryLogic.getLUser().getUser(req.params.idcard);
    res.send(luser);
    }
    catch(error)
    {
        res.status(400).send(error.toString());
    }
});
module.exports = router;