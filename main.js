const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  themeToggleButton.textContent = isDarkTheme ? 'Light Theme' : 'Dark Theme';
});

document.addEventListener("DOMContentLoaded", () => {
  const progressContainers = document.querySelectorAll(".progress-container");

  // Set progress dynamically
  const newProgressValues = [90, 80, 75, 70, 80, 80, 80, 80, 80, 80]; // Target percentages for each bar

  progressContainers.forEach((container, index) => {
    setTimeout(() => {
      container.style.setProperty("--progress", `${newProgressValues[index]}%`);
    }, index * 100); // Add a delay for staggered animation
  });
});

const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const images = document.querySelectorAll(".clickable-image");

// Open modal and display clicked image
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex"; // Ensure the modal uses Flexbox
    modalImage.src = "images/PFP.jpg"; // Set modal image source to the clicked image's source
  });
});

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
