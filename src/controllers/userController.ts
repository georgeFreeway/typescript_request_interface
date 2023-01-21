import { Request, Response } from 'express';
import { RegisterUserSchema, LoginUserSchema } from '../schema/userSchema';
import { createUsers, loginUser } from '../services/queries';

export const registerUsers = async (req: Request<{}, {}, RegisterUserSchema>, res: Response) => {
   const body = req.body;

   try{
      //since we are sure of the request body, we just go ahead
      //and pass it as an argument
      const user = await createUsers(body);
      res.status(200).json({ message: 'Registration Successful! 🎊' });
   }catch(error:any){
      //we set the email to be unique so two users would not
      //have the email address
      if(error.code === 11000){
         res.status(409).json({ message: 'Email Already Taken!' });
      }
      res.status(400).json({ message: 'Something went wrong' });
   }
}

export const loginUsers = async (req: Request<{}, {}, LoginUserSchema>, res: Response) => {
   const { email, password } = req.body;
   const user = await loginUser(email);

   if(!user){
      res.status(400).json({ message: 'No such user' });
   }

   const validatePassword = await user!.verifyPassword(password);
   if(!validatePassword){
      res.status(400).json({ message: 'incorrect credentials' });
   }

   res.status(200).json({ email: user!.email, name: user!.name });
}