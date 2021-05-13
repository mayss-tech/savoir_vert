  
const express=require('express');
const { register, login, profile } = require("../controllers/userController");
const isAuth = require("../middleware/passort");
const {registerRules, loginRules , validator} = require("../middleware/userMiddleware");
const Router = express.Router();
Router.post('/register',registerRules(), register); 
Router.post('/login',loginRules(), login); 
Router.get('/current',isAuth() ,profile); 
module.exports = Router;