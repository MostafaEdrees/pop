var imgList = Array.from( document.getElementsByClassName("imgIteam") ) ;
var lightConatiner = document.querySelector(".lightContainer");
var lightiTeam = document.querySelector(".lightiTeam");
var nextButtom=document.getElementById('next');
var prevButtom=document.getElementById('prev');
var closetButtom=document.getElementById('close');
var currentImge;


for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
     currentImge =  imgList.indexOf(e.target)
 
    var imagSrc = e.target.src;
 
    lightConatiner.classList.replace("d-none", "d-flex");
    lightiTeam.style.backgroundImage = `url(${imagSrc})`;

  });
}

function nextSlide()
{
     currentImge++;

if(currentImge== imgList.length)
{
     currentImge=0;
}
     var imagSrc =  imgList[currentImge].getAttribute('src')
  lightiTeam.style.backgroundImage = `url(${imagSrc})`;

}
function prevSlide()
{
     currentImge--;
     if( currentImge==-1){
          currentImge=imgList.length-1;



     }
     var imagSrc =  imgList[currentImge].getAttribute('src')
  lightiTeam.style.backgroundImage = `url(${imagSrc})`;

}
function closeSlide(){

     lightConatiner.classList.replace(   "d-flex" ,  "d-none");

}


nextButtom.addEventListener('click',nextSlide );

prevButtom.addEventListener('click',prevSlide );
closetButtom.addEventListener('click',closeSlide );
document.addEventListener('keydown' , function(e){

if(e.key=='ArrowRight'){
     nextSlide()
}


else if(e.key=='ArrowLeft') {
     prevSlide()

}

else if(e.key=='Escape') {
     closeSlide()
}

})