



// ---

// var myButton = document.getElementById("myButton");
// var svgContainer = document.getElementById("svgContainer");
// var clickCount = 0;
// var timer;

// myButton.addEventListener("click", function() {
//   clickCount++;

//   if (clickCount === 1) {
//     firstFunction();
//   } else if (clickCount === 2) {
//     secondFunction();
//   } else if (clickCount === 3) {
//     thirdFunction();
//     clickCount = 0; // Reset click count after the third click
//   }
// });

// function firstFunction() {
//   console.log("First Function");
//   svgContainer.innerHTML = ""; // Reset SVG container
//   svgContainer.innerHTML = '<img src="./images/add.svg" alt="First SVG">';
//   // Display SVG image for the first click
//   svgContainer.style.opacity = 1; // Show the SVG container immediately
// }

// function secondFunction() {
//   console.log("Second Function");
//   svgContainer.innerHTML = ""; // Reset SVG container
//   svgContainer.innerHTML = '<img src="./images/second.svg" alt="Second SVG">';
//   // Display SVG image for the second click
//   svgContainer.style.opacity = 1; // Show the SVG container immediately
// }

// function thirdFunction() {
//   console.log("Third Function");
//   svgContainer.innerHTML = ""; // Reset SVG container
//   svgContainer.innerHTML = '<img src="./images/add.svg" alt="Third SVG">';
//   // Display SVG image for the third click
//   svgContainer.style.opacity = 1; // Show the SVG container immediately

//   clearTimeout(timer); // Clear any previous timers
//   timer = setTimeout(function() {
//     svgContainer.style.opacity = 0; // Hide the SVG container with fade animation
//     setTimeout(function() {
//       svgContainer.innerHTML = '<div>This is a div element</div>'; // Replace SVG with a div element
//       svgContainer.style.opacity = 1; // Show the div element with fade animation
//     }, 500);
//   }, 3000); // Display SVG for 3 seconds
// }


var myButton = document.getElementById("myButton");
var svgContainer = document.getElementById("svgContainer");
var clickCount = 0;
var timer;

myButton.addEventListener("click", function() {
  clickCount++;

  if (clickCount === 1) {
    firstFunction();
  } else if (clickCount === 2) {
    secondFunction();
  } else if (clickCount === 3) {
    thirdFunction();
    clickCount = 0; // Reset click count after the third click
  }
});

function firstFunction() {
  console.log("First Function");
  svgContainer.innerHTML = ""; // Reset SVG container
  svgContainer.innerHTML = '<video width="320" height="240" controls> <source src="./images/videos.mp4" type="video/mp4"></video>';

  // Display SVG image for the first click
  svgContainer.style.opacity = 1; // Show the SVG container immediately
}

function secondFunction() {
  console.log("Second Function");
  svgContainer.innerHTML = ""; // Reset SVG container
  // svgContainer.innerHTML = '<img src="./images/second.svg" alt="Second SVG">';
  svgContainer.innerHTML = '<video width="320" height="240" controls> <source src="./images/videos.mp4" type="video/mp4"></video>';
  // Display SVG image for the second click
  svgContainer.style.opacity = 1; // Show the SVG container immediately
}

function thirdFunction() {
  console.log("Third Function");
  svgContainer.innerHTML = ""; // Reset SVG container
  // svgContainer.innerHTML = '<img src="./images/add.svg" alt="Third SVG">';
  // Display SVG image for the third click
  svgContainer.style.opacity = 1; // Show the SVG container immediately

  clearTimeout(timer); // Clear any previous timers
  timer = setTimeout(function() {
    svgContainer.style.opacity = 0; // Hide the SVG container with fade animation
    setTimeout(function() {
      svgContainer.innerHTML = '<div id="myDiv">This is a div element</div>'; // Replace SVG with a div element
      var myDiv = document.getElementById("mySection");
      myDiv.style.opacity = 0; // Hide the div initially
      myDiv.style.display = "block"; // Set the div to block display
      setTimeout(function() {
        myDiv.style.opacity = 1; // Show the div element with fade animation
      }, 100);
    }, 500);
  }, 3000); // Display SVG for 3 seconds
}

var Swipes = new Swiper('.swiper-container', {
    loop: true,
    autoplay:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});



  
  