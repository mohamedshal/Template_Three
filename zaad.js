// changimg the mode the website
let adjust = document.querySelector('.header .adjust');
let adjustSpan = document.querySelector(".adjust .adj");

if(localStorage.length > 0) {
    document.body.classList =  localStorage.getItem("change-color");
    document.body.classList.remove("{}");
    adjustSpan.classList = localStorage.getItem("adjust");
}
adjust.addEventListener("click",function() {
    // adjustSpan.classList.toggle("change");
    
    changeAll(document.body,adjustSpan);
    // console.log(adjustSpan.className);
});
// if(adjustSpan.classList !== null) {
//     localStorage.setItem("adjust",adjustSpan.className);
// }
if (document.body.classList.contains("fas") && document.body.classList.contains("fa-adjust")) {
    document.body.classList.remove("fas");
    document.body.classList.remove("fa-adjust");
}


let linkMain = document.querySelector("#lan");
let mainNav = document.querySelector(".main-nav");
let mega = document.querySelector(".mega-menu");

linkMain.onclick = function() {
    mega.classList.toggle("toggle");
}

//start goal


let numbers = document.querySelectorAll(".box .number");
let stats = document.querySelector(".stats");
let started = false;

stats.onmouseover =  function() {
    function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval( ()=> {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }
    ,2000 / goal);
    }
    if(!started) {
        numbers.forEach((numbers) => startCount(numbers));
    }
    started = true;
}

// width action 
let mySkills = document.querySelector(".our-skills");
let skills = document.querySelector(".skills");
let spansPro = document.querySelectorAll(".the-progress span");
let skilltargets = document.querySelectorAll(".skills .skill h3 span");
let begun = false;

mySkills.onmouseover = function() {
    spansPro.forEach((span) => {
        span.style.width = span.dataset.width;
    });
    if(!begun) {
        skilltargets.forEach((skillTarget) => {
            let theTarget = skillTarget.dataset.target;

            let theCount = setInterval(() => {
                skillTarget.textContent++;
                skillTarget.style.left = `calc(${theTarget}% - 19px)`;
                if(skillTarget.textContent == theTarget) {
                    clearInterval(theCount);
                }
            },2000 / theTarget);
        })
    }
    begun = true;
}
//start scroll to top

let span = document.querySelector(".up");
let scroll = false;

document.body.onscroll = function() {
    if(!scroll) {
        scroll = true;
        if (this.scrollY >= 2000) {
            span.classList.add("show");
        } else {
        span.classList.remove("show");
        }
        scroll = false;
    }
    if(this.scrollY >= intersectors[0]){
        intersectors[0].target.classList.add("showed");
    }
}

span.onclick = function() {
    window.scrollTo ({
        top:0,
        behavior:"smooth",
    });
}

// the end of the year
let titleSpan = document.querySelector(".title span");
titleSpan.innerHTML = new Date().getFullYear();

let countDown = new Date(`Dec 31,${new Date().getFullYear()} 23:59:59`).getTime();
let counter = setInterval(() => {
//get date now
let dateNow = new Date().getTime();

//find the difference between now and countdown date
let dateDiff = countDown - dateNow;

//باقي قسمة الايام ساعات وباقي قسمة الساعات دقايق وهكذا 

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
document.querySelector(".days").innerHTML = days <10 ? `0${days}`: days;
document.querySelector(".hours").innerHTML = hours <10 ? `0${hours}`: hours;
document.querySelector(".minutes").innerHTML = minutes <10 ? `0${minutes}`: minutes;
document.querySelector(".seconds").innerHTML = seconds <10 ? `0${seconds}`: seconds;

if(dateDiff < 0 ) {
    clearInterval(counter);
}
},1000);

// change all 
function changeAll(e,f) {
    e.classList.toggle("change-all");
    localStorage.setItem("change-color",e.classList);
    // adjustSpan
    f.classList.toggle("change");
    localStorage.setItem("adjust",f.classList);
}

// select video
let listLinks = document.querySelectorAll(".holder .list ul li");
let listVideos = document.querySelectorAll(".holder .preview");
listLinks.forEach((link) => {
    link.addEventListener("click",removeActive);
});


function removeActive() {
    listLinks.forEach((link) => {
        const lin = this.dataset.video;
        console.log(lin);
        link.classList.remove("active");
        this.classList.add("active");
        listVideos.forEach((vid) => {
            vid.classList.add("disabled");
            if(vid.id == lin){
                vid.classList.remove("disabled");
            }
        })
    });
}

// animation on scroll
const intersectors = document.querySelectorAll(".intersect");
const titles = document.querySelectorAll(".main-title");


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showed", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
}
);
intersectors.forEach(intersector => {
    observer.observe(intersector);
})

// loading 
let loader = document.querySelector(".loader");
document.addEventListener('DOMContentLoaded', function () {
    loader.style.display = "none";
});

