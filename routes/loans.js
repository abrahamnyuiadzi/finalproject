const express= require('express');
const app = express();
const router = require('express').Router();


const loansController = require('../controllers/loans');
const {isAuthenticated} =require("../middleware/authenticate");


router.get('/',  loansController.getAll);

router.get('/:id',loansController.getSingle);

router.post('/',  isAuthenticated,loansController.createUser);

router.put('/:id',isAuthenticated,loansController.updateUser);

router.delete('/:id',isAuthenticated,loansController.deleteUser);