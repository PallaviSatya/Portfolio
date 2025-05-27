/*document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
});*/


document.addEventListener("DOMContentLoaded", function () {
    // Allow scrolling only in the projects section
    document.querySelector("#projects").addEventListener("wheel", function (event) {
        event.stopPropagation();
    });
});
