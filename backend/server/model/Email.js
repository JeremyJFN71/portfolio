import {Schema, model} from "mongoose";

const emailSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps:true, versionKey: false});

const Email = model('Email', emailSchema);

export default Email;