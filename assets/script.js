
const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

let currentIndex = 0;
//* 0 est une valeur de départ *//
//* Ainsi la première diapositive sera affichée par défaut *// 

const ArrowLeft = document.querySelector(".arrow_left");
const ArrowRight = document.querySelector(".arrow_right");
const BulletPointContainer = document.querySelector(".dots");
//* Cela permet au code d'intéragir avec les éléments HTML

ArrowLeft.addEventListener("click", previous);
console.log("Clique sur la flèche gauche !")
ArrowRight.addEventListener("click",next );
console.log("Clique sur la flèche droite !")

//changements de slides au click
function next() {
	BulletPointElement[currentIndex].classList.remove("dot_selected");
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  BulletPointElement[currentIndex].classList.add("dot_selected");
  showSlide();
}

function previous() {
	BulletPointElement[currentIndex].classList.remove("dot_selected");
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  BulletPointElement[currentIndex].classList.add("dot_selected");
  showSlide();
}

//* Fonction pour mettre à jour le contenu de la diapositive *//
function showSlide() {
	const imageElement = document.querySelector(".banner-img");
	const textElement = document.querySelector("#banner p");
  
	imageElement.src =
	  "./assets/images/slideshow/" + slides[currentIndex].image;
	textElement.innerHTML = slides[currentIndex].tagLine;
  }

//* Fonction qui permet de mettre à jour le style du bullet point actif - Permet de savoir quel bullet point est séléctionné *//
//* Elle parcourt l'ensemble des éléments et va ajouter la classe "dot_selected" au bullet point qui correspond à la diapo actuelle *//
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	BulletPointContainer.prepend(dot);
  }
  
  let BulletPointElement = document.querySelectorAll(".dot");
  BulletPointElement[currentIndex].classList.add("dot_selected");
  
