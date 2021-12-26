/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Define Global Variables
const navList = document.getElementById("navbar__list");
const sectionsContainer = document.querySelectorAll("section");
const sectionsFragment = document.createDocumentFragment();

// build the nav
sectionsContainer.forEach(item => {

  // Start Local Variables
    let creatLists = document.createElement("li");
    let creatLink = document.createElement("a");
    let newText = item.getAttribute("data-nav");

    // start Function To Creation New Element
    function creatNewItem() {
        creatLink.textContent = newText;
        creatLists.appendChild(creatLink);

        sectionsFragment.appendChild(creatLists);
        navList.appendChild(sectionsFragment);
    }
    creatNewItem();

    // Function Add Class Method
    function addClassList() {
        creatLink.classList.add("menu__link");
    }
    addClassList();

    // creatoin (addEventList) Method
    creatLink.addEventListener("click", scrollToViewSections);

    // Functoin Scroll To Section on Link Click
    function scrollToViewSections() {
        item.scrollIntoView({ behavior: "smooth" });
    }
});

const activeSection = ()=> {

    for (sectionScroll of sectionsContainer) {
        const rectPage = sectionScroll.getBoundingClientRect();

        if(rectPage.top > -1 && rectPage.top < 300) {
            let secionsDataNav = sectionScroll.getAttribute("data-nav");
            const itemLink = document.querySelectorAll("a");

            //Functoin Active Link on click
            function activeClassLinks() {
                for (linksContent of itemLink) {

                    if (linksContent.innerText == secionsDataNav) {
                        itemLink.forEach((delete_active_class) => {
                        delete_active_class.classList.remove("active__link");
                        });

                        linksContent.classList.add("active__link");
                    }
                }
            }

            activeClassLinks();
            removeClassList();
            addClassList();
        }
    }
}

window.addEventListener("scroll", activeSection);

//Function To Remove All ClassList That Contain Class Called (your-active-class)
function removeClassList() {

    sectionsContainer.forEach((active_section) => {

        if (active_section.classList.contains("your-active-class")) {
            active_section.classList.remove("your-active-class");
        }
    });
}

// Add class 'active' To Section When Near Top of Viewport
function addClassList() {
    sectionScroll.classList.add("your-active-class");
}


// Define Variable Bottom Scroll Top
let scrollBtn = document.querySelector("#scrollTop");

// Creation Function To Show Scroll Bottom
window.addEventListener("scroll", onscrollPage);
function onscrollPage() {
  window.scrollY <= 500
    ? (scrollBtn.style.visibility = "hidden")
    : (scrollBtn.style.visibility = "visible");
}

// Creation Function To Scroll Top Paage
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}