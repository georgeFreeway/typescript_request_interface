import express from 'express';
import { registerUsers, loginUsers } from '../controllers/userController';
import { validateInputs } from '../middlewares/validateInputs';
import { userSchema, loginUserSchema } from '../schema/userSchema';

const userRoute = express.Router();

userRoute.post('/users/register', validateInputs(userSchema), registerUsers);
userRoute.post('/users/login', validateInputs(loginUserSchema), loginUsers);

export default userRoute;