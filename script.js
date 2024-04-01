document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
  
      if (window.location.href.includes(navLink.getAttribute('href'))) {
        navLink.classList.add('active');
      }
    });
  });
  


// JavaScript for Affiliations Section
document.addEventListener("DOMContentLoaded", function() {
  // Get the modal element and close button
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("modalImg");
  var closeBtn = document.getElementById("closeBtn");

  // Function to open modal and show image
  function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }

  // Assign onclick event listeners to the images
  document.querySelector("#img1").addEventListener("click", function() {
    openModal(this.src);
  });
  document.querySelector("#img2").addEventListener("click", function() {
    openModal(this.src);
  });
  document.querySelector("#img3").addEventListener("click", function() {
    openModal(this.src);
  });

  // Close the modal when close button is clicked
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close the modal when user clicks outside the image
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





// Get the modal element
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = document.getElementById('modalImg');
var modalImg = document.getElementById("img01");

// Get the close button
var closeButton = document.getElementsByClassName("close")[0];

// Get the close button for clicking outside
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks on the image, open the modal
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.style.marginTop = ((window.innerHeight - modalImg.height) / 2) + 'px'; // Centering vertically
  modalImg.style.marginLeft = ((window.innerWidth - modalImg.width) / 2) + 'px'; // Centering horizontally
}

// When the user clicks on the close button, close the modal
closeButton.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks on the close button for clicking outside, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// JavaScript to trigger animation
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.skills-container').classList.add('show');
});






document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const imageItems = document.querySelectorAll(".image-item");
  let currentIndex = 0;

  function showImage(index) {
    imageItems.forEach(item => {
      item.classList.remove("active");
    });
    imageItems[index].classList.add("active");
  }

  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? imageItems.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex === imageItems.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });

  // Show the initial image
  showImage(currentIndex);
});





// JavaScript to toggle visibility of full philosophy of education text
document.addEventListener('DOMContentLoaded', function() {
  var readMoreLink = document.querySelector('.read-more-link');
  var fullPhiloText = document.querySelector('.full-philo-text');

  readMoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (fullPhiloText.style.display === 'block') {
          fullPhiloText.style.display = 'none';
      } else {
          fullPhiloText.style.display = 'block';
      }
  });
});




// Set proficiency percentages (replace these with actual percentages)
const htmlCssPercentage = 20;
const pythonPercentage = 50;
const phpPercentage = 90;
const javascriptPercentage = 20;
const sqlPercentage = 20;

// Update progress bars
document.querySelector('.htmlcss-progress').style.width = htmlCssPercentage + '%';
document.querySelector('.python-progress').style.width = pythonPercentage + '%';
document.querySelector('.php-progress').style.width = phpPercentage + '%';
document.querySelector('.javascript-progress').style.width = javascriptPercentage + '%';
document.querySelector('.sql-progress').style.width = sqlPercentage + '%';






function toggleVideoSize() {
  var video = document.getElementById('sampleVideo');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
  }
}
