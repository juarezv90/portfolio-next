import { mailOptions, transporter } from "../../../config/nodemailer";

const EMAIL_CONTROL_FIELDS = {
    name: "Name: ",
    email: "Email: ",
    phone: "Phone: ",
    message: "Message: "
}

const generateEmailContent = (data) => {
    const textString = Object.entries(data)
    const userSubject = textString.filter(value => value[0] === 'subject').reduce((str, [key, val]) => str = val, "");
    const itemText = textString.filter(value => value[0] != 'subject').reduce((str, [key, val]) => str += `${EMAIL_CONTROL_FIELDS[key]}${val} \n`, "")
    return {
        text: itemText,
        subject: userSubject,
    }
}

const handler = async (req, res) =>{
    if (req.method === "POST"){
        const data = req.body;
        if(!data.name || !data.phone || !data.email || !data.message){
            return res.status(400).json({message:"Bad request5"})
        }
       try {
        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
        })
        return res.status(200).json({success: true})
       } catch (error) {
        return res.status(400).json({message: error.message})
       }
    }

    return res.status(400).json({message:"Bad request 4"})
}

export default handler;