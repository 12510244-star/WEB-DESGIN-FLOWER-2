// =========================================================
// 1. MULTI-LAYERED FALLING PETALS & CATEGORY THEMED PETALS
// =========================================================
const categoryPetalPalettes = {
  all: [
    "linear-gradient(135deg, #ffc4da, #f58cb6)",
    "linear-gradient(135deg, #ffe0ec, #f9adc9)",
    "linear-gradient(135deg, #fff1e4, #f7bfd4)",
    "linear-gradient(135deg, #fce1ea, #e5c687)"
  ],
  roses: [
    "linear-gradient(135deg, #c81d4e, #ff6b95)",
    "linear-gradient(135deg, #e5386d, #ffa6c1)",
    "linear-gradient(135deg, #9e1239, #f27aa8)",
    "linear-gradient(135deg, #ffd1e1, #e56b99)"
  ],
  lilies: [
    "linear-gradient(135deg, #ffffff, #f8e8ff)",
    "linear-gradient(135deg, #fff5fa, #e7d4ff)",
    "linear-gradient(135deg, #ffffff, #ffd6e7)",
    "linear-gradient(135deg, #fdfbff, #e9d2a6)"
  ],
  bouquet: [
    "linear-gradient(135deg, #ffd1e1, #ffe8a3)",
    "linear-gradient(135deg, #d8ecff, #ffcce0)",
    "linear-gradient(135deg, #e7d4ff, #ffd6e7)",
    "linear-gradient(135deg, #ffe5d4, #f9adc9)"
  ],
  decor: [
    "linear-gradient(135deg, #fff4d2, #c69c53)",
    "linear-gradient(135deg, #fffaf0, #e8d2a6)",
    "linear-gradient(135deg, #fce1ea, #d4af37)"
  ]
};

let activePetalTheme = "all";

function ensurePetalContainer() {
  let container = document.getElementById("petal-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "petal-container";
    document.body.appendChild(container);
  }
  return container;
}

function spawnSinglePetal(extraFast = false, themeOverride = null) {
  if (document.hidden) return;
  const container = ensurePetalContainer();
  const theme = themeOverride || activePetalTheme;
  const palette = categoryPetalPalettes[theme] || categoryPetalPalettes.all;

  const petal = document.createElement("span");
  const isBlurred = Math.random() > 0.72;
  const isLilyShape = theme === "lilies" ? " petal-lily-shape" : "";
  petal.className = (isBlurred ? "falling-petal petal-blur" : "falling-petal") + isLilyShape;

  const size = isBlurred ? Math.random() * 10 + 14 : Math.random() * 10 + 9;
  const startLeft = Math.random() * 100;
  const duration = extraFast ? Math.random() * 3 + 4 : Math.random() * 5 + 6.5;
  const sway = (Math.random() * 115 - 55).toFixed(0) + "px";

  petal.style.width = `${size}px`;
  petal.style.height = `${size * (theme === "lilies" ? 0.55 : 0.75)}px`;
  petal.style.left = `${startLeft}vw`;
  petal.style.background = palette[Math.floor(Math.random() * palette.length)];
  petal.style.animationDuration = `${duration}s`;
  petal.style.setProperty("--sway", sway);

  container.appendChild(petal);
  setTimeout(() => petal.remove(), duration * 1000);
}

function spawnGoldDust() {
  if (document.hidden) return;
  const container = ensurePetalContainer();
  const orb = document.createElement("span");
  orb.className = "gold-dust-orb";

  const size = Math.random() * 6 + 4;
  const duration = Math.random() * 5 + 6;
  orb.style.width = `${size}px`;
  orb.style.height = `${size}px`;
  orb.style.left = `${Math.random() * 100}vw`;
  orb.style.animationDuration = `${duration}s`;
  orb.style.setProperty("--sway", `${(Math.random() * 60 - 30).toFixed(0)}px`);

  container.appendChild(orb);
  setTimeout(() => orb.remove(), duration * 1000);
}

