let scrollView=document.querySelectorAll(".section4__container__class__view")
let backend=document.getElementById("section4__container__BackEnd")
let frontend=document.getElementById("section4__container__FrontEnd")
let icon1=document.getElementById("frontend")
let icon2=document.getElementById("backend")
let container=document.getElementById("container")
let selected_nav=document.querySelectorAll('.selected_nav')
let dotContainer=document.querySelector(".section6__container__dot")
let direction=document.querySelectorAll(".fa-angle-double-right")
let slider=document.getElementById("section6__container__slides")
let slides=document.getElementById("section6__container__slides")
let slide=document.querySelectorAll(".section6__container__slides__class");
let dots=document.querySelectorAll(".section6__container__dot span");
let slideIndex=0;










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





function plusslide(position){
      slideIndex+=position

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



let interval=window.setInterval(()=>{
    showslide()
},6000)
/*
direction.forEach((ele)=>{
    ele.addEventListener("mouseover",()=>{
        window.clearInterval(interval)
    })
    ele.addEventListener("mouseout",()=>{
        interval=window.setInterval(()=>{
            showslide();
        },6000)
    })
})
dots.forEach((ele)=>{
    ele.addEventListener("mouseover",()=>{
        window.clearInterval(interval)
    })
    ele.addEventListener("mouseout",()=>{
        interval=window.setInterval(()=>{
            showslide();
        },6000)
    })
})
*/
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

dotContainer.addEventListener("mouseover",()=>{
    window.clearInterval(interval)
})

dotContainer.addEventListener("mouseout",()=>{
    interval=window.setInterval(()=>{
        showslide();
    },5000)
})

//this handles navbar on desktop

function scrollFunction() {
    
    if (document.body.scrollTop > 50 ||  document.documentElement.scrollTop > 50) {
        document.getElementById("container__section1").style.boxShadow= "2px 1px rgb(218, 214, 214)"
        document.getElementById("container__section1").style.backgroundColor="rgb(248, 248, 248)"

    } 
    else {
        document.getElementById("container__section1").style.boxShadow= "none"
        document.getElementById("container__section1").style.backgroundColor="transparent"
    }


    if(frontend.scrollHeight<400){
  
        if(document.documentElement.scrollTop<=400){
            //home
            selectedNav(0)
        }
        else if(document.documentElement.scrollTop<=1180){
            //about
            selectedNav(1)
        }
        else if(document.documentElement.scrollTop<=1450){
            //skill
            selectedNav(2)
        }
        else if(document.documentElement.scrollTop<=1932){
            //service
            selectedNav(3)
        }
        else if(document.documentElement.scrollTop<=2200){
            //project
            selectedNav(4)
        }
        else if(document.documentElement.scrollTop>2200){
            //contact
            selectedNav(5)
        }
    }
    else{
        if(document.documentElement.scrollTop<=400){
            //home
            selectedNav(0)
        }
        else if(document.documentElement.scrollTop<=1180){
            //about
            selectedNav(1)
        }
        else if(document.documentElement.scrollTop<=1600){
            //skill
            selectedNav(2)
        }
        else if(document.documentElement.scrollTop<=2000){
            //service
            selectedNav(3)
        }
        else if(document.documentElement.scrollTop<=2700){
            //project
            selectedNav(4)
        }
        else if(document.documentElement.scrollTop>2700){
            //contact
            selectedNav(5)
        }
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


//this handles the massage sent;
$('form').on('submit',(e)=>{
    e.preventDefault();

    const fullname=$("#fullname").val().trim();
    const email=$("#email").val().trim();
    const message=$("#message").val().trim();

    const data={
        fullname,
        email,
        message,
    };

    $.post('/email',data,(req,res)=>{

        if(res=="success"){
            swal("Submitted", "You would be contacted for further processing", "success");
        }
       
    });
    $("#fullname").val('')
    $("#email").val('')
    $("#message").val('')
})