import express from "express";
import { registerController,loginController,testController } from '../controllers/authController.js';
//router object
const router =express.Router()
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//routing
//REGISTER method post so user can edit their data
router.post('/register',registerController);

//login
router.post('/login',loginController);

//test route
router.get('/test',requireSignIn,isAdmin,testController);

export default router;