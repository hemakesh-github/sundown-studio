
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function fixedImage() {
    let elemC = document.querySelector(".elem-container");
    let fixed = document.querySelector(".fixed-image");
    
    elemC.addEventListener("mouseenter", (evt) => {
        // alert("hello" + evt)
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", (evt) => {
        // alert("hello" + evt)
        fixed.style.display = "none";
    })
    let x = fixed.querySelector("video");
    let elem = document.querySelectorAll(".elem");
    elem.forEach((e)=>{
        e.addEventListener("mouseenter", () => {
            fixed.style.display = "block";
            x.setAttribute("src", "");
            let src = e.getAttribute("image-src");
            if(src === null){
                src = e.getAttribute("video-src");
                x.setAttribute("src", src);
                x.style.display="block" 
            }
            else if(src === ""){
                fixed.style.display = "none";
            }
            
            fixed.style.backgroundImage = `url(${src})`;
        })
        
    })
}
function choiceChange(){
    let image = document.querySelector(".con-part2 img");
    let choices = document.querySelectorAll(".choices");
    let desc = document.getElementById("desc");
    choices.forEach((e) => {
        e.addEventListener("click", (evt) => {
            let prev_choice = document.getElementById("selected");
            prev_choice.setAttribute("id", "");
            let s = evt.target;
            s.setAttribute("id", "selected");
            if (s.innerText === "Design"){
                desc.innerHTML ="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end -to-end design solutions from concept, design, and   architectural drawings to 3D renderings.";
                image.setAttribute("src", "images/img2.webp");
            } else if(s.innerText === "Project"){
                desc.innerHTML = "Once we have a design, our production team  takes the lead in bringing it to life. We manage all  stages of the project, from build specifications and  technical drawings to site surveys, vendor  management, and 2D & 3D production. We have  an extensive network of partners to meet each  unique design and project need.";
                image.setAttribute("src", "images/img3.webp");
            } else{
                desc.innerHTML = "We’re with you every step of the way, from the  project initiation to launch day. Our production and  design teams are onsite to direct and guide the  process down to the last point of completion,  ensuring success across the built space and  experience.";
                image.setAttribute("src", "images/img4.webp");
            }
        })
        
    })
}

let menu = document.querySelector(".menu");
let menuCard = document.querySelector(".menu-card-wrapper");

let logo = document.querySelector("nav img");
let flag = 1;
function menuUpdate(){
    menu.addEventListener("click", (e) => {
        if(flag === 1){
            logo.style.visibility = "hidden";
            menuCard.style.top = "0px";
            flag = 0;
            logo.style.transitionDelay = "0.07s";
        } else{
            logo.style.visibility = "visible"
            menuCard.style.top = "-12%";
            flag = 1;
            logo.style.transitionDelay = "0.4s";
        }
    })
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
});

let loader = document.querySelector(".loader");
const mediaTab = window.matchMedia("(max-width: 770px)");
let loaderAnimeElements = document.querySelector(".loader h4");
let loadfun = () => {
    console.log(loaderAnimeElements.classList)
    loaderAnimeElements.classList.add("load");
    setTimeout(function() {
        loader.style.top = "-100%";
    }, 2000)
}

let fun = ()=>{
    if(!mediaTab.matches){
        fixedImage();
    }
}
fun()
setTimeout(function() {
    loader.style.top = "-100%";
}, 2000)

mediaTab.addEventListener("change",fun);
choiceChange();
menuUpdate();
loadfun()
