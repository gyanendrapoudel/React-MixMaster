import express from 'express'
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()

const users = []
const app = express()
app.use(cors())
app.use(express.json())
const PORT  = 9000

app.get("/",(req,res)=>{
    res.send("hello")
})
app.post('/api/newsletter', async (req, res) => {
  users.push(req.body)
  const {name, lastName, email} = req.body
   await sendEmail(email,"success","details received" )
  res.json({ status: 200, msg: 'success, check your email' })
})


app.listen(PORT, (error)=>{
 error ? console.log(error) : console.log('Connection successful')
})
async function sendEmail(to, subject, text){
    if(!process.env.EMAIL || !process.env.PASSWORD){
            console.log('Missing email credentials in environment variables')
            return
    }
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      debug: true,
    })

    let mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      text: text,
    }

    try{
        let info = await transporter.sendMail(mailOptions);
        console.log('email sent successfully')
    }catch(error){
        console.log("Error sending email", error);
    }
}