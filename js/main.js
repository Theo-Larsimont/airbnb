const btnRigth = document.querySelector("#btn-right-cat")
const btnleft = document.querySelector("#btn-left-cat")
const catScroll = document.querySelector("#cat-scroll")
const catDefault = document.querySelector("#cat-default")
console.log(catScroll.scrollLeft);

btnRigth.addEventListener("click", ()=> {
  catScroll.scrollLeft += 350;
});
btnleft.addEventListener("click", ()=> {
  catScroll.scrollLeft -= 350;
})


// Fonction a propos du button afficher la carte
const btnEndMap = $("#end-btn-map").position().top;

function hiddenBtnMap(){
  if($("#btn-map").position().top <= btnEndMap){
    $("#btn-map").removeClass("btn-carte-effect-hidden").addClass("btn-carte-effect-visible")
  }else {
    $("#btn-map").removeClass("btn-carte-effect-visible").addClass("btn-carte-effect-hidden")
  }
}

$(window).scroll(hiddenBtnMap);
hiddenBtnMap();

