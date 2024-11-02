const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const userRouter = require('./user/routes/user');
const mapRouter = require('./user/routes/map');

const app = express();
const PORT = 8080 || process.env.PORT;
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/services', mapRouter);

mongoose.connect(`mongodb+srv://cereals28:zQSz033ELftR1tUG@cluster0.g8zhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas: ', error);
    });