var slides = document.getElementsByClassName("mySlides");
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function checkFreind(v) {
    if(document.getElementById('freind').checked) {
        slides[2].getElementsByTagName('img')[0].src = "pics/Freinds2.jpg";
        document.getElementById('freindpara').style.display = "block";
    } else {
        slides[2].getElementsByTagName('img')[0].src = "pics/Solo2.jpg";
        document.getElementById('freindpara').style.display = "none";
    }
}


function checkDog(v) {
    if(document.getElementById('dog').checked) {
        slides[1].getElementsByTagName('img')[0].src = "pics/Sheeba1.jpg";
        document.getElementById('dogpara').style.display = "block";
    } else {
        slides[1].getElementsByTagName('img')[0].src = "pics/Solo2.jpg";
        document.getElementById('dogpara').style.display = "none";
        alert("fff");
    }

}

function showCheck(e){
    document.getElementById("topblock").style.display= "block";
}

function hideCheck(e){
    document.getElementById("topblock").style.display= "none";
}

function doalert(e){
    alert("POLO!");
}