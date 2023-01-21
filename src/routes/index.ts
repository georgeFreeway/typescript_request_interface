/*import express package and also the user route
* so that all route associated with this application
would be plugged in here
*/ 
import express from 'express';
import userRoute from './userRoute';

const router = express.Router();
router.use(userRoute);

export default router;