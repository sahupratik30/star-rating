// GLOBALS
let RATED = false;

// DOM ELEMENTS
const starsWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".fa-star");
const resultText = document.querySelector(".text");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".resetBtn");

// hover event listener on starsWrapper
starsWrapper.addEventListener("mouseover", handleMouseOver);

// mouse out event listener on starsWrapper
starsWrapper.addEventListener("mouseout", handleMouseOut);

// click event listener on starts
starsWrapper.addEventListener("click", handleClick);

// reset event listener
resetBtn.addEventListener("click", handleReset);

function handleMouseOver(e) {
  if (RATED) return;
  const starIndex = e.target.getAttribute("data-index");
  if (starIndex) markStarsOnHover(starIndex);
}

function handleMouseOut(e) {
  if (RATED) return;
  stars.forEach((star) => {
    if (star.classList.contains("fa-solid")) {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
    }
  });
}

function handleClick(e) {
  if (RATED) return;
  const starIndex = e.target.getAttribute("data-index");
  for (let i = 0; i < starIndex; i++) {
    stars[i].classList.add("fa-solid");
    stars[i].classList.remove("fa-regular");
  }
  resultText.style.display = "block";
  result.innerHTML = starIndex;
  resetBtn.style.display = "block";
  RATED = true;
}

function markStarsOnHover(userRating) {
  if (userRating) {
    for (let i = 0; i < userRating; i++) {
      if (!stars[i].classList.contains("fa-solid")) {
        stars[i].classList.add("fa-solid");
        stars[i].classList.remove("fa-regular");
      }
    }
  } else {
    stars.forEach((star) => {
      if (star.classList.contains("fa-solid")) {
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
      }
    });
  }
}

function handleReset(e) {
  RATED = false;
  stars.forEach((star) => {
    if (star.classList.contains("fa-solid")) {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
    }
  });
  resultText.style.display = "none";
  resetBtn.style.display = "none";
}
