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
            scale: 2, // El zoom máximo
            ease: "power1.inOut"
        })
            .to(".image-container", {
                opacity: 0, // Desaparece la imagen después del zoom
                ease: "power1.inOut"
            }, "-=0.5")
            .to(".section.hero", {
                opacity: 1, // Muestra la sección del paisaje
                ease: "power1.inOut"
            }, "-=0.5")
            .to(".section.gradient-purple", {
                y: 0,
                opacity: 1,
                ease: "power1.inOut"
            }, "-=0.3"); // Se muestra la siguiente sección después del zoom.
    })
}

function blobby(){
    document.querySelectorAll('.blob').forEach((blob, index) => {
        const duration = 20 + Math.random() * 10;  // Variar un poco la duración
        blob.style.animation = `move${index + 1} ${duration}s infinite linear`;
    
        const keyframes = `@keyframes move${index + 1} {
            from {
                transform: rotate(${index * 90}deg) translate(200px, 0.1px) rotate(-${index * 90}deg);
            }
            to {
                transform: rotate(${index * 90 + 360}deg) translate(200px, 0.1px) rotate(-${index * 90 + 360}deg);
            }
        }`;
    
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
    });    
}