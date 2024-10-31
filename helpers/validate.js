const validator = require('../helpers/validate');

const saveAuthors =(res,req,next)=>{
    const validationRule = {
        authorsName: 'require|string ',
        lastName:'require|string ',
        email: 'require|eamil '

    };
validator(req.body, validationRule,{},(err,status) => {
    if (!status){
        res.status(412).send({
             success :false,
             message:'validation failed',
             data: error
        });
        }else{
            next();
        };
    });

};

module.exports ={
    saveAuthors
}