// Efek Animasi Khusus Saat Klik Kategori Roses, Lilies, Garden Bouquet, atau Decor
window.playCategoryEffect = function (cat) {
  activePetalTheme = cat;
  const count = cat === "all" ? 14 : 24;

  // Hujan kelopak sesuai warna & bentuk bunga kategori tersebut
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnSinglePetal(true, cat), i * 65);
  }

  // Tambahan kilau stardust emas naik saat memilih Lilies atau Decor
  if (cat === "lilies" || cat === "decor") {
    for (let j = 0; j < 10; j++) {
      setTimeout(spawnGoldDust, j * 140);
    }
  }
};

function triggerOpeningPetalShower(count = 28) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnSinglePetal(true), i * 85);
  }
}

function initRichAmbientPetals() {
  ensurePetalContainer();
  for (let i = 0; i < 8; i++) {
    setTimeout(() => spawnSinglePetal(false), i * 320);
  }
  setInterval(() => spawnSinglePetal(false), 900);
  setInterval(spawnGoldDust, 1450);
}

// =========================================================
// 2. MAGIC CURSOR SPARKLE TRAIL & BUTTON PETAL BURST
// =========================================================
function createParticleBurst(x, y, count = 8) {
  const symbols = ["✦", "❀", "✧", "✿"];
  const colors = ["#e56b99", "#c69c53", "#f5a3c2", "#7a1c46"];

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "magic-particle";
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.color = colors[Math.floor(Math.random() * colors.length)];
    p.style.fontSize = `${Math.random() * 10 + 10}px`;
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
    const velocity = Math.random() * 55 + 30;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 15;

    if (typeof gsap !== "undefined") {
      gsap.to(p, {
        x: dx,
        y: dy,
        rotation: Math.random() * 240 - 120,
        scale: 0.2,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        onComplete: () => p.remove()
      });
    } else {
      setTimeout(() => p.remove(), 500);
    }
  }
}

function initCursorAndClickMagic() {
  let lastTrailTime = 0;

  window.addEventListener(
    "pointermove",
    (e) => {
      const now = Date.now();
      if (now - lastTrailTime < 65) return;
      lastTrailTime = now;

      const spark = document.createElement("span");
      spark.className = "magic-particle";
      spark.textContent = Math.random() > 0.4 ? "✦" : "❀";
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      spark.style.color = Math.random() > 0.5 ? "#c69c53" : "#e56b99";
      spark.style.fontSize = `${Math.random() * 7 + 8}px`;
      document.body.appendChild(spark);

      if (typeof gsap !== "undefined") {
        gsap.to(spark, {
          y: -22,
          x: Math.random() * 20 - 10,
          scale: 0,
          opacity: 0,
          duration: 0.65,
          ease: "power1.out",
          onComplete: () => spark.remove()
        });
      } else {
        setTimeout(() => spark.remove(), 400);
      }
    },
    { passive: true }
  );

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    btn.classList.remove("btn-clicked");
    void btn.offsetWidth;
    btn.classList.add("btn-clicked");
    setTimeout(() => btn.classList.remove("btn-clicked"), 240);

    createParticleBurst(e.clientX, e.clientY, 9);
  });
}

// =========================================================
// 3. NAVBAR TRANSPARAN -> FROSTED GLASS SAAT DIGULIR
// =========================================================
function initNavbarScroll() {
  const topbar = document.querySelector(".app-topbar");
  if (!topbar) return;

  const toggleScrollClass = () => {
    if (window.scrollY > 20) {
      topbar.classList.add("navbar-scrolled");
    } else {
      topbar.classList.remove("navbar-scrolled");
    }
  };

  toggleScrollClass();
  window.addEventListener("scroll", toggleScrollClass, { passive: true });
}

