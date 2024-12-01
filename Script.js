// Global variables
let config = {};
let score = 0;
let totalDifferences = 0;
let foundDifferences = [];
let timer;
let timeElapsed = 0;

// Initialize the game
async function initGame() {
  // Load JSON configuration
  config = await fetch("config.json").then(res => res.json());
  
  // Set title and images
  document.getElementById("gameTitle").innerText = config.gameTitle;
  document.getElementById("image1").src = config.images.image1;
  document.getElementById("image2").src = config.images.image2;

  // Calculate total differences
  totalDifferences = config.differences.length;

  // Set up canvases
  setupCanvas("canvas1", config.differences);
  setupCanvas("canvas2", config.differences);

  // Start the timer
  startTimer();
}

// Setup the canvas for click detection
function setupCanvas(canvasId, differences) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const img = document.getElementById(canvasId.replace("canvas", "image"));
  img.onload = () => {
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;

    // Add event listener for clicks
    canvas.addEventListener("click", event => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Check if the click is within any difference
      const hit = differences.findIndex(diff => {
        return (
          x >= diff.x &&
          x <= diff.x + diff.width &&
          y >= diff.y &&
          y <= diff.y + diff.height
        );
      });

      if (hit !== -1 && !foundDifferences.includes(hit)) {
        foundDifferences.push(hit);
        highlightDifference(ctx, differences[hit]);
        updateScore();
      }
    });
  };
}

// Highlight the difference on the canvas
function highlightDifference(ctx, diff) {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.strokeRect(diff.x, diff.y, diff.width, diff.height);
}

// Update score and check win condition
function updateScore() {
  score++;
  document.getElementById("score").innerText = `Score: ${score}`;
  if (score === totalDifferences) {
    clearInterval(timer);
    document.getElementById("message").innerText = "You won!";
  }
}

// Start the timer
function startTimer() {
  timer = setInterval(() => {
    timeElapsed++;
    const minutes = String(Math.floor(timeElapsed / 60)).padStart(2, "0");
    const seconds = String(timeElapsed % 60).padStart(2, "0");
    document.getElementById("timer").innerText = `Time: ${minutes}:${seconds}`;
  }, 1000);
}

// Initialize the game
initGame();
