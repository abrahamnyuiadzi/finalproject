const express= require('express');
const app = express();
const router = require('express').Router();


const bookController = require('../controllers/book');
const {isAuthenticated} =require("../middleware/authenticate");


router.get('/',  bookController.getAll);

router.get('/:id',bookController.getSingle);

router.post('/',  isAuthenticated,bookController.createUser);

router.put('/:id',isAuthenticated,bookController.updateUser);

router.delete('/:id',isAuthenticated,bookController.deleteUser);