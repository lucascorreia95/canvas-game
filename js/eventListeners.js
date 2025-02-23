window.addEventListener("click", (event) => {
  const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
  const velocity = {
    x: Math.cos(angle) * 5,
    y: Math.sin(angle) * 5,
  };

  projectiles.push(new Projectile(centerX, centerY, 5, "white", velocity));
});

startGameBtn.addEventListener("click", () => {
  modalEl.style.display = "none";
  init();
  animate();
  spawnEnemies();
});
