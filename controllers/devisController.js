const Devis = require('../model/devis');
exports.devis = async (req,res)=>{ 
    const 
    {name,
    society,
    email,
    phone,
    post,
    msg,
    typeOfService,
    conception
    } = req.body;
try {
    const searchRes = await Devis.findOne({ email });
        if (searchRes)
        return res.status(401).json({ msg: 'user already exists' });
    const newDevis = new Devis({
        name, society , email ,phone, post,msg,typeOfService,conception
    });
    await newDevis.save();
    res.status(201).json(newDevis)
} catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
}
};