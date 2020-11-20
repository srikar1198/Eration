var wel = new Audio("welcome.mp3");
wel.play();
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if(scrolled%2!=0)
    document.querySelector(".tit h1").innerHTML="Get All Your Ration At Your Door Step";
  else
    document.querySelector(".tit h1").innerHTML="Download Your App Now";
}



AOS.init({
  disable: 'mobile'
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});
