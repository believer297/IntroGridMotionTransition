
document.addEventListener('scroll', function() {
    var element = document.getElementById('scroll-top');
    var scrollPosition = window.scrollY ;

    if (scrollPosition < 700) { // Change this value to the scroll position you want
        element.style.visibility = "hidden";
        element.style.filter = "opacity(0)";
    } else {
        element.style.visibility = "visible";
        element.style.filter = "opacity(1)";
    }
});


