// MASTER TIMELINE --------------------------------------
var TL = new TimelineMax();

TL.add(step1())
  .add(step2(),"+=1")
  .add(step3())

// STEPS ------------------------------------------------
function step1(){
  var TL = new TimelineMax();

  TL.to('#wrapper', 0, { autoAlpha: 1 })
    .set("#sneaker2", { scale:.9, rotation: -39 })
    .staggerFrom(["#txt1", "#txt1_1", "#raio1"], 0.8, { y:-250, ease: Elastic.easeOut.config(0.5, 0.4)}, 0.13)
  return TL;
}

function step2(){
  var TL = new TimelineMax();

  TL.set("#brasao", {autoAlpha: 0, x: 10, y:35, scale:5, force3D:true, transformStyle: "preserve-3d" })
    .set("#mask1, #mask2", { opacity:1 }, "+=.2")
    .to(["#mask1", "#mask2"], 0.5, {width:140, ease: Power1.easeInOut, onComplete:function(){
     soccerball.pause(); volleyball.pause(); tennisball.pause(); racket.pause(); sneaker.pause(); sneaker2.pause();}})
    .to("#mask1", 0.5, {x:300, ease: Power1.easeInOut}, "-=.2")
    .to("#mask2", 0.5, {x:-300, ease: Power1.easeInOut}, "-=.5")
    .to("#step1", 0.2, {autoAlpha: 0, ease: Power1.easeIn}, "-=.7")
    .to("#brasao", 1, {autoAlpha: 1, scale:3 }, "-=.8")
    .from("#promocao1", 0.5, {scale:1.5,  autoAlpha:0, ease: Elastic.easeOut.config(.8, 0.4) }, "-=0.4")
    .to("#promocao1", .5, {scale:0.16, x:-23, y:-49, ease: Power4.easeOut},"+=.3")
    .to("#brasao", 1, {scale:1, x:0, y:0, ease: Elastic.easeOut.config(0.5, 0.4)}, "-=.5")
    .to("#promocao1", 0.5,{autoAlpha: 0},"-=.8")
    .from("#promocao2", 0.5, {autoAlpha: 0 }, "-=0.8")
    .from("#nescau", 0.8, {autoAlpha: 0, scale:0,  ease: Elastic.easeOut.config(0.5, 0.4) }, "-=0.5")
    .from("#tacos", 1, {autoAlpha: 0, scale:0,  ease: Elastic.easeOut.config(0.5, 0.4) }, "-=1")
    .from("#craques", 0.8, {autoAlpha: 0, scale:0,  ease: Elastic.easeOut.config(0.5, 0.4) }, "-=0.5")
    .from("#sombra", 2, {autoAlpha: 0, ease: Power1.easeOut }, "-=1")
  return TL;
}

function step3(){
  var TL = new TimelineMax();

  TL.set("#mask3, #mask4", { opacity:1 }, "+=.2")
    .to(["#mask3", "#mask4"], 0.5, { width:140, ease: Power1.easeInOut })
    .to("#mask3", 0.5, {x:300, ease: Power1.easeInOut}, "-=.2")
    .to("#mask4", 0.5, {x:-300, ease: Power1.easeInOut}, "-=.5")
    .to("#logo", 0.2, {autoAlpha: 0, ease: Power1.easeIn}, "-=.7")
    .from("#txt2", 0.8, { y:-250, ease: Elastic.easeOut.config(0.5, 0.4)}, "-=.45")
    .from("#cta_txt", 0.1, {autoAlpha: 0}, "-=.4")
    .from("#cta_box", 0.8, {autoAlpha: 0, y:-40, ease: Elastic.easeOut.config(0.5, 0.4)}, "-=.4")
    .from("#hand", 0.8, {autoAlpha: 0, y:40, x:40, ease: Elastic.easeOut.config(0.5, 0.4)}, "-=.5")
    .to("#cta", 0.2, {scale:1.1, y:-20, x:-15, repeat:1, yoyo:true, ease: Power1.easeInOut }, "-=.6")
    .from("#txtlegal", 0.5, {autoAlpha: 0, ease: Power1.easeOut })
  return TL;
}

//OBJETOS STEP 1
var soccerball = 	new TimelineMax({ delay:0, repeat: -1, repeatDelay:.5 })
    soccerball.to("#soccerball", 1, { y: 310, rotation:70, ease: Power0.easeNone });

var volleyball = 	new TimelineMax({ delay:.5, repeat: -1, repeatDelay:.5 })
    volleyball.to("#volleyball", 1, { y: 310, rotation:-50, ease: Power0.easeNone });

var tennisball = 	new TimelineMax({ delay:0, repeat: -1, repeatDelay:.5 })
    tennisball.to("#tennisball", 1, { y: 310, rotation:90, ease: Power0.easeNone });

var racket = 	new TimelineMax({ delay:.5, repeat: -1, repeatDelay:.5 })
    racket.to("#racket", 1, { y: 310, rotation:-90, ease: Power0.easeNone });

var sneaker = 	new TimelineMax({ delay:0, repeat: -1, repeatDelay:.5 })
    sneaker.to("#sneaker", 1, { y: 310, rotation:-90, ease: Power0.easeNone });

var sneaker2 = 	new TimelineMax({ delay:1, repeat: -1, repeatDelay:.5 })
    sneaker2.to("#sneaker2", 1, { y: 310, rotation:60, ease: Power0.easeNone });

console.log(TL.totalDuration())
