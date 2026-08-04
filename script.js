// Tombol Scroll Down
const tombol = document.getElementById("scrollBtn");

tombol.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Animasi Skill Bar
window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "90%";

    document.querySelector(".css").style.width = "80%";

    document.querySelector(".js").style.width = "55%";

});
// Typing Animation

const text = "High School Student • Athlete • Lifelong Learner";

const typing = document.getElementById("typing");

let index = 0;

function ketik(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(ketik,60);

    }

}

ketik();
// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// Reveal Animation

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el)=>observer.observe(el));
// Counter Animation

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const plus = counter.dataset.plus === "true";

            let count = 0;

            const increment = Math.ceil(target / 40);

            const updateCounter = () => {

                if (count < target) {

                    count += increment;

                    if (count > target) count = target;

                    counter.innerText = count;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = plus ? target + "+" : target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));