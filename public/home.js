let scrollView=document.querySelectorAll(".section4__container__class__view")
let backend=document.getElementById("section4__container__BackEnd")
let frontend=document.getElementById("section4__container__FrontEnd")
let icon1=document.getElementById("frontend")
let icon2=document.getElementById("backend")

scrollView.forEach(element => {
    element.addEventListener("click",move)
})
window.onscroll = function() {scrollFunction()}

function move(){

    if(this.id=="frontend"){
        frontend.classList.toggle('move');
        icon1.classList.toggle('rotate');
    }
    else{
        backend.classList.toggle('move'); 
        icon2.classList.toggle('rotate');
    }
}




let slideIndex=0;
let slider=document.getElementById("section6__container__slides")
let slides=document.getElementById("section6__container__slides")
let slide=document.querySelectorAll(".section6__container__slides__class");
let dots=document.querySelectorAll(".section6__container__dot span");

function plusslide(position){
      slideIndex+=position
      console.log(position)
    if(slideIndex>slide.length){
        slideIndex=1;
    }
    else if(slideIndex<1){  
        slideIndex=slide.length
        //console.log(slide.length)
    }
    for(let i=0; i<dots.length; i++){
        const element=dots[i];
        element.classList.remove("dot-active")
    }
   
    //console.log(`-${slideIndex-1}00%`)
    slides.style.left=`-${slideIndex-1}00%`;
    dots[slideIndex-1].classList.add("dot-active")
}

function currentslide(index){
    console.log(index)
    if(index>slide.length){
    slideIndex=1; 
    }
    else if(index<1){  
      slideIndex=slide.length
    }

  for(let i=0; i<dots.length; i++){
      const element=dots[i];
      element.classList.remove("dot-active")
  }

  //console.log(`-${index-1}00%`);
  slides.style.left=`-${index-1}00%`;
  dots[index-1].classList.add("dot-active")
  slideIndex=index
}







function showslide(){
    slideIndex++;
 if(slideIndex>slide.length){
      slideIndex=1; 
      //console.log(slide.length)
  }
  else if(slideIndex<1){  
      slideIndex=slide.length
     // console.log(slide.length)
  }
  for(let i=0; i<dots.length; i++){
      const element=dots[i];
      element.classList.remove("dot-active")
  }

  //console.log(`-${slideIndex-1}00%`)
  slides.style.left=`-${slideIndex-1}00%`;
  dots[slideIndex-1].classList.add("dot-active")
}


//change image after every 3sec
let interval=window.setInterval(()=>{
    showslide()
},3000)

//onHover stop changing every image after every 3sec

slider.addEventListener("mouseover",()=>{
    window.clearInterval(interval)
})

//on mouseout from slide then again start changing every image after 3sec;
slider.addEventListener("mouseout",()=>{
    interval=window.setInterval(()=>{
        showslide();
    },3000)
})


//this handles navbar on desktop

function scrollFunction() {
        console.log(document.body.scrollTop)
    if (document.body.scrollTop > 50 ||  document.documentElement.scrollTop > 50) {
        document.getElementById("container__section1").style.boxShadow= "2px 1px rgb(218, 214, 214)"
        document.getElementById("container__section1").style.backgroundColor="rgb(248, 248, 248)"

    } 
    else {
        document.getElementById("container__section1").style.boxShadow= "none"
        document.getElementById("container__section1").style.backgroundColor="transparent"
    }
}