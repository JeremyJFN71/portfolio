import {Schema, model} from "mongoose";
import validator from 'validator';

const emailSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required',
        minLength: [3, 'Name at least 3 letters'],
    },
    email: {
        type: String,
        required: 'Email address is required',
        validate: [validator.isEmail, 'invalid email']
    },
    subject: {
        type: String,
        required: 'Subject is required',
    },
    message: {
        type: String,
        required: 'Message is required',
    }
}, {timestamps:true, versionKey: false});

const Email = model('Email', emailSchema);

export default Email;