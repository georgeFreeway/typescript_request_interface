Set up a mini express app. atleast one that can connect to the database
we are going to store a user and retrieve, from the database. by so doing, 
we would learn how to use zod, an npm package to type the Express Request 
object, write clean middlewares that would guard routes and validate inputs/resources

connect to the database. make an utils folder inside the source folder and define the database function
we are going to connect to MongoDB

after connecting to the database, we would create our user model with the @typegoose/typegoose package

then proceed to make a userroute

typing the request object
we would make a folder for controllers. and thats where we would extend the request object with zod
so our request object would know exactly what it is expecting

from the services folder, import the queries in


time to create the schema to check inputs and properly type the request object
body or destructure either way goes.

we have to write a middleware that checks what the user inputs. it would be placed on the routes to validate inputs