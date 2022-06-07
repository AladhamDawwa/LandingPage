const sections = document.getElementsByTagName("section");

/*  build the nav */
let docFrag = document.createDocumentFragment();

for (let i = 0; i < sections.length; i++) {
  let listItem = document.createElement("li");
  let anchorItem = document.createElement("a");
  anchorItem.textContent = `section ${i + 1}`;
  anchorItem.classList.add("menu__link");
  anchorItem.href = `#section${i + 1}`;
  listItem.appendChild(anchorItem);
  docFrag.appendChild(listItem);
}

let navList = document.getElementById("navbar__list");
navList.appendChild(docFrag);

/* Scroll to section on link click  */
links = document.getElementsByTagName("li");

for (let i = 0; i < sections.length; i++) {
  links[i].addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  let id = e.target.getAttribute("href").substring(1);
  let section = document.getElementById(id);
  let position = section.offsetTop;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

/* Scroll to Top  */
scrollButton = document.getElementsByTagName("button")[0];
// When user scrolls down 100px from the top of the document, show the button
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }

  /* Set sections as active */
  for (let i = 0; i < sections.length; i++) {
    let position = sections[i].getBoundingClientRect().top;
    //  Top = [-300,300]
    if (Math.abs(position) < 300) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
