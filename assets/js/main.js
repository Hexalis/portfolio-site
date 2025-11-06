// --- Content you edit often ---
const PROJECTS = [
  {
    title: "Smart Scale (ESP32-C3 + HX711)",
    desc: "Battery-powered scale with OTA, WiFiManager, LED status, and REST API.",
    img: "/portfolio-site/assets/img/smart-scale.jpg",
    tags: ["ESP32-C3", "HX711", "OTA", "FastLED"],
    links: { code: "https://github.com/YOURUSERNAME/smart-scale", demo: "#" }
  },
  {
    title: "Lap Timer (ESP-Now Telemetry)",
    desc: "Through-beam IR timing, OLED display, logging to SD, live link to pit laptop.",
    img: "/portfolio-site/assets/img/lap-timer.jpg",
    tags: ["ESP-Now", "OLED", "SD"],
    links: { code: "https://github.com/YOURUSERNAME/lap-timer", demo: "#" }
  },
  {
    title: "TouchGFX Dashboard (STM32H7)",
    desc: "Telemetry screen with QSPI assets, CAN integration, and custom fonts.",
    img: "/portfolio-site/assets/img/touchgfx.jpg",
    tags: ["STM32H7", "TouchGFX", "QSPI", "CAN"],
    links: { code: "https://github.com/YOURUSERNAME/dash-touchgfx", demo: "#" }
  },
  {
    title: "LED/DMX Controller + MQTT UI",
    desc: "Web control over DMX and addressable LEDs with live browser preview.",
    img: "/portfolio-site/assets/img/dmx-ui.jpg",
    tags: ["DMX", "MQTT", "Tailwind"],
    links: { code: "https://github.com/YOURUSERNAME/dmx-mqtt-ui", demo: "#" }
  }
];

// --- Minimal utilities ---
const $ = (sel) => document.querySelector(sel);

// --- Render projects ---
function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;

  const chip = (t) =>
    `<span class="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/80">${t}</span>`;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden focus-within:ring-2 focus-within:ring-[#4cc9f0]">
      <a href="${p.links.demo || p.links.code || '#'}" class="block outline-none" aria-label="Open ${p.title}">
        <img src="${p.img}" alt="${p.title}" class="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </a>
      <div class="p-4">
        <h3 class="text-lg font-semibold">${p.title}</h3>
        <p class="mt-1 text-sm text-white/80">${p.desc}</p>
        <div class="mt-3 flex flex-wrap gap-2">${p.tags.map(chip).join("")}</div>
        <div class="mt-4 flex gap-3 text-sm">
          ${p.links.code ? `<a class="link-underline" href="${p.links.code}">Code →</a>` : ""}
          ${p.links.demo ? `<a class="link-underline" href="${p.links.demo}">Demo →</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

// --- Footer year ---
function setYear() {
  const y = $("#y");
  if (y) y.textContent = new Date().getFullYear();
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
});
