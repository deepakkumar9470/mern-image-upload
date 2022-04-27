import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    desc: {type: String, required: true, trim: true},
    photo: {type: String},

}, {timestamps: true})



const UserModel = mongoose.model('user', UserSchema)

export default UserModel