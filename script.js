 //Image Slideshow and time 
 
 // time

 const time = document.getElementById("time");
 
setInterval( ()=>{
    const d = new Date();
    let hr = d.getHours().toString().padStart(2,"0");
    let mins = d.getMinutes().toString().padStart(2,"0");
    let seconds =d.getSeconds().toString().padStart(2,"0");
    let result = `${hr}:${mins}:${seconds}`;
 
    time.textContent= result
}, 1000);

//image slide Program
// DOM


 let slideIndex = 0;
 let prevBtn= document.getElementById("prvBtn");
 let nextBtn = document.getElementById("nextBtn");
 let startSlideShow = document.getElementById("slideShowBtn");

function showSlides() {
    let slides = document.querySelectorAll("img");
   
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex <0){
    slideIndex =slides.length;
  }
 
  slides[slideIndex - 1].style.display = "block";
  
}
//slide show code followed by manual buttons
startSlideShow.textContent =  `SlideShow ON`;
let myVar;
startSlideShow.onclick = function(){
    if(startSlideShow.textContent===`SlideShow ON`){

        startSlideShow.textContent =  `SlideShow OFF`;
        startSlideShow.style.backgroundColor = "red";
     myVar = setInterval(slideShowingFunction, 2000);

    }else{
        clearInterval(myVar);
        startSlideShow.innerHTML =  `SlideShow ON`;
        startSlideShow.style.backgroundColor = "blue";

    }
    
}

prevBtn.onclick = function(){
    slideIndex--;
    showSlides();
    
};
nextBtn.onclick = function (){

    slideIndex++;
    showSlides();
} ;

function slideShowingFunction(){

    slideIndex++;
    showSlides();
} ;
