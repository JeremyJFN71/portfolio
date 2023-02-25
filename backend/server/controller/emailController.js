import Email from "../model/Email.js";
import ContactMe from "../Email/ContactMe.js";

export const allEmail = async (req, res) => {
    await Email.find()
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json({message: err.message}));
}

export const sendEmail = async (req, res) => {
    const data = req.body;

    try {
        await Email.create(data);
    } catch (err) {
        return res.status(400).json({message: err.message});
    }

    // Send Email
    await ContactMe(data.name, data.email, data.subject, data.message);

    res.json({message: 'Email has been sent successfully', data});
}

export const oneEmail = async (req, res)=>{
    await Email.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json({message: err.message}));
}