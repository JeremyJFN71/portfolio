import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Admin from '../model/Admin.js';

export const login = async (req, res)=>{
    const admin = await Admin.findOne({email: req.body.email});

    if(!admin){
        return res.json({message: 'Bad Credentials'});
    }

    const checkPassword = await bcrypt.compare(req.body.password, admin.password);

    if(checkPassword){
        const token = jwt.sign(
            {id: admin._id},
            process.env.JWT_KEY,
            {expiresIn: '1d'}
        );

        res.json({token, message: 'Login Success'});
    } else{
        res.json({message: 'Bad Credentials'});
    }
}