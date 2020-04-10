const Typewriter = function(txtElement,words,wait=2050){
    this.txtElement =txtElement;
    this.words=words;
    this.txt='';
    this.wordindex=0;
    console.log(this.wordindex);
    this.wait=parseInt(wait,10);
    this.type();
    this.isdeleting=false;
}                         
Typewriter.prototype.type=function(){
    const current = this.wordindex % this.words.length;
    const fulltxt=this.words[current];
if(this.isdeleting){
        this.txt=fulltxt.substring(0,this.txt.length - 1);
    }       
else{ 
      this.txt=fulltxt.substring(0,this.txt.length + 1);
    }                                                   
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;
    let typespeed=300;
if(this.isdeleting){
        typespeed/=2;
    }
else if(!this.isdeleting && this.txt===fulltxt){
        typespeed=this.wait;
        this.isdeleting=true;
    } 
if(this.isdeleting && this.txt===''){
        this.isdeleting=false;
        this.wordindex++;
        typespeed=200;         
    }   

    setTimeout(()=>this.type(),typespeed);
}                
document.addEventListener('DOMContentLoaded',init);
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');  
    new Typewriter (txtElement,words,wait);
}
//animated side bar
function toggleside(){
    document.getElementById('header').classList.toggle("active");
}
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "mosesogbonna68@gmail.com",
	Password : "chinaza100",
	To : 'mosesogbonna68@gmail.com',
	From : "",
	Subject : "email subject",
	Body : "just testing if it is working",
	}).then(
		message => alert("mail sent successfully")
	);
}
/** 
var timer=3000;
var i=0;
var images=[];
images[0]="IMG_20190514_113108_3.jpg";
images[1]="IMG_20190331_112001_0.jpg"
function imageslider(){
    var myimages=document.getElementById("test");
    myimages.style.color="black";
    setTimeout(imageslider(),timer)
    console.log("successful");
}
imageslider();*/
