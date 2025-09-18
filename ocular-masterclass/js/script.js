// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("September 19, 2025 08:00:00").getTime();

setInterval(function () {
  let now = new Date().getTime();
  let distance = eventDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    countdown.innerHTML = "Event Started!";
  }
}, 1000);
