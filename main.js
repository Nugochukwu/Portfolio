const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  themeToggleButton.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

document.addEventListener("DOMContentLoaded", () => {
  const progressContainers = document.querySelectorAll(".progress-container");

  // Set progress dynamically
  const newProgressValues = [10, 90, 40, 50]; // Target percentages for each bar

  progressContainers.forEach((container, index) => {
    setTimeout(() => {
      container.style.setProperty("--progress", `${newProgressValues[index]}%`);
    }, index * 100); // Add a delay for staggered animation
  });
});
