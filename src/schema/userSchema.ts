//import * from zod
import { string, object, TypeOf } from 'zod';

export const userSchema = object({
    body: object({
        name: string({
            required_error: "name cannot be blank"
        }).min(6, 'atleast 6 characters'),
        email: string({
            required_error: "email address is required"
        }).email('valid email only'),
        password: string({
            required_error: 'provide a password'
        }).min(6, "atleast 6 characters")
    })
});

export const loginUserSchema = object({
    body: object({
        email: string({
            required_error: "email address is required"
        }).email('valid email only'),
        password: string({
            required_error: 'provide a password'
        })
    })
});

export type RegisterUserSchema = TypeOf<typeof userSchema>['body'];
export type LoginUserSchema = TypeOf<typeof loginUserSchema>['body'];