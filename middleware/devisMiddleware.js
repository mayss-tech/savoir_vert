const {check, validationResult}= require('express-validator');

exports.devisRules=()=>[
    check('name', 'name field is required').notEmpty(),
    check('society', 'society field is required').notEmpty(),
    check('email', 'email field should be valid').isEmail(),
    check('email', 'email field is required').notEmpty(),
    check('phone', 'phone field is required').notEmpty(),
];

exports.validator=(req,res,next)=>{
    const errors = validationResult(req);
    errors.isEmpty()? next(): res.status(400).json({errors:errors.array()});
}
