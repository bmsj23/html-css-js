// Contact form alert
document.getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting me! I will respond as soon as possible.");
    this.reset();
  });

// Projects container to change color when clicking in area area
const projectsContainer = document.querySelector(".projects-container");
if (projectsContainer) {
  projectsContainer.addEventListener("click", function (e) {
    // Ignore clicks on interactive elements (modal buttons, links, inputs, etc.)
    if (e.target.closest('[data-bs-toggle], button, a, input, textarea, label')) {
      return;
    }

    e.stopPropagation(); 

    // Change the projects-container background color randomly
    this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`;
  });
}

// Slide-up stacking animation for portfolio section using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  var section = document.querySelector(".portfolio-section");
  if (!section) return;
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (
          entry.isIntersecting &&
          !section.classList.contains("slide-up-in")
        ) {
          section.classList.add("stacking");
          setTimeout(function () {
            section.classList.add("slide-up-in");
          }, 10);
          setTimeout(function () {
            section.classList.remove("stacking");
          }, 800);
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.querySelector(".my-name"),
        hi = Object.assign(document.createElement("span"), {className:"black"}),
        green = Object.assign(document.createElement("span"), {className:"green"}),
        black = Object.assign(document.createElement("span"), {className:"black"}),
        cursor = Object.assign(document.createElement("span"), {className:"cursor"});
  [hi, green, black].forEach(e => e.textContent = "");
  nameEl.append(hi, " ", green, " ", black, cursor);

  const parts = [
    ["Hi! I'm", hi, "black"],
    ["Benedict", green, "green"],
    ["San Juan", black, "black"]
  ];
  let p = 0, c = 0;
  cursor.style.animation = "blink 0.8s infinite";

  (function type(){
    if(p < parts.length){
      let [txt, el, color] = parts[p];
      cursor.style.background = color; // cursor matches current word's color
      if(c < txt.length) {
        el.textContent += txt[c++];
        setTimeout(type, 120);
      } else {
        p++; c = 0;
        setTimeout(type, 300);
      }
    }
  })();
});
