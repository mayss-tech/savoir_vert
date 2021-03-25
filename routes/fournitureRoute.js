const express = require ('express');


const {fournitureSave, fournitureFind} = require('../controllers/fournitureControllers');
const Router=express.Router()

Router.post('/newFourniture', fournitureSave);
Router.get('/newFourniture', fournitureFind);

module.exports = Router;