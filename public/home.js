let scrollView=document.querySelectorAll(".section4__container__class__view")
let backend=document.getElementById("section4__container__BackEnd")
let frontend=document.getElementById("section4__container__FrontEnd")





scrollView.forEach(element => {
    element.addEventListener("click",move)
})


function move(){
    console.log(frontend)
    
if(this.id=="frontend"){
      frontend.classList.toggle('move');
   }
else{
      backend.classList.toggle('move'); 
 }
  
}