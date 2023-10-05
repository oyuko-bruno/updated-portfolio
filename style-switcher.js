/* ================= Color Switcher ==================*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
document.querySelector(".style-switcher").classList.toggle("open");    
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.constains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor() {
    alternateStyle.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ================= Theme Light and Dark Mode ==================*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.constains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
