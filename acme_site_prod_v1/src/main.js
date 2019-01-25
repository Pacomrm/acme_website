/*-------------------------------*/
/* Acme Demo Website */
/* Autor: Michael Rodriguez Marin*/
/* Version: 1.0*/
/* Date: 23/01/19*/
/*-------------------------------*/


var galleryBtn = document.getElementById("galleryBtn"),
    testimonialBtn = document.getElementById("testimonialBtn"),
    teamBtn = document.getElementById("teamBtn"),
    nav = document.getElementById("topNav"),
    arrowBtn = document.getElementById("arrowUp"),
    menuBtn = document.getElementById("menu-icon"),
    header = document.getElementById("myHeader"),
    sticky = header.offsetTop;

/*Event catcher for navigation*/
function setElements(event){

  switch (event.target) {
    case menuBtn:
      if(nav.getAttribute("data-attribute") == "hidden"){
        TweenLite.to(nav, .5, {height:"auto",display:'block',ease: Power4.easeIn});
        nav.setAttribute("data-attribute", "visible");
      }else{
        TweenLite.to(nav, .5, {height:0,display:'none',ease: Power4.easeOut});
        nav.setAttribute("data-attribute", "hidden");    
      }
      break;
    case testimonialBtn:
        TweenLite.to(window, 2, {scrollTo:{y:"#testimonialSection", offsetY:70,ease: Power4.easeOut}});        
      break;
    case galleryBtn:
        TweenLite.to(window, 2, {scrollTo:{y:"#gallerySection", offsetY:70,ease: Power4.easeOut}});
      break;
      case teamBtn:
        TweenLite.to(window, 2, {scrollTo:{y:"#teamSection", offsetY:70,ease: Power4.easeOut}}); 
      break;
    default:
  }
 
}
arrowBtn.onclick = function(){
        TweenLite.to(window, 1, {scrollTo:{y:0, offsetY:70,onStart:function(){console.log(this);}}});
        TweenLite.to(arrowBtn, 1, {opacity:0});
};

document.addEventListener('click', setElements, false);

/* Scroll Function for Sections*/
window.addEventListener('scroll', function(e) {
  arrowBtn.hidden = (pageYOffset < document.documentElement.clientHeight);
  if (pageYOffset>300) {
    TweenLite.to(arrowBtn, 1, {visibility:'visible'});
    TweenLite.to(arrowBtn, 1, {opacity:1});
  }
  if(pageYOffset>1500){
    TweenLite.to(arrowBtn, 1, {y:-30});
  }
  if (window.pageYOffset > 1) {
    header.classList.add("fixedTopNav");
  } 
  else {
    header.classList.remove("fixedTopNav");
  }
});




