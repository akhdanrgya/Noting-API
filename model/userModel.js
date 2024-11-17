const mongoose = require('mongoose')

const anak = new mongoose.Schema({
    nama: { type: String, required: true },
    ttl: { type: Date, required: true },
    berat: { type: Number, required: true },
    tinggi: { type: Number, required: true }
})

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    profilePicture: { type: String },
    ttl: { type: Date, required: true },
    anak: [anak]
})


const Users = mongoose.model('users', userSchema)
module.exports = Users