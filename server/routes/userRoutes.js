import express from 'express'

import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewears/auth.js'


const UserRouter=express.Router()

UserRouter.post('/register', registerUser)
UserRouter.post('/login', loginUser)
UserRouter.get('/credits',userAuth, userCredits)


export default UserRouter; 