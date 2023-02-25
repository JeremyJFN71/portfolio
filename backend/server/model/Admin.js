import {Schema, model} from "mongoose";
import validator from 'validator';

const adminSchema = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        validate: [validator.isEmail, 'invalid email'],
    },
    password: {
        type: String,
        required: 'Subject is required',
    }
}, {timestamps:false, versionKey: false});

const Admin = model('Admin', adminSchema);

export default Admin;