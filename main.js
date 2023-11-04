function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }

  }

function logoload(){
  let text;
  let person = prompt("Please enter your name:");
  if (person == null || person == "") {
    text = "Guest";
  } else {
    text = person;
  }
  document.getElementById("logo").style.textTransform="capitalize";
  document.getElementById("logo").innerHTML=text;
}
 
let slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) {
        slideIndex = 1;
    }
    if (n <= 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i <= slides.length; i++) {
        slides[i].style.display = "block";
    }
    slides[slideIndex-1].style.display = "block";
}
$(document).ready(function() {
  $('.carousel-slide').slick({
    lazyLoad: 'ondemand', // Use LazyLoad plugin to load images on demand
    slidesToShow: 1,      // Default number of slides to show
    slidesToScroll: 1,    // Default number of slides to scroll
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,  // Adjust the number of slides shown for 620px width
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,  // Adjust the number of slides shown for 840px width
          slidesToScroll: 1
        }
      },
      // Add more breakpoints and settings as needed
    ]
  });
});

const animationSection = document.querySelector('.container1');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    if (isElementInViewport(animationSection)) {
        animationSection.classList.add('animate');
    } else {
        animationSection.classList.remove('animate');
    }
}

window.addEventListener('scroll', handleScroll);

