//import * from @typegoose/typegoose
import { DocumentType, prop, modelOptions, pre, getModelForClass } from '@typegoose/typegoose';
//we would use argon2 to hash our password
import * as argon from 'argon2';

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
/** before we save a document, we need to hash 
 * so we dont store plain password in the database
*/
@pre<User>('save', async function() {
    if(!this.isModified('password')){
        return;
    }

    const hash = await argon.hash(this.password);
    this.password = hash;

    return;
})
export class User {
    @prop({ required: true })
    name: string;

    @prop({ required: true, unique: true })
    email: string;

    @prop({ required: true })
    password: string;

    async verifyPassword(this: DocumentType<User>, incomingPassword: string): Promise<boolean | undefined> {
        try{
            return argon.verify(this.password, incomingPassword);
        }catch(error){
            console.log(error);
        }
    }
}

//the getModelForClass builds a Model From a Class
const UserModel = getModelForClass(User);
export default UserModel;