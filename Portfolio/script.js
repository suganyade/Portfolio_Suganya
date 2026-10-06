document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  // Contact form validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      status.style.color = "#ff6a00";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      status.textContent = "Please enter a valid email address.";
      status.style.color = "#ff6a00";
      return;
    }

    status.textContent = "Message sent successfully! 🚀";
    status.style.color = "#6c63ff";
    form.reset();
  });

  // Scroll-triggered animation
  const animatedCards = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  animatedCards.forEach(card => observer.observe(card));

  // Ripple effect on buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Corner glow pulse
  setInterval(() => {
    document.querySelectorAll(".corner-animation").forEach(el => {
      el.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px #6c63ff`;
    });
  }, 1000);
});