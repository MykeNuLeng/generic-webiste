let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".slope", 10, { y: -500 })
  .fromTo(".jump", { y: -50 }, { y: -300, duration: 10 }, "-=10")
  .fromTo(".bg", { y: -20 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
