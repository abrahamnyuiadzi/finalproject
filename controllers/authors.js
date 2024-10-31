const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll =async(req,res)=>{
    const result =await mongodb.getDatabase().db().collection('authors').find();
    result.toArray().then((authors)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(authors);


    });
  

}

const getSingle =async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const result =await mongodb.getDatabase().db().collection('authors').find({_id:authorsId});
    result.toArray().then((contacts)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(authors[0]);
     });
    
}
const createUser =async (req,res)=>{
    //swagger.tags=['users']
    const user ={
        authorsName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
      
    };
    const reponse =await mongodb.getDatabase().db().collection('authors').insertOne(authors);
   if(reponse.acknowledged>0){
    res.status(204).send();
   }else{
    res.status(500).json(response.error||'some error occured while updating the user ');
    
   }

};

const updateUser =async (req,res)=>{
    //swagger.tags=['users']

 const userId = new ObjectId(req.params.id);
 const user ={
     authorsName:req.body.firstName,
     lastName:req.body.lastName,
     email:req.body.email,
    
 };
 const reponse =await mongodb.getDatabase().db().collection('authors').replaceOne({ _id :authorsId},user);
if(reponse.modifiedCount>0){
 res.status(204).send();
}else{
 res.status(500).json(reponse.error||'some error occured while updating the user ');
 
}

};

const deleteUser =async (req,res)=>{
    //swagger.tags=['users']
 const userId = new ObjectId(req.params.id);
 const user ={
     authorsName:req.body.firstName,
     lastName:req.body.lastName,
     email:req.body.email,
    
 };
 const reponse =await mongodb.getDatabase().db().collection('authors').deleteOne({ _id :authorsId});
if(reponse.deletedCount>0){
 res.status(204).send();
}else{
 res.status(500).json(reponse.error||'some error occured while updating the user ');
 
}

};







module.exports={
    getAll,
    getSingle,
    createUser,
    deleteUser,
    updateUser
   
 
}