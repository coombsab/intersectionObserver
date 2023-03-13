const imgs = document.querySelectorAll("img");

imgs.forEach((el) => {
  el.classList.add("loadin");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("loadin");
      entry.target.classList.add("loaded");
    }
    // Add the else if you want to fade out images out of the viewport
    else {
      entry.target.classList.remove("loaded");
      entry.target.classList.add("loadin");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

imgs.forEach((el) => observer.observe(el));