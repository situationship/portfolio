var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navItems").style.top = "0px";
  } else {
    document.getElementById("navItems").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();
var logofront = document.getElementById("logo-front"),
    logoback = document.getElementById("logo-back");
window.addEventListener("scroll", function() {
    logofront.style.transform = "rotate("+(window.pageYOffset*0.1)+"deg)";
    logoback.style.transform = "rotate("+(window.pageYOffset*0.1)+"deg)";
});
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
jQuery(document).ready(function() {
        var offset = 220;
        var duration = 500;
        jQuery('.back-to-top').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });
$('img').on('dragstart', function(event) { event.preventDefault(); });
$('img').bind('contextmenu', function(e) {
    return false;
});
function toggleMenu() {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
new Freezeframe('.freezeframe-hover', {
    trigger: 'hover',
    overlay: false
});
new Freezeframe('.freezeframe-clickoverlay', {
    trigger: 'click',
    overlay: true,
    responsive: true
});
new Freezeframe('.freezeframe-dontstop', {
    trigger: 'hover',
    overlay: false
});
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
function spiceCategory(evt, categoryName) {
    var i, tabcontent, filter;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    filter = document.getElementsByClassName("filter");
    for (i = 0; i < filter.length; i++) {
        filter[i].className = filter[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
    $grid.masonry()
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();