const express=require('express');
const {devis} =require('../controllers/devisController');
const Router=express.Router()

Router.post('/newDevis', devis);

module.exports = Router;