import jwt from "jsonwebtoken";
import Admin from "../model/Admin.js";

const adminMiddleware = async (req, res, next)=>{
    const {authorization} = req.headers
    let token;
    
    if(authorization){
        try {
            token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.admin = await Admin.findOne({email: decoded.email}).select('-password');
            next();
        } catch (err) {
            res.status(401).json({message: 'Unauthorized'});
        }
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
};

export default adminMiddleware;