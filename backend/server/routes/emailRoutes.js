import express from "express";
import Email from "../model/Email.js";

const router = express.Router();

// Get All 
router.get('/', async (req, res) => {
    await Email.find()
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json({message: err.message}))
});

router.post('/', async (req, res)=>{
    const data = req.body;

    try {
        await Email.create(data);
    } catch (err) {
        return res.status(400).json({message: err.message});
    }

    res.json(data);
});

export default router;