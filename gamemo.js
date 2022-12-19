// Initialize game variables
let score = 0;
let lives = 3;
let level = 1;
let gameOver = false;

// Set up the game canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set up the game objects
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 20,
  height: 20,
  speed: 5,
  color: "red"
};

const enemies = [];

// Set up the game loop
function gameLoop() {
  // Update game state
  updateGame();

  // Draw game objects
  drawGame();

  // Schedule next game loop iteration
  requestAnimationFrame(gameLoop);
}

// Update game state
function updateGame() {
  // Check for game over
  if (lives <= 0 || level > 10) {
    gameOver = true;
    document.getElementById("gameOver").style.display = "block";
  }

  // Move player
  movePlayer();

  // Update enemies
  updateEnemies();

  // Check for collisions
  checkCollisions();
}

// Draw game objects
function drawGame() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Draw the enemies
  ctx.fillStyle = "black";
  enemies.forEach(function(enemy) {
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });

  // Draw the score
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 8, 20);
}
  // Draw the
