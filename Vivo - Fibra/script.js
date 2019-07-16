// get element by ID
var el = {
    e: function(id) {
        return document.getElementById(id);
    }
}

function hoverCTA() {
  el.e("wrapper").addEventListener("mouseover", mouseOver);
  el.e("wrapper").addEventListener("mouseout", mouseOut);
}

function mouseOver() {
  TweenMax.set("#cta", { scale:.95, transformOrigin:"150px 206px" });
  TweenMax.to("#circulo", .5, { rotation:180, ease:Power4.easeOut });
}

function mouseOut() {
  TweenMax.set("#cta", { scale:1, transformOrigin:"150px 206px" });
  TweenMax.to("#circulo", .5, { rotation:0, ease:Power4.easeOut });
}

// MASTER TIMELINE --------------------------------------
var TL = new TimelineMax({delay:.3});

document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener("load", function(e) {

    TL.to("#wrapper", 0, { autoAlpha: 1 })
      .set("img", { rotationZ: 0.01, force3D:false, transformStyle: "preserve-3d"})
      .add(step1())
      .add(fibra(), "+=2.6")
      .add(step2())
      .add(icons(), "+=1")

//ANIMATIONS
function step1(){
  var tl = new TimelineMax();
      tl.staggerFrom(".txt1", .8, { y:80, autoAlpha:0, ease:Power4.easeOut },.1)
        .from("#fox", .8, { x:60, rotationY:"90deg", ease:Power4.easeOut }, "first-=.4")
        .from("#espn", .8, { x:-60, rotationY:"90deg", ease:Power4.easeOut }, "first-=.4")
        .from("#g4u", .8, { x:50, autoAlpha:0, ease:Power4.easeOut }, "second-=.62")
        .from("#cn", .8, { x:-50, autoAlpha:0, ease:Power4.easeOut }, "second-=.62")
        .from("#ei", .8, { x:40, autoAlpha:0, ease:Power4.easeOut }, "third-=.62")
        .from("#kids", .8, { x:-40, autoAlpha:0, ease:Power4.easeOut }, "third-=.62")
  return tl;
}

function fibra(){
  var tl = new TimelineMax();
      tl.staggerTo([".txt1", ".icon"], .8, { autoAlpha:0, ease:Power1.easeOut }, .1, "fibra")
        .staggerTo(".fibra_mask", .4, { width:300 },.05, "fibra+=.6")
        .set([".fibra_mask", ".fibra"], { css:{right: -1} })
        .staggerTo(".fibra_mask", .4, { width:0 },.05)
        .staggerTo([".fibra", "#vivo"], .4, { autoAlpha:0, ease:Power1.easeOut },.1, "-=.45")
  return tl;
}

function step2(){
  var tl = new TimelineMax();
      tl.set(".icon2", { rotationY:"90deg" })
        .from("#vivo_fibra", .6, { scale:1.2, autoAlpha:0, transformOrigin:"150px 34px", ease:Power4.easeOut })
        .staggerFrom(["#oferta", "#icons_box"], .8, { x:60, autoAlpha:0, ease:Power4.easeOut },.2, "-=.2")
        .to("#fox2", .6, { rotationY:"0deg", transformOrigin:"204px 116px", ease:Power4.easeOut }, "-=.4")
        .to("#g4u2", .6, { rotationY:"0deg", transformOrigin:"238px 116px", ease:Power4.easeOut }, "-=.5")
        .to("#espn2", .6, { rotationY:"0deg", transformOrigin:"271px 116px", ease:Power4.easeOut }, "-=.5")
        .from("#cta", 1, { autoAlpha:0, ease:Power4.easeOut, onComplete:hoverCTA }, "cta-=.4")
        .from("#regulamento", 1, { autoAlpha:0, ease:Power1.easeOut }, "cta-=.4")
  return tl;
}

function icons(){
  var tl = new TimelineMax({repeat:2});
      tl.to("#fox2", .3, { rotationY:"90deg", transformOrigin:"204px 116px", ease:Power4.easeOut }, "bloco1")
        .to("#g4u2", .3, { rotationY:"90deg", transformOrigin:"238px 116px", ease:Power4.easeOut }, "bloco1+=.1")
        .to("#espn2", .3, { rotationY:"90deg", transformOrigin:"271px 116px", ease:Power4.easeOut }, "bloco1+=.2")
        .to("#cn2", .3, { rotationY:"0deg", transformOrigin:"204px 116px", ease:Power4.easeOut }, "bloco1+=.15")
        .to("#kids2", .3, { rotationY:"0deg", transformOrigin:"238px 116px", ease:Power4.easeOut }, "bloco1+=.25")
        .to("#ei2", .3, { rotationY:"0deg", transformOrigin:"271px 116px", ease:Power4.easeOut }, "bloco1+=.35")

        .set({}, {}, "+=2.7")

        .to("#cn2", .3, { rotationY:"90deg", transformOrigin:"204px 116px", ease:Power4.easeOut }, "bloco2")
        .to("#kids2", .3, { rotationY:"90deg", transformOrigin:"238px 116px", ease:Power4.easeOut }, "bloco2+=.1")
        .to("#ei2", .3, { rotationY:"90deg", transformOrigin:"271px 116px", ease:Power4.easeOut }, "bloco2+=.2")
        .to("#fox2", .3, { rotationY:"0deg", transformOrigin:"204px 116px", ease:Power4.easeOut }, "bloco2+=.15")
        .to("#g4u2", .3, { rotationY:"0deg", transformOrigin:"238px 116px", ease:Power4.easeOut }, "bloco2+=.25")
        .to("#espn2", .3, { rotationY:"0deg", transformOrigin:"271px 116px", ease:Power4.easeOut }, "bloco2+=.35")

        .set({}, {}, "+=2.7")

  return tl;
}

console.log(TL.totalDuration())

  }, false);
});



//TEMPO EM QUE A INTERAÇAO DO CTA É REMOVIDA;
setTimeout(function(){
  el.e("wrapper").removeEventListener("mouseover", mouseOver);
  el.e("wrapper").removeEventListener("mouseout", mouseOut);
  mouseOut();
  // console.log("28 seconds")
}, 28000);
