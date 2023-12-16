function code() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
code();

// cursor follower
let cursor = document.querySelector("#cursor-circle");
let main = document.querySelector("#main");
function cursorFollower() {
    
    let mainVideo = document.querySelector("#main-video")

    main.addEventListener("mousemove", function (event) {
        gsap.to(cursor, {
            x:event.clientX,
            y:event.clientY,
        });
    });

    main.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 1,
        });
    });

    main.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            opacity: 0,
        });
    });

    mainVideo.addEventListener("mouseenter", function () {
        gsap.to(cursor,{
            width: "70px",
            height: "15px",
            borderRadius: "30px",
            innerHTML: "Play",
            fontSize: "15px",
            cursor: "pointer",
            textAlign: "center",

        })
    });
    mainVideo.addEventListener("mouseleave", function () {
        gsap.to(cursor,{
            width: "15px",
            innerHTML: "",
        })
    });
}

cursorFollower();

// ScrollTrigger for page1
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 .title1",
        scroller: "#main",
        scrub: 3,
        start: "top 27%",
        end: "top 0",
    },
});

// for title1 animation
tl.to(
    "#page1 .title1",
    {
        x: -200,
        duration: 1,
        ease: "power1.inOut",
    },
    "sameVariable"
);

// for title2 animation
tl.to(
    "#page1 .title2",
    {
        x: 200,
        duration: 1,
        ease: "power1.inOut",
    },
    "sameVariable"
);

// for video animation
tl.to(
    "#page1 video",
    {
        width: "90%",
        duration: 1,
        ease: "power1.inOut",
    },
    "sameVariable"
);

// second timeline for page2 color change
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 .title1",
        scroller: "#main",
        scrub: 3,
        start: "top -115%",
        end: "top -120%",
    },
},"abc");

// for page2 color change
tl2.to("#page2", {
    backgroundColor: "#FEFCFF",
    color: "#0F0D0D",
},"abc");
tl2.to("#page3", {
    backgroundColor: "#FEFCFF",
    color: "#0F0D0D",
},"abc");

// third timeline for page4
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 .title1",
        scroller: "#main",
        scrub: 3,
        start: "top -280%",
        end: "top -400%",
    },
});

tl3.to("#page4",{
    backgroundColor: "#0F0D0D",
    color: "#FEFCFF",
})

tl3.to("#page3",{
    backgroundColor: "#0F0D0D",
    color: "#FEFCFF",
})

tl3.to("#page2",{
    backgroundColor: "#0F0D0D",
    color: "#FEFCFF",
})

// box animation

document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseenter", function () {
        let image = box.getAttribute("data-image")
        
        cursor.style.width = "300px"
        cursor.style.height = "250px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${image})`

    });

    box.addEventListener("mouseleave", function () {
        cursor.style.width = "15px"
        cursor.style.height = "15px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = "none"
    });
})