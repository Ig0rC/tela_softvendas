let time = 10000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".img img"),
    max = images.length;

function nextImage(){
  images[currentImageIndex]
    .classList.remove("selected")

  currentImageIndex++;

  if(currentImageIndex == max){
    currentImageIndex = 0;
 }
  images[currentImageIndex]
          .classList.add("selected")
    
}

function start(){
  setInterval(() =>{
    nextImage()
  }, time)
}

window.addEventListener("load", start)


function btn1(){
  images[0]
  .classList.remove("selected")
  images[1]
  .classList.remove("selected")
  images[2]
  .classList.remove("selected")
  time = 0;
  currentImageIndex = 0;
  images[0].classList.add("selected")
}
function btn2(){
  images[0]
  .classList.remove("selected")
  images[1]
  .classList.remove("selected")
  images[2]
  .classList.remove("selected")
  time = 0;
  currentImageIndex = 0;
  images[1].classList.add("selected")
}

function btn3(){
  images[0]
  .classList.remove("selected")
  images[1]
  .classList.remove("selected")
  images[2]
  .classList.remove("selected")
  time = 0;
 
  currentImageIndex = 0;

  images[2].classList.add("selected")
}


