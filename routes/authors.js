const express= require('express');
const app = express();
const router = require('express').Router();


const authorsController = require('../controllers/authors');
const {isAuthenticated} =require("../middleware/authenticate");


router.get('/',  authorsController.getAll);

router.get('/:id',authorsController.getSingle);

router.post('/',  isAuthenticated,authorsController.createUser);

router.put('/:id',isAuthenticated,authorsController.updateUser);

router.delete('/:id',isAuthenticated,authorsController.deleteUser);