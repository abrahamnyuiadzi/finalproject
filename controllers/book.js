const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll =async(req,res)=>{
    const result =await mongodb.getDatabase().db().collection('book').find();
    result.toArray().then((book)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(book);


    });
  

}

const getSingle =async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const result =await mongodb.getDatabase().db().collection('book').find({_id:membersId});
    result.toArray().then((contacts)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(book[0]);
     });
    
}
const createUser =async (req,res)=>{
    //swagger.tags=['users']
    const user ={
        bookName:req.body.bookName,
      
    };
    const reponse =await mongodb.getDatabase().db().collection('book').insertOne(book);
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
     bookName:req.body.bookName,
    
    
 };
 const reponse =await mongodb.getDatabase().db().collection('book').replaceOne({ _id :bookId},book);
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
    bookName:req.body.bookName,
 };
 const reponse =await mongodb.getDatabase().db().collection('book').deleteOne({ _id :bookId});
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