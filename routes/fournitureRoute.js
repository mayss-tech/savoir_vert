const express = require ('express');


const {fournitureSave,  fournitureDetails} = require('../controllers/fournitureControllers');
const Router=express.Router()

Router.post('/newFourniture', fournitureSave);
Router.post('/fournitureDetails', fournitureDetails);

module.exports = Router;