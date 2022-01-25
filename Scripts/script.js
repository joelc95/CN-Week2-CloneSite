let mainNav = document.getElementById("main-nav-bar");


window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mainNav.style.backgroundColor = "#232a34";
    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        mainNav.style.backgroundColor = "";
    }
}