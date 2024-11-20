document.addEventListener('DOMContentLoaded', function () {
    image_zoom();
    blobby();
})

function image_zoom() {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
            }
        });

        tl.to("img", {
            scale: 2,
            ease: "power1.inOut"
        })
            .to(".image-container", {
                opacity: 0, 
                ease: "power1.inOut"
            }, "-=0.5")
            .to(".section.hero", {
                opacity: 1,
                ease: "power1.inOut"
            }, "-=0.5")
            .to(".section.gradient-purple", {
                y: 0,
                opacity: 1,
                ease: "power1.inOut"
            }, "-=0.3")
            .to(".content_title", {
                y: 0,
                opacity: 1,
                ease: "power1.inOut",
                onStart: function() {
                    document.querySelector(".content_title").style.display = "block";
                }
            }, "-=0.6"); 
    })
}

function blobby(){
    const box = document.querySelector('.box');

    setInterval(setBorderRadius, 300);

    function setBorderRadius() {
        box.style.setProperty('--br-blobby', generateBorderRadiusValue());
        box.style.setProperty('--br-blobby-after', generateBorderRadiusValue());
        box.style.setProperty('--br-blobby-before', generateBorderRadiusValue());
    }

    function generateBorderRadiusValue() {
        return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
    }
     
    function getRandomValue() {
        return Math.floor(Math.random() * 50) + 50;
    }

}