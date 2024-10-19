const express= require('express');
const app = express();
const router = require('express').Router();


const memberController = require('../controllers/members');
const {isAuthenticated} =require("../middleware/authenticate");


router.get('/',  memberController.getAll);

router.get('/:id',memberController.getSingle);

router.post('/',  isAuthenticated,memberController.createUser);