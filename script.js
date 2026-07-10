// Smooth Scroll
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(link.getAttribute('href'))
.scrollIntoView({behavior:'smooth'});
});
});

// Copy Coupon
const coupon=document.querySelector(".coupon h1");

if(coupon){
coupon.style.cursor="pointer";

coupon.onclick=()=>{

navigator.clipboard.writeText(coupon.innerText);

coupon.innerText="COPIED ✓";

setTimeout(()=>{
coupon.innerText="DAILYGIFT";
},2000);

};
}

// Reveal Animation
const reveal=()=>{

document.querySelectorAll("section").forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

}

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(40px)";

sec.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();


// Active Menu
const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

if(pageYOffset>=sec.offsetTop-150){

current=sec.getAttribute("id");

}

});

nav.forEach(a=>{

a.classList.remove("active");

if(a.getAttribute("href")==="#"+current){

a.classList.add("active");

}

});

});
