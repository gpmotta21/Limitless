const navbarEl = document.querySelector("header"), toggleBtn = document.querySelector(".toggleBtn"), navbarBtns = document.querySelector("header span");
const navbar = () => {
    // Changes navbar color when scroll down
    window.addEventListener("scroll", () => {
        if (document.body.getBoundingClientRect().top < 0) {
            navbarEl.classList.add("change-color");
        }
        else {
            navbarEl.classList.remove("change-color");
        }
    });
    // Toggle the navbar buttons
    toggleBtn.addEventListener("click", () => {
        navbarBtns.classList.toggle("toggled");
        toggleBtn.classList.toggle("animateBtn");
    });
};
export default navbar;
