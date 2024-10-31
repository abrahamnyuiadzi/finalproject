const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll =async(req,res)=>{
    const result =await mongodb.getDatabase().db().collection('loans').find();
    result.toArray().then((loans)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(loans);


    });
  

}

const getSingle =async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const result =await mongodb.getDatabase().db().collection('loans').find({_id:loansId});
    result.toArray().then((contacts)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(loans[0]);
     });
    
}
const createUser =async (req,res)=>{
    //swagger.tags=['users']
    const user ={
        loans:req.body.loans,
      
    };
    const reponse =await mongodb.getDatabase().db().collection('loans').insertOne(loans);
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
     loans:req.body.loans,
     
    
 };
 const reponse =await mongodb.getDatabase().db().collection('user').replaceOne({ _id :loansId},loans);
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
    loans:req.body.loans,
 };
 const reponse =await mongodb.getDatabase().db().collection('loans').deleteOne({ _id :loansId});
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