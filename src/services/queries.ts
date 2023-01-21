//import the User class and the UserModel from the models
import { User } from "../models/users";
import UserModel from "../models/users";

export const createUsers = async(user: Partial<User>) => {
    return UserModel.create(user);
}

export const loginUser = async(email: string) => {
    return UserModel.findOne({ email });
}
