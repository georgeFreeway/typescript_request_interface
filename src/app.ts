//import core packages/folders
import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './services/connect';
import router from './routes';

//install dotenv package and call the config method
//to access our environment variables
config();

//init an express app
const app = express();

//middleware to parse incoming requests
app.use(express.json());

/**
 *  we connect to the database using this 
    imported function, which returns a promise
    we do so because we want to make sure that 
    we are connected to the database before listening
    for requests
 */
connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('going...');
    });
}).catch((error) => {
    console.log(error);
});


//plugin of our external routes
app.use('/api', router);
app.get('/status_check', (_, res) => res.sendStatus(200));