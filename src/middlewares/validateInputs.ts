//import from express
import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

/**
 * this is a curried function that
 * takes in any zod object, parses it
 * with the request body, params and query
 * and if successful, calls the next middleware
 * or else returns an error mandating a user
 * to provide the required input
 */
export const validateInputs = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try{
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    }catch(error: any){
        res.status(400).json(error.errors);
    }
} 

