document
        .querySelector(".nav-toggle")
        .addEventListener("click", function () {
          document.querySelector("nav ul").classList.toggle("active");
        });

      // Fermer le menu mobile lors du clic sur un lien
      document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", function () {
          document.querySelector("nav ul").classList.remove("active");
        });
      });

const words = ["Bienvenue !", "Egepac Multi-Service."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();