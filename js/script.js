// Typing Effect for Hero Title
const text = "Ocular Emergency Masterclass 2025";
let index = 0;
const speed = 100; // ms per character
const typedTextElement = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function typeWriter() {
  if (index < text.length) {
    typedTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    cursor.style.display = "none"; // hide cursor bila siap type
  }
}

// run typing effect bila page load
window.addEventListener("load", typeWriter);


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

  countdown.innerHTML = `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;

  if (distance < 0) {
    countdown.innerHTML = "EVENT STARTED!";
  }
}, 1000);

// Simple Particles Effect
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
  let particle = document.createElement("div");
  particle.classList.add("particle");
  let size = Math.random() * 4 + 2; // 2px - 6px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${5 + Math.random() * 10}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particlesContainer.appendChild(particle);
}
