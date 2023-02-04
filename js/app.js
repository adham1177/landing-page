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

/**
 * Define Global Variables
 * 
*/


const sections = [...document.querySelectorAll("section")]// array contains all sections

const navBarList = document.querySelector("#navbar__list"); // my ul element



// creating observer to check which section is in the viewbort 
const observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log(entry.target.getAttribute("data-nav"));
      sections.forEach(section => {
        section.classList.remove("active");
    })
      entry.target.classList.add("active");
      

      document.querySelectorAll(".menu__link").forEach( element => {
        console.log(element);
        if (element.getAttribute("href") === "#"+entry.target.id){
            element.classList.add("active");
            console.log("yes");
        }
        else {
            element.classList.remove("active");
            console.log("no");
        }
      })
    }
    });
  }, {threshold: "0.5"});









/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function for building the navigation bar
function buildNavBar(parent, arr) {
    let frag = document.createDocumentFragment();
    arr.forEach(function (element, index, array) {
        {
            var li = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.innerText = sections[index].getAttribute("data-nav");
            anchor.className = "menu__link";
            anchor.href = "#" + sections[index].id;
            anchor.addEventListener("click", scrollToSection);
            li.appendChild(anchor);
            parent.appendChild(li);

        }
    })

    parent.appendChild(frag);

}









/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavBar(navBarList, sections);

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", toggleActiveState); 
function toggleActiveState(){

    sections.forEach( section =>{
        observer.observe(section);
    })
    
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event ){
    var activeSection = event.target.getAttribute("href") ;
    event.preventDefault();
    document.querySelector(activeSection).scrollIntoView({behavior: "smooth", block: "center" });
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

