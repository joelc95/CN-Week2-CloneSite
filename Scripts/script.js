let mainNav = document.getElementById("main-nav-bar");
let mainNavSearch = document.getElementById("main-nav-search");

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mainNav.style.backgroundColor = "#232a34";
        mainNavSearch.style.display = "flex";
    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        mainNav.style.backgroundColor = ""
        mainNavSearch.style.display = "none"
    }
}