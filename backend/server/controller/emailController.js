import Email from "../model/Email.js";
import ContactMe from "../Email/ContactMe.js";

// Send Email
export const sendEmail = async (req, res) => {
    const data = req.body;

    try {
        await Email.create(data);
    } catch (err) {
        return res.status(400).json({message: err.errors});
    }

    // Send Email
    try {
        await ContactMe(data.name, data.email, data.subject, data.message);
    } catch (err) {
        return res.status(500).json({message: err});
    }

    res.json({message: 'Email has been sent successfully', data});
}