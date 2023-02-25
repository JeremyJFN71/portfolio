import Admin from '../model/Admin.js';
import bcrypt from 'bcrypt';

const adminSeeder = async ()=>{
    const salt = await bcrypt.genSalt(10);
    const email = process.env.ADMIN_EMAIL;
    const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    try {
        await Admin.create({
            email,
            password
        });
    } catch (err) {
        return console.log(err.message);
    }

    console.log(`Admin successfully created!\nemail: ${email}\npassword: ${password}`)
}

export default adminSeeder;