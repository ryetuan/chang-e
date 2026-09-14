const storyPages = [
  {
    number: "Chapter 1",
    title: "What We Had",
    image: "story-1.png",
    alt: "Chang'e watching the moon through a window.",
    text: [
      `Every day, Dad returned home at 8:47 p.m.`,

      `I could tell what kind of day he'd had by the way he put his keys down.
      On good days, they landed lightly on the wooden table by the door.
      On bad days, they'd clatter against the wood.`,

      `Recently, they had been clattering a lot.`
    ]
  },

  {
    number: "Chapter 2",
    title: "TITLE GOES HERE",
    image: "story-2.png",
    alt: "Chang'e watching suspicious figures near the fence.",
    text: [
      `Your Chapter 2 story goes here.`
    ]
  },

  {
    number: "Chapter 3",
    title: "TITLE GOES HERE",
    image: "story-3.png",
    alt: "Chang'e outside the house at night.",
    text: [
      `Your Chapter 3 story goes here.`
    ]
  },

  {
    number: "Chapter 4",
    title: "TITLE GOES HERE",
    image: "story-4.png",
    alt: "Chang'e with her father outside the house.",
    text: [
      `Your Chapter 4 story goes here.`
    ]
  },

  {
    number: "Chapter 5",
    title: "TITLE GOES HERE",
    image: "story-5.png",
    alt: "Chang'e and her father safely together at home.",
    text: [
      `Your Chapter 5 story goes here.`
    ]
  }
];

let currentPage = 0;

const storyPage = document.querySelector(".story-page");
const image = document.querySelector("#story-image");
const pageNumber = document.querySelector("#story-page-number");
const number = document.querySelector("#story-number");
const title = document.querySelector("#story-title");
const text = document.querySelector("#story-text");
const prev = document.querySelector("#story-prev");
const next = document.querySelector("#story-next");

const imageBase = storyPage.dataset.imageBase;

function showPage(index, direction = 1) {
  currentPage = index;

  const page = storyPages[currentPage];

  image.src = imageBase + page.image;
  image.alt = page.alt;

  pageNumber.textContent = String(currentPage + 1).padStart(2, "0");
  number.textContent = page.number;
  title.textContent = page.title;

  text.innerHTML = page.text
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  prev.disabled = currentPage === 0;
  next.disabled = currentPage === storyPages.length - 1;

  image.classList.remove("slide-in-right", "slide-in-left");

  void image.offsetWidth;

  image.classList.add(
    direction > 0 ? "slide-in-right" : "slide-in-left"
  );
}

prev.addEventListener("click", () => {
  if (currentPage > 0) {
    showPage(currentPage - 1, -1);
  }
});

next.addEventListener("click", () => {
  if (currentPage < storyPages.length - 1) {
    showPage(currentPage + 1, 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && currentPage > 0) {
    showPage(currentPage - 1, -1);
  }

  if (event.key === "ArrowRight" && currentPage < storyPages.length - 1) {
    showPage(currentPage + 1, 1);
  }
});

let touchStartX = 0;

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].screenX;
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 60) {
    return;
  }

  if (distance < 0 && currentPage < storyPages.length - 1) {
    showPage(currentPage + 1, 1);
  }

  if (distance > 0 && currentPage > 0) {
    showPage(currentPage - 1, -1);
  }
});

showPage(0);