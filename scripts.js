//___________________________________________________________________________________MAIN NAVBAR
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.sidenavbar .navlinks a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.sidenavbar .navlinks a[href='#${id}'] .navlogo`).classList.add('active');
        }
    });
};
//___________________________________________________________________________________RESUME NEXT BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("nextBtn");
    const knowledgeColumn = document.getElementById("knowledge-column");
    const personalColumn = document.getElementById("personal-column");
    const educationColumn = document.getElementById("education-column");
    const achievementsColumn = document.getElementById("achievements-column");

    toggleBtn.addEventListener("click", () => {
        const arePrimaryColumnsVisible = knowledgeColumn.classList.contains("visible");

        if (arePrimaryColumnsVisible) {
            knowledgeColumn.classList.remove("visible");
            personalColumn.classList.remove("visible");
            educationColumn.classList.add("visible");
            achievementsColumn.classList.add("visible");
        } else {
            knowledgeColumn.classList.add("visible");
            personalColumn.classList.add("visible");
            educationColumn.classList.remove("visible");
            achievementsColumn.classList.remove("visible");
        }
    });
});

document.getElementById('nextBtn').addEventListener('click', function() {
this.classList.toggle('rotate');
});

//___________________________________________________________________________________SKILLMETER
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('skills-button').addEventListener('click', function() {
        toggleVisibility('skills1', 'skills2');
    });

    document.getElementById('tools-button').addEventListener('click', function() {
        toggleVisibility('skills2', 'skills1');
    });

    function toggleVisibility(showClass, hideClass) {
        const showElement = document.querySelector(`.${showClass}`);
        const hideElement = document.querySelector(`.${hideClass}`);

        showElement.style.display = 'block';
        showElement.style.zIndex = '3'; // Ensure the visible element has z-index 3

        hideElement.style.display = 'none';
        hideElement.style.zIndex = ''; // Reset z-index of hidden element
    }
});
//___________________________________________________________________________________PORTFOLIO FILTER NAVIGATION LINK
filterSelection("all") // Execute the function and show all columns

function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("portfoliocolumn");
if (c == "all") c = "";
// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}

function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
    }
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("portfoliobtn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
});
}


//___________________________________________________________________________________PORTFOLIO IMAGE SLIDER MODAL
// Function to handle modal display
var modal = document.getElementById("myModal");
var previewBtns = document.getElementsByClassName("previewbtn");

for (var i = 0; i < previewBtns.length; i++) {
previewBtns[i].addEventListener("click", function () {
    var category = this.getAttribute("data-category");
    modal.style.display = "flex";
    filterSlides(category);
    slideIndex = 0;  // Start from the first slide in the category
    showSlide(slideIndex);
});
}

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
modal.style.display = "none";
resetSlides();
removeKeyboardNavigation();  // Remove keyboard navigation when modal is closed
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    resetSlides();
    removeKeyboardNavigation();  // Remove keyboard navigation when modal is closed
}
}

//___________________________________________________________________________________MODAL SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let displayedSlides = []; // Store the currently displayed slides

function initializeSlider() {
if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
}
}

function showSlide(index) {
if (index >= displayedSlides.length) {
    slideIndex = 0;
} else if (index < 0) {
    slideIndex = displayedSlides.length - 1;
}

displayedSlides.forEach(slide => {
    slide.classList.remove("displaySlide");
    slide.style.display = "none"; // Hide all slides
});
displayedSlides[slideIndex].style.display = "flex"; // Show only the current slide
displayedSlides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
slideIndex--;
showSlide(slideIndex);
}

function nextSlide() {
slideIndex++;
showSlide(slideIndex);
}

function filterSlides(category) {
displayedSlides = Array.from(slides).filter(slide => slide.classList.contains(category));
slides.forEach(slide => {
    slide.classList.remove("displaySlide");
    slide.style.display = "none";
});
if (displayedSlides.length > 0) {
    displayedSlides[0].style.display = "flex";
    displayedSlides[0].classList.add("displaySlide");
}
addKeyboardNavigation();  // Add keyboard navigation when slides are filtered
}

function resetSlides() {
slides.forEach(slide => {
    slide.classList.remove("displaySlide");
    slide.style.display = "flex";
});
}

// Keyboard navigation
function addKeyboardNavigation() {
document.addEventListener("keydown", handleKeyDown);
}

function removeKeyboardNavigation() {
document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
if (event.key === "ArrowLeft") {
    prevSlide();
} else if (event.key === "ArrowRight") {
    nextSlide();
} else if (event.key === "Escape") {
    modal.style.display = "none";
    resetSlides();
    removeKeyboardNavigation();
}
}

document.getElementById('arduinobot-btn').addEventListener('click', function() {
    const link = 'https://youtube.com/shorts/Ia5Q0nLDLOw';
    window.open(link, '_blank');
});
document.getElementById('samsil-btn').addEventListener('click', function() {
    const link = 'https://youtube.com/playlist?list=PLgfiwLqCVteVeQSNEfcH6Sb5grbm9rH7a&si=uIr9yFbUmWQLgTTv';
    window.open(link, '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('arduinobot-btn samsil-btn');
    const tooltipText = img.getAttribute('data-tooltip');
    const tooltipDiv = img.nextElementSibling;
    tooltipDiv.textContent = tooltipText;
});
document.addEventListener("DOMContentLoaded", initializeSlider);


//CONTACT SCRIPTS

// function copyText(elementId) {
//     // Get the text element by ID
//     const textElement = document.getElementById(elementId);
//     const textToCopy = textElement.innerText;
//     // Create a temporary textarea element to hold the text
//     const tempTextarea = document.createElement('textarea');
//     tempTextarea.value = textToCopy;
//     document.body.appendChild(tempTextarea);
//     // Select the text in the textarea
//     tempTextarea.select();
//     // Copy the text to the clipboard
//     document.execCommand('copy');
//     // Remove the temporary textarea element
//     document.body.removeChild(tempTextarea);

//     // Show a custom alert with the copied text
//     showAlert(`Copied: ${textToCopy}`);
// }

// function showAlert(message) {
//     const alertBox = document.getElementById('custom-alert');
//     alertBox.innerText = message;
//     alertBox.classList.add('show-alert');
//     // Remove the alert after 1 second
//     setTimeout(() => {
//         alertBox.classList.remove('show-alert');
//     }, 1000);
// }

document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementsByClassName("contactdropdown-btn");
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    document.getElementById("github").addEventListener("click", function() {
        window.open("https://github.com/CodeRex990", "_blank");
    });
    document.getElementById("linkedin").addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/charles-eduard-español-945230316/", "_blank");
    });

    var links = document.querySelectorAll('.dropdown-container a');
    links.forEach(function(link) {
        if (!link.classList.contains('exclude-copy')) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default action
                var text = link.textContent;
                navigator.clipboard.writeText(text).then(function() {
                    alert('Copied: ' + text);
                }).catch(function(err) {
                    console.error('Could not copy text: ', err);
                });
            });
        }
    });
});
