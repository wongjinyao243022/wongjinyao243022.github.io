gsap.to(".footer-upper", {
    scrollTrigger: {
        trigger: ".footer-subscribe",
        start: "top 20%" /* target, screen*/,
        scrub: true,
        markers: 2
    },
    x: 500, // move 200px to the right
    opacity: 0.5, // fade to 50% opacity
    duration: 1.5, // 1.5 seconds
    ease: "power2.out"
});