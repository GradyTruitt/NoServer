var images = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg','./images/11.jpg','./images/12.jpg'];

var background = document.getElementById('background');
var i = 0;

setInterval(function() {
      background.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 4000);