const animations = () => {
  const slideRightElements = document.querySelectorAll<HTMLElement>("[data-aos='slide-right']"),
    slideLeftElements = document.querySelectorAll<HTMLElement>("[data-aos='slide-left']"),
    slideUpElements = document.querySelectorAll<HTMLElement>("[data-aos='slide-up']");

  const inView = (el: any) => {
    return el.getBoundingClientRect().top < window.innerHeight;
  };

  window.addEventListener("scroll", () => {
    slideRightElements.forEach((i) => {
      if (inView(i)) {
        i.classList.add("slide-right");
      } else {
        i.classList.remove("slide-right");
      }
    });

    slideLeftElements.forEach((i) => {
      if (inView(i)) {
        i.classList.add("slide-left");
      } else {
        i.classList.remove("slide-left");
      }
    });

    slideUpElements.forEach((i) => {
      if (inView(i)) {
        i.classList.add("slide-up");
      } else {
        i.classList.remove("slide-up");
      }
    });
  });
};

export default animations;
