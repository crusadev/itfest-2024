/* Express boilerplate; */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

const app = express();
const PORT = 8080 || process.env.PORT;
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log('Test');
});

/*
mongoose.connect(`
    ${mongooseUri}
    `);
*/

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

