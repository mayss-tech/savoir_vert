const Category = require ('../model/category');
const Fourniture = require('../model/fourniture');


exports.fournitureSave = async (req,res)=>{
    const {idCategory,image,name, desc,price,qtn}=req.body;
    try {
        const newFourniture = new Fourniture({
            image,name, desc,price,qtn
        })
        await newFourniture.save();
        const category = await Category.findById(idCategory)
        category.fourniture.push(newFourniture._id)
        await Category.findByIdAndUpdate(idCategory,{
            fourniture : category.fourniture
        })
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

exports.fournitureDetails = async (req,res)=>{
    const {id}=req.body
    try {
        const category = await Category.findById(id)
        const fournitureDetails = await Fourniture.find({_id:category.fourniture})
        const payload={
            name:category.name,
            fournitureDetails:fournitureDetails
        }
        // const fournitureDetails = await Fourniture.find(_id,{fourniture:category.fourniture})
        
        // const payload={
           
        //     fournitureDetails:fournitureDetails
        // }
        res.status(200).json(payload)
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error});
    }
}
