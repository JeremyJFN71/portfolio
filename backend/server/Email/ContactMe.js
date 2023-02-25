import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

const ContactMe = async (name, email, subject, message)=>{
    let template = `
        <div style="background-color: rgb(3,40,48); color: white; padding: 20px; border-radius: 20px;">
            <div style="margin-bottom: 10px;">
                <h1 style="text-align: center; font-weight: bold;">Email from Portfolio</h1>
            </div>
            <div>
                <h2>Message: </h2>
                <div style="border-radius: 10px; padding: 10px; background-color: white;">
                    <p style="font-size: 15px; color: black;">
                        ${message}
                    </p>
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <p style="font-size: 15px;">
                    from ${name},<br>
                    ${email}
                </p>
            </div>
        </div>
    `

    // send mail with defined transport object
    await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: process.env.DESTINATION_EMAIL, // list of receivers
        subject: `${subject}`, // Subject line
        html: template  // html body
    });
}

export default ContactMe;