const Category = require('../model/category');
const Fourniture = require('../model/fourniture');
exports.categorySave = async (req,res)=>{
    const {image,name}=req.body
    try {
        const newCategory = new Category({
            image,name
        })
        await newCategory.save()
        res.status(200).json(newCategory)
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error});
    }
};
exports.categoryFind = async (req,res)=>{
   
    try {
        const fCategory = await Category.find()
        // const payload={
        //     name : fCategory.name
        // }
        // console.log('jj',payload)
        res.status(200).json(fCategory)
       
        } catch (error) {
        console.error(error)
    res.status(500).json({errors:error});
    }
}