const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".Quote", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 },"-=1");
tl.fromTo(".Author_Name", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 },"-=1");
tl.fromTo(".slider-frame", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 },"-=1");

const hiddenElements = document.querySelectorAll('.hidden');
const page2Elements = document.querySelectorAll('.page_2');
const page2LogoElements = document.querySelectorAll('.page_2_logo');
const The_gallaryElements = document.querySelectorAll('.The-gallary');
const big_text_gallaryElements = document.querySelectorAll('.big-text-gallary');

hiddenElements.forEach((el) => observer.observe(el));
page2Elements.forEach((el) => observer.observe(el));
page2LogoElements.forEach((el) => observer.observe(el));
The_gallaryElements.forEach((el) => observer.observe(el));
big_text_gallaryElements.forEach((el) => observer.observe(el));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});