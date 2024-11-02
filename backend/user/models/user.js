const mongoose = require('mongoose');
/* 
Parola, mail, CNP 
*/
const Schema = mongoose.Schema;



var userSchema = new Schema({
    CodNumericPersonal: { type: String, required: true, unique: true },
    emailAddress : { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
})

module.exports = mongoose.model('Users', userSchema);