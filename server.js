const express=require('express');
const http=require('http');
const path=require('path');
const sendMail=require("./mail.js")
const app=express();
const port=process.env.PORT || 4000;
const server=http.createServer(app);

app.set('view engine','ejs');
app.use('/static',express.static('public'));





app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});



/*for processing and accessing data "data parsing"*/
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.post('/email',(req,res)=>{
    const {fullname,email,message}=req.body;
    let text=fullname+"\n"+"\n"+message;
    const subject="from my portfolio";
   
   sendMail(email,subject,text,(err,data)=>{
        if(err){
            res.status(500).json({message:"internal error"})
        }
        else{
            res.json({message:"Email sent"})
        }
    })

    res.json({message:'yes'})
})
app.get('/profile/single',(req,res)=>{
    res.render("profile");
})
app.get('/profile/couple',(req,res)=>{
    res.render("couple");
})
server.listen(port,()=>{
    console.log(`working on port ${port}`)
})