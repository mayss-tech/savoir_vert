const express=require('express');
const connectDB = require ('../Backend/config/dbConnect');
const devis = require ('../Backend/routes/devisRoute');
const fourniture = require('./routes/fournitureRoute');

const app=express();

app.use(express.json());
app.use('/devis', devis);
app.use('/fourniture', fourniture);
connectDB();

const PORT= process.env.PORT || 6000;
app.listen(PORT,err=> err ? console.error(error):console.log( `server is running on PORT ${PORT}`));