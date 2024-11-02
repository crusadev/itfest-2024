/* Express boilerplate; */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const userRouter = require('./user/routes/user');

const app = express();
const PORT = 8080 || process.env.PORT;
dotenv.config();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.get("/", (req, res) => {
    console.log('Test');
});

/* Routes */

app.use('/user', userRouter);


/*
mongoose.connect(`
    ${mongooseUri}
    `);
*/

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})


