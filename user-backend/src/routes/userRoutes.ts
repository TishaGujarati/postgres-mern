import express from 'express';
import {
   loginController,
   registerController,
   getUserListController,
   getUserProfileController,
 } from "../controllers/userController";

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/profile/:email', getUserProfileController);

router.get('/users', getUserListController);

export default router;