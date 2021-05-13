const express = require ('express');
const { categorySave, categoryFind } = require('../controllers/categoryController');


const {} = require('../controllers/fournitureControllers');
const Router=express.Router()

Router.post('/Category', categorySave);
Router.get('/Category', categoryFind);

module.exports = Router;