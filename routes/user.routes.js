const {getAllData,getOneData,updateOneData,deleteOneData,deleteAllData} = require('../controllers/user.controllers')
const express = require('express');
const userRouter = express.Router()

userRouter.get('/',getAllData);
userRouter.get('/:id',getOneData);
userRouter.put('/:id',updateOneData);
userRouter.delete('/:id',deleteOneData);
userRouter.delete('/deleteAll',deleteAllData);


module.exports = userRouter

