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
    
    const {firstname,lastname,email,tel,address,state,city}=req.body;
    let text1="firstname: "+firstname+";\n"+"lastname: "+lastname+";\n"+"tel: "+tel+";\n"+"address: "+address+";\n"+"state: "+state+";\n"+"city: "+city+";\n"+"email: "+email
    let text2="package selected"+"\n"+package;
    let text=text1+"\n"+text2;
    const subject="Credit repair client registration";
   
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

app.post('/email2',(req,res)=>{
    const {firstname,lastname,email,tel,address,state,city,}=req.body;
    const {firstname2,lastname2,email2,tel2,address2,state2,city2,}=req.body;
    let text1="firstname: "+firstname+";\n"+"lastname: "+lastname+";\n"+"tel: "+tel+";\n"+"address: "+address+";\n"+"state: "+state+";\n"+"city: "+city+";\n"+"email: "+email
    let text3="firstname: "+firstname2+";\n"+"lastname: "+lastname2+";\n"+"tel: "+tel2+";\n"+"address: "+address2+";\n"+"state: "+state2+";\n"+"city: "+city2+";\n"+"email: "+email2
    let text2="package selected"+"\n"+package;
    let text=text1+"\n"+"\n"+text3+"\n"+text2;
    const subject="Credit repair client registration";
   
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