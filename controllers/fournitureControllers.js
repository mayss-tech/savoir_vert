const Fourniture = require('../model/fourniture');

exports.fournitureSave = async (req,res)=>{
    const {image,name, desc,price,qtn}=req.body;
    try {
        const newFourniture = new Fourniture({
            image,name, desc,price,qtn
        })
        await newFourniture.save();
        res.status(200).json(newFourniture);
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error});
    }
};

exports.fournitureFind = async (req,res)=>{
    try {
        const fourniture = await Fourniture.find()
        res.status(200).json(fourniture)
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error});
    }
};
