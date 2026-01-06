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
    modalImage.src = image.src; // Set modal image source to the clicked image's source
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

//////
//////tERMINAL STUFF
//////

// Initialize the terminal
const terminal = new Terminal({
  cols: 80,
  rows: 24,
  cursorBlink: true,
  theme: {
      background: '#1e1e1e',
      foreground: '#ffffff',
  },
}
);

// Open the terminal in the 'terminal' div
terminal.open(document.getElementById('terminal'));

// Display a welcome message
terminal.write('Welcome to the Web Terminal!\r\n');
terminal.write('Type a sentence and press Enter.\r\n# ');

// Buffer to store user input
let inputBuffer = '';

// Handle user input
terminal.onData(data => {
  switch (data) {
      case '\r': // Enter key
          terminal.write('\r\n'); // Move to the next line
          terminal.write(`You typed: ${inputBuffer}\r\n`); // Echo the input
          terminal.write('# '); // Display a new prompt
          inputBuffer = ''; // Clear the buffer
          break;
      case '\u007F': // Backspace (DEL key)
          if (inputBuffer.length > 0) {
              inputBuffer = inputBuffer.slice(0, -1); // Remove the last character
              // Visually update the terminal
              terminal.write('\b \b');
          }
          break;
      default:
          // Append valid characters to the buffer
          inputBuffer += data;
          terminal.write(data); // Display the typed character
  }
});

