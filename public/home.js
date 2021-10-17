let scrollView=document.querySelectorAll(".section4__container__class__view")
let backend=document.getElementById("section4__container__BackEnd")
let frontend=document.getElementById("section4__container__FrontEnd")
let icon1=document.getElementById("frontend")
let icon2=document.getElementById("backend")
let container=document.getElementById("container")
let selected_nav=document.querySelectorAll('.selected_nav')


scrollView.forEach(element => {
    element.addEventListener("click",move)
})


window.onscroll = function() {scrollFunction()}

function move(){

    if(this.id=="frontend"||this.id=="frontendH2"||this.id=="frontendP"){
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
},5000)

//onHover stop changing every image after every 3sec

slider.addEventListener("mouseover",()=>{
    window.clearInterval(interval)
})

//on mouseout from slide then again start changing every image after 3sec;
slider.addEventListener("mouseout",()=>{
    interval=window.setInterval(()=>{
        showslide();
    },5000)
})


//this handles navbar on desktop

function scrollFunction() {
        console.log( document.documentElement.scrollTop )
    if (document.body.scrollTop > 50 ||  document.documentElement.scrollTop > 50) {
        document.getElementById("container__section1").style.boxShadow= "2px 1px rgb(218, 214, 214)"
        document.getElementById("container__section1").style.backgroundColor="rgb(248, 248, 248)"

    } 
    else {
        document.getElementById("container__section1").style.boxShadow= "none"
        document.getElementById("container__section1").style.backgroundColor="transparent"
    }


    if(document.documentElement.scrollTop<=0){
        selectedNav(0)
    }
    else if(document.documentElement.scrollTop<=540){
        selectedNav(1)
    }
    else if(document.documentElement.scrollTop<=1090.4000244140625){
        selectedNav(2)
    }
    else if(document.documentElement.scrollTop<=1332.800048828125){
        selectedNav(3)
    }
    else if(document.documentElement.scrollTop<=1795.199951171875){
        selectedNav(4)
    }
    else if(document.documentElement.scrollTop<=2227.199951171875){
        selectedNav(5)
    }
}




function changeColor(){
    container.classList.toggle('color');
    
}
//this section handles changes when it comes to nav bar color

function selectedNav(position){

  for(let i=0; i<selected_nav.length; i++){
      const element=selected_nav[i];
      element.classList.remove("active")
  }
  selected_nav[position].classList.add("active")
}

//menu
function menu(){
    let menu=document.getElementById("menuID")
    let menu_content=document.getElementById("menu_contentID")
    menu_content.classList.toggle('active');
    menu.classList.toggle('activeBar');
}
function viewDetail1(){
    let moreDetails=document.getElementById("section5__container__developer__content")
    moreDetails.classList.toggle('section5Dev');
}
function viewDetail2(){
    let moreDetails=document.getElementById("section5__container__engineer__content")
    moreDetails.classList.toggle('section5Eng');
}