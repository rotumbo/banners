// MASTER TIMELINE --------------------------------------
var TL = new TimelineMax({delay:.3});

TL.add(step1())
  .add(step2(),"+=1")
  .add(step3(),"+=1")
  .add(step4(),"+=1")

// STEPS ------------------------------------------------
function step1(){
  var TL = new TimelineMax();
  TL.set("#wrapper", { z:-0.02, rotationZ: -0.02, force3D:true, transformStyle: "preserve-3d" })
    .to("#wrapper", 0, { autoAlpha: 1 })
    .from("#logo_img", 1, { scale:2, autoAlpha:0, ease:Power4.easeOut })
    .staggerFrom(["#shape", "#txt_logo"], .8, { x:200, ease:Power4.easeOut },.05, "-=1")
    .staggerFrom(["#pack4", "#pack2", "#pack3", "#pack1"], .8, { x:140, ease:Power4.easeOut },.1, "-=.75")
    .staggerFrom(["#Phasma", "#bg1"], .8, { x:-200, ease:Power4.easeOut },.05, "-=1.4")
return TL;
}

function step2(){
  var TL = new TimelineMax();
  TL.staggerTo(["#Phasma", "#bg1"], .8, { x:-200, ease:Power4.easeIn },.05)
    .staggerTo(["#pack4", "#pack2", "#pack3", "#pack1"], 1, { x:-148, ease:Power4.easeInOut },.05, "-=.65")
    .to("#logo", 1, { x:-148, ease:Power4.easeInOut },"-=1")
    .staggerFrom(["#Luke", "#bg2"], .8, { x:200, ease:Power4.easeOut },.05, "-=.5")
return TL;
}

function step3(){
  var TL = new TimelineMax();
  TL.staggerTo(["#Luke", "#bg2"], .8, { x:200, ease:Power4.easeIn },.05)
    .staggerTo(["#pack1", "#pack3", "#pack2", "#pack4"], 1, { x:0, ease:Power4.easeInOut },.05, "-=.65")
    .to("#logo", 1, { x:0, ease:Power4.easeInOut },"-=1")
    .from("#guard", .8, { x:-200, ease:Power4.easeOut }, "-=.5")
    .to("#bg1", .8, { x:0, ease:Power4.easeOut },"-=.75")
return TL;
}

function step4(){
  var TL = new TimelineMax();
  TL.staggerTo(["#guard", "#bg1"], .8, { x:-200, ease:Power4.easeIn },.05)
    .staggerTo(["#pack4", "#pack2", "#pack3", "#pack1"], 1, { x:-148, ease:Power4.easeInOut },.05, "-=.65")
    .to("#logo", 1, { x:-148, ease:Power4.easeInOut },"-=1")
    .from("#Rey", .8, { x:200, ease:Power4.easeOut, onComplete:function(){hoverCTA2();} }, "-=.5")
    .to("#bg2", .8, { x:0, ease:Power4.easeOut },"-=.75")
return TL;
}

var H = {
// get element by ID
e: function(id) {
    return document.getElementById(id);
}}

// CTA MOUSE ENTER/LEAVE FUNCTION ---------------------------
function hoverCTA() {
    H.e("cta").addEventListener("mouseenter", cta_enter)
    H.e("cta").addEventListener("mouseleave", cta_leave)
}
hoverCTA();

function cta_enter() {
  TweenMax.to("#cta_txt", 0, { autoAlpha:0 });
  TweenMax.to("#cta_txt_over", 0, { autoAlpha:1 });
  H.e("cta").style.background = "#ffffff";
}

function cta_leave() {
  TweenMax.to("#cta_txt_over", 0, { autoAlpha:0 });
  TweenMax.to("#cta_txt", 0, { autoAlpha:1 });
  H.e("cta").style.background = "#0071ce";
}

// LIGHTSABER MOUSE ENTER/LEAVE FUNCTION -----------------------------
function hoverCTA2() {
  H.e("wrapper").addEventListener("mouseenter", lightsaber_enter)
  H.e("wrapper").addEventListener("mouseleave", lightsaber_leave)
}

function lightsaber_enter() {
  TweenMax.to("#lightsaber", .5, { autoAlpha:1 });
}

function lightsaber_leave() {
  TweenMax.to("#lightsaber", .5, { autoAlpha:0 });
}

setTimeout(function(){
  H.e("wrapper").removeEventListener("mouseenter", lightsaber_enter);
  H.e("wrapper").removeEventListener("mouseleave", lightsaber_leave);
  H.e("cta").removeEventListener("mouseenter", cta_enter);
  H.e("cta").removeEventListener("mouseleave", cta_leave);
  cta_leave();
  lightsaber_leave();
}, 28000);

console.log(TL.totalDuration())
