require('dotenv').config(); 
const nodemailer=require('nodemailer');
/*
const mailGun=require('nodemailer-mailgun-transport');

const auth={
    auth:{
        api_key:'1f9aa1d3edfe76d7530f1ac13ff2a7e6-07e45e2a-e7b33e69',
        domain:'sandbox4fe792664b2b4d89b57caa30df5a1cd7.mailgun.org'
    }
}*/
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.PASSWORD,
        pass: process.env.EMAIL
    }
});


const sendMail=(email,subject,text,cb)=>{
    const mailOptions={
        from:email,
        to:"brightmind.lmt@gmail.com",
        subject,
        text
    }
    
    transporter.sendMail(mailOptions,function(err,data){
            if(err){
                cb(err,null)
            }
            else{
                cb(null,data)
            }
    });
    process.env.EMAIL
}

module.exports=sendMail;