// =========================================================
// 4. GRAND OPENING CURTAIN & GSAP SCROLLTRIGGER
// =========================================================
function prepareWordSplits() {
  document.querySelectorAll(".reveal-words").forEach((heading) => {
    if (heading.dataset.splitted === "true") return;
    heading.dataset.splitted = "true";

    const words = heading.textContent.trim().split(/\s+/);
    heading.innerHTML = words
      .map((w) => `<span class="word-mask"><span class="word-inner">${w}</span></span>`)
      .join("");
  });
}

function initGrandOpeningAndGsap() {
  prepareWordSplits();

  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    if (typeof gsap !== "undefined") {
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  const introOverlay = document.getElementById("boutique-intro");
  if (introOverlay) {
    setTimeout(() => {
      introOverlay.classList.add("intro-finished");
    }, 2800);
  }

  if (typeof gsap === "undefined") {
    if (introOverlay) introOverlay.classList.add("intro-finished");
    return;
  }

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (introOverlay) {
    const tl = gsap.timeline();

    tl.from(".intro-center-emblem", {
      scale: 0.7,
      opacity: 0,
      duration: 0.55,
      ease: "back.out(1.7)"
    })
      .to(".intro-center-emblem", {
        scale: 1.12,
        opacity: 0,
        duration: 0.35,
        delay: 0.45,
        ease: "power2.in"
      })
      .to(
        ".curtain-left",
        {
          xPercent: -102,
          duration: 0.9,
          ease: "power4.inOut"
        },
        "-=0.1"
      )
      .to(
        ".curtain-right",
        {
          xPercent: 102,
          duration: 0.9,
          ease: "power4.inOut",
          onStart: () => triggerOpeningPetalShower(30),
          onComplete: () => introOverlay.classList.add("intro-finished")
        },
        "<"
      )
      .from(
        ".app-topbar",
        {
          y: -60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        },
        "-=0.5"
      )
      .from(
        ".hero-title-3d .word-inner",
        {
          yPercent: 120,
          rotationX: -75,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.4)"
        },
        "-=0.45"
      )
      .from(
        ".hero-stagger",
        {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out"
        },
        "-=0.55"
      )
      .from(
        ".hero-visual-entrance",
        {
          scale: 0.65,
          rotation: -12,
          opacity: 0,
          duration: 0.85,
          ease: "elastic.out(1, 0.7)"
        },
        "-=0.65"
      )
      .from(
        ".feature-item",
        {
          y: 22,
          scale: 0.85,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.8)"
        },
        "-=0.5"
      );
  }

  document.querySelectorAll(".reveal-words:not(.hero-title-3d)").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".word-inner"), {
      yPercent: 115,
      rotationX: -55,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: typeof ScrollTrigger !== "undefined"
        ? {
            trigger: heading,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        : undefined
    });
  });

  if (typeof ScrollTrigger !== "undefined") {
    document.querySelectorAll("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || -30;
      gsap.to(el, {
        y: speed,
        rotation: 20,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    document.querySelectorAll(".reveal-section").forEach((sec) => {
      gsap.from(sec, {
        y: 30,
        opacity: 0.2,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 90%",
          once: true
        }
      });
    });
  }
}

// =========================================================
// 5. 3D TILT & STAGGERED WAVE ENTRANCE PADA PRODUCT CARDS
// =========================================================
function bind3DCardTilt() {
  document.querySelectorAll(".product-card").forEach((card) => {
    if (card.dataset.tiltBound === "true") return;
    card.dataset.tiltBound = "true";

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) translateY(-6px) scale(1.02)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    });
  });
}

window.initCardAnimations = function () {
  bind3DCardTilt();

  // Animasi gelombang masuk berurutan setiap kali grid produk tampil/difilter
  const cards = document.querySelectorAll(".product-card");
  if (cards.length > 0 && typeof gsap !== "undefined") {
    gsap.fromTo(
      cards,
      { y: 26, scale: 0.94 },
      {
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: { amount: 0.35, from: "start" },
        ease: "back.out(1.3)",
        clearProps: "transform"
      }
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initRichAmbientPetals();
  initCursorAndClickMagic();
  initNavbarScroll();
  initGrandOpeningAndGsap();
  window.initCardAnimations();
});