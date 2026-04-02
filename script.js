
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  const mostrar = () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", mostrar);
  mostrar();
});

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}