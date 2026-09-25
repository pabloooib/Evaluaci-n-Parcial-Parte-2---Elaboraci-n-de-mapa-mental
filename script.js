// ---------- Ilustraciones (SVG originales, sin dependencias externas) ----------
const ICONS = {
  // iconos de tema
  compass: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="32" r="21"/>
    <path d="M32 17 L38 32 L32 47 L26 32 Z" fill="currentColor" stroke="none"/></svg>`,
  scale: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <line x1="32" y1="10" x2="32" y2="50"/>
    <line x1="14" y1="18" x2="50" y2="18"/>
    <path d="M14 18 L6 34a8 8 0 0 0 16 0Z"/>
    <path d="M50 18 L42 34a8 8 0 0 0 16 0Z"/>
    <line x1="20" y1="54" x2="44" y2="54"/></svg>`,
  star: `<svg viewBox="0 0 64 64" fill="currentColor" stroke="none">
    <path d="M32 6 L38.5 24 L58 24 L42 35.5 L48 54 L32 42.5 L16 54 L22 35.5 L6 24 L25.5 24 Z"/></svg>`,
  scroll: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="20" width="36" height="24" rx="2"/>
    <circle cx="12" cy="32" r="6"/><circle cx="52" cy="32" r="6"/>
    <line x1="21" y1="28" x2="43" y2="28"/><line x1="21" y1="36" x2="38" y2="36"/></svg>`,
  hearts: `<svg viewBox="0 0 64 64" fill="currentColor" stroke="none">
    <path opacity=".55" d="M40 46C24 36 20 24 28 18c5-4 10-1 10 5 0-6 5-9 10-5 8 6 4 18-8 28Z" transform="translate(-4,-4) scale(.9)"/>
    <path d="M34 52C18 42 14 30 22 24c5-4 10-1 10 5 0-6 5-9 10-5 8 6 4 18-8 28Z"/></svg>`,
  // ilustraciones grandes de unidad
  heroBook: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 26c-9-6-22-8-32-5v46c10-3 23-1 32 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50 26c9-6 22-8 32-5v46c-10-3-23-1-32 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="50" y1="26" x2="50" y2="72" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <g opacity=".85">
      <circle cx="50" cy="12" r="7" fill="currentColor"/>
      <path d="M50 2v4M50 18v4M40 12h4M56 12h4M43 5l3 3M54 16l3 3M57 5l-3 3M46 16l-3 3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    </g></svg>`,
  heroBible: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 30c-9-6-22-8-32-5v42c10-3 23-1 32 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50 30c9-6 22-8 32-5v42c-10-3-23-1-32 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="50" y1="30" x2="50" y2="72" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 10v14M43 17h14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <g opacity=".5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <line x1="50" y1="2" x2="50" y2="8"/>
      <line x1="32" y1="9" x2="38" y2="13"/>
      <line x1="68" y1="9" x2="62" y2="13"/>
      <line x1="22" y1="20" x2="29" y2="21"/>
      <line x1="78" y1="20" x2="71" y2="21"/>
    </g></svg>`,
  heroPath: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 88C30 60 18 40 50 40S60 18 84 12" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 9"/>
    <circle cx="18" cy="88" r="5" fill="currentColor"/>
    <circle cx="50" cy="40" r="5" fill="currentColor" opacity=".75"/>
    <circle cx="84" cy="12" r="5" fill="currentColor" opacity=".55"/>
    <g stroke="currentColor" stroke-width="3.4" stroke-linecap="round">
      <circle cx="50" cy="14" r="9" fill="none"/>
      <path d="M50 14 L54 10M50 14 L46 18"/>
    </g></svg>`
};

// ---------- Datos del mapa mental (III. Contenidos básicos) ----------
const UNITS = [
  {
    roman: "I", title: "Introducción y Conceptos Básicos", color: "#ff6b6b", hero: "heroBook",
    summary: "Repaso de ideas previas y las definiciones que sostienen todo el curso.",
    topics: [
      { num: "1", title: "Introducción", icon: "compass",
        desc: "Punto de partida del curso: se retoman ideas previas para preparar el terreno antes de entrar a los conceptos éticos propiamente dichos.",
        items: ["1.1 Afirmando conceptos previos", "1.1.1 Visión general de los Cursos Medulares", "1.1.2 Los siete Principios Bíblicos"] },
      { num: "2", title: "Conceptos básicos", icon: "scale",
        desc: "Las bases conceptuales de la ética: cómo se relaciona con la moral, con la bioética y con el ejercicio del liderazgo.",
        items: ["2.1 Ética y Moral", "2.1.1 Definiciones", "2.1.2 Similitudes", "2.1.3 Diferencias", "2.2 Bioética", "2.3 Liderazgo"] }
    ]
  },
  {
    roman: "II", title: "Principio Bíblico de Carácter Cristiano", color: "#4d96ff", hero: "heroBible",
    summary: "Cómo temperamento, carácter y personalidad se equilibran bajo un mismo principio.",
    topics: [
      { num: "3", title: "Principio de Carácter Cristiano", icon: "star",
        desc: "Cómo se forma y equilibra el carácter cristiano, integrando temperamento, carácter y personalidad.",
        items: ["3.1 Concepto", "3.2 Extremos y equilibrio en la aplicación del Principio Bíblico de Carácter Cristiano", "3.3 Temperamento", "3.4 Carácter", "3.5 Personalidad"] }
    ]
  },
  {
    roman: "III", title: "Ámbitos de Aplicación de la Ética", color: "#5fbf64", hero: "heroPath",
    summary: "La ética puesta en práctica: en la historia y en la vida individual.",
    topics: [
      { num: "4", title: "Ética a través del tiempo", icon: "scroll",
        desc: "Un recorrido histórico por la ética, observando cómo la vivieron figuras determinantes.",
        items: ["4.1 Ética de personajes importantes de la historia", "4.1.1 Ética de Jesús", "4.1.2 Ética de Pablo"] },
      { num: "5", title: "Ética Individual", icon: "hearts",
        desc: "La ética llevada al plano personal: cómo se vive en la vida propia, en la fe y en el matrimonio.",
        items: ["5.1 Ética personal", "5.2 Ética y cristianismo", "5.3 Ética y matrimonio"] }
    ]
  }
];

// ---------- Referencias ----------
const map = document.getElementById("map");
const svg = document.getElementById("lines");
const hub = document.getElementById("hub");
const viewport = document.getElementById("viewport");
const stage = document.getElementById("stage");

const CENTER = 700;
const R1 = 300;   // radio: hub -> unidad
const R2 = 560;   // radio: hub -> tema

function polar(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(a), y: CENTER + radius * Math.sin(a) };
}
function curvePath(x1, y1, x2, y2, bend) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len, ny = dx / len;
  const mx = (x1 + x2) / 2 + nx * bend, my = (y1 + y2) / 2 + ny * bend;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

const unitEls = [];       // .unit-node
const unitPathEls = [];   // hub -> unit
const topicMeta = [];     // { el, pathEl, unitIdx, topicIdx, unit, topic }

UNITS.forEach((unit, ui) => {
  const angle = -90 + ui * (360 / UNITS.length);
  const up = polar(angle, R1);

  // línea hub -> unidad
  const upath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  upath.setAttribute("d", curvePath(CENTER, CENTER, up.x, up.y, (ui % 2 === 0 ? 1 : -1) * 30));
  upath.setAttribute("stroke", unit.color);
  upath.style.color = unit.color;
  svg.appendChild(upath);
  unitPathEls.push(upath);

  // nodo de unidad
  const unode = document.createElement("div");
  unode.className = "node unit-node";
  unode.style.setProperty("--c", unit.color);
  unode.style.left = up.x + "px";
  unode.style.top = up.y + "px";
  unode.innerHTML = `
    <span class="badge">${unit.roman}</span>
    <div class="hero-ico">${ICONS[unit.hero]}</div>
    <p class="roman">UNIDAD ${unit.roman}</p>
    <h3>${unit.title}</h3>
    <p class="unit-summary">${unit.summary}</p>
    <span class="toggle-hint"><span id="hint-${ui}">Ver ${unit.topics.length} tema${unit.topics.length > 1 ? "s" : ""}</span> <span class="chevron">▾</span></span>
  `;
  map.appendChild(unode);
  unitEls.push(unode);

  // temas de esta unidad, distribuidos en abanico alrededor del ángulo de la unidad
  const n = unit.topics.length;
  const spread = n > 1 ? 15 : 0;
  unit.topics.forEach((topic, ti) => {
    const off = n > 1 ? -spread + (2 * spread * ti) / (n - 1) : 0;
    const tp = polar(angle + off, R2);

    const tpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tpath.setAttribute("d", curvePath(up.x, up.y, tp.x, tp.y, (ti % 2 === 0 ? 1 : -1) * 22));
    tpath.setAttribute("stroke", unit.color);
    tpath.style.color = unit.color;
    tpath.classList.add("branch");
    svg.appendChild(tpath);

    const tnode = document.createElement("div");
    tnode.className = "node topic-node";
    tnode.style.setProperty("--c", unit.color);
    tnode.style.left = tp.x + "px";
    tnode.style.top = tp.y + "px";
    const listHtml = topic.items.slice(0, 4).map(it => `<li>${it}</li>`).join("");
    const moreHtml = topic.items.length > 4 ? `<li class="more">+ ${topic.items.length - 4} más…</li>` : "";
    tnode.innerHTML = `
      <div class="head"><span class="ico">${ICONS[topic.icon]}</span><h4>${topic.num}. ${topic.title}</h4></div>
      <p class="def">${topic.desc}</p>
      <ul class="mini-list">${listHtml}${moreHtml}</ul>
      <p class="read-hint">Ver contenido completo →</p>
    `;
    map.appendChild(tnode);

    const meta = { el: tnode, pathEl: tpath, unitIdx: ui, topicIdx: ti, unit, topic };
    topicMeta.push(meta);

    tnode.addEventListener("click", (e) => {
      e.stopPropagation();
      openPanel(meta);
    });
  });

  unode.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleUnit(ui);
  });
});

// ---------- Animación de entrada ----------
let started = false;
function startMap() {
  if (started) return;
  started = true;
  hub.classList.add("show");
  setTimeout(() => hub.classList.add("pulse"), 700);
  unitEls.forEach((el, i) => setTimeout(() => el.classList.add("show"), 260 + i * 140));
  unitPathEls.forEach((p, i) => {
    const length = p.getTotalLength();
    p.style.strokeDasharray = length;
    p.style.strokeDashoffset = length;
    setTimeout(() => {
      p.style.transition = "stroke-dashoffset .9s ease";
      p.style.strokeDashoffset = 0;
      setTimeout(() => { p.style.transition = ""; p.style.strokeDasharray = ""; p.style.strokeDashoffset = ""; }, 950);
    }, 220 + i * 140);
  });
}

// ---------- Expandir / contraer unidades ----------
let openUnit = null;
function toggleUnit(ui) {
  if (openUnit === ui) { collapseUnit(ui); openUnit = null; return; }
  if (openUnit !== null) collapseUnit(openUnit);
  openUnit = ui;
  unitEls[ui].classList.add("expanded");
  document.getElementById(`hint-${ui}`).textContent = "Ocultar temas";
  topicMeta.filter(m => m.unitIdx === ui).forEach((m, i) => {
    setTimeout(() => { m.el.classList.add("show"); m.pathEl.classList.add("show"); }, 90 * i);
  });
}
function collapseUnit(ui) {
  unitEls[ui].classList.remove("expanded");
  document.getElementById(`hint-${ui}`).textContent = `Ver ${UNITS[ui].topics.length} tema${UNITS[ui].topics.length > 1 ? "s" : ""}`;
  topicMeta.filter(m => m.unitIdx === ui).forEach(m => {
    m.el.classList.remove("show", "focused");
    m.pathEl.classList.remove("show");
  });
  if (currentTopic && currentTopic.unitIdx === ui) closePanel();
}

// ---------- Resaltar la cadena hub -> unidad -> tema ----------
function highlightChain(m) {
  unitEls.forEach((el, idx) => el.classList.toggle("dim", idx !== m.unitIdx));
  unitPathEls.forEach((p, idx) => p.classList.toggle("dim", idx !== m.unitIdx));
  topicMeta.forEach(t => {
    const isSelf = t === m;
    t.el.classList.toggle("focused", isSelf);
    t.el.classList.toggle("dim", t.unitIdx === m.unitIdx ? false : true);
    if (t.unitIdx === m.unitIdx) t.pathEl.classList.toggle("active", isSelf);
  });
}
function clearChain() {
  unitEls.forEach(el => el.classList.remove("dim"));
  unitPathEls.forEach(p => p.classList.remove("dim", "active"));
  topicMeta.forEach(t => { t.el.classList.remove("dim", "focused"); t.pathEl.classList.remove("active"); });
}
hub.addEventListener("click", () => { clearChain(); closePanel(); });
viewport.addEventListener("click", () => { clearChain(); closePanel(); });

// ---------- Panel lateral de lectura ----------
const panel = document.getElementById("panel");
const panelBackdrop = document.getElementById("panelBackdrop");
const panelIco = document.getElementById("panelIco");
const panelEyebrow = document.getElementById("panelEyebrow");
const panelTitle = document.getElementById("panelTitle");
const panelDef = document.getElementById("panelDef");
const panelList = document.getElementById("panelList");
const panelClose = document.getElementById("panelClose");

let currentTopic = null;
function openPanel(m) {
  currentTopic = m;
  panel.style.setProperty("--panel-c", m.unit.color);
  panelIco.innerHTML = ICONS[m.topic.icon];
  panelEyebrow.textContent = `Unidad ${m.unit.roman} · ${m.unit.title}`;
  panelTitle.textContent = `${m.topic.num}. ${m.topic.title}`;
  panelDef.textContent = m.topic.desc;
  panelList.innerHTML = "";
  m.topic.items.forEach(it => {
    const li = document.createElement("li");
    li.textContent = it;
    panelList.appendChild(li);
  });
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  panelBackdrop.classList.add("open");
  highlightChain(m);
}
function closePanel() {
  currentTopic = null;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  panelBackdrop.classList.remove("open");
  clearChain();
}
panelClose.addEventListener("click", (e) => { e.stopPropagation(); closePanel(); });
panelBackdrop.addEventListener("click", () => closePanel());

// ---------- Pan y zoom ----------
let scale = 0.52, panX = 0, panY = 0;
let dragging = false, lastX = 0, lastY = 0;

function applyTransform() {
  stage.style.transform = `translate(-50%,-50%) translate(${panX}px, ${panY}px)`;
  map.style.transform = `scale(${scale})`;
}
viewport.addEventListener("pointerdown", (e) => {
  dragging = true; lastX = e.clientX; lastY = e.clientY;
  viewport.classList.add("dragging");
});
window.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  panX += e.clientX - lastX; panY += e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  applyTransform();
});
window.addEventListener("pointerup", () => { dragging = false; viewport.classList.remove("dragging"); });
viewport.addEventListener("wheel", (e) => {
  e.preventDefault();
  scale = Math.min(1.4, Math.max(0.28, scale + (e.deltaY > 0 ? -0.08 : 0.08)));
  applyTransform();
}, { passive: false });

document.getElementById("zoomIn").onclick = () => { scale = Math.min(1.4, scale + 0.12); applyTransform(); };
document.getElementById("zoomOut").onclick = () => { scale = Math.max(0.28, scale - 0.12); applyTransform(); };
document.getElementById("reset").onclick = () => {
  scale = 0.52; panX = 0; panY = 0; applyTransform();
  if (openUnit !== null) { collapseUnit(openUnit); openUnit = null; }
  closePanel();
};
applyTransform();

// ---------- Tema claro / oscuro ----------
const root = document.documentElement;
const savedTheme = localStorage.getItem("mindmap-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);
document.getElementById("theme").onclick = () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("mindmap-theme", next);
};

// ---------- Partículas ambientales de la bienvenida ----------
const particlesLayer = document.getElementById("particles");
let ambientTimer = null;
function spawnAmbientParticle() {
  const p = document.createElement("div");
  const size = 2 + Math.random() * 4;
  p.className = "particle";
  p.style.width = p.style.height = size + "px";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = 40 + Math.random() * 55 + "%";
  p.style.animationDuration = (4 + Math.random() * 4) + "s";
  particlesLayer.appendChild(p);
  setTimeout(() => p.remove(), 8500);
}
function startAmbientParticles() { ambientTimer = setInterval(spawnAmbientParticle, 260); }
function stopAmbientParticles() { clearInterval(ambientTimer); }
startAmbientParticles();

// ---------- Ráfaga de partículas al cruzar el umbral ----------
const burstLayer = document.getElementById("burstLayer");
function burstAt(x, y) {
  const count = 26;
  for (let i = 0; i < count; i++) {
    const d = document.createElement("div");
    d.className = "burst-dot";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const dist = 80 + Math.random() * 220;
    d.style.left = x + "px";
    d.style.top = y + "px";
    d.style.setProperty("--bx", Math.cos(angle) * dist + "px");
    d.style.setProperty("--by", Math.sin(angle) * dist + "px");
    d.style.animationDelay = (Math.random() * 0.15) + "s";
    burstLayer.appendChild(d);
    setTimeout(() => d.remove(), 1100);
  }
}

// ---------- Bienvenida: cruzar el umbral ----------
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  const rect = startBtn.getBoundingClientRect();
  const ox = rect.left + rect.width / 2;
  const oy = rect.top + rect.height / 2;

  welcome.style.setProperty("--ox", ox + "px");
  welcome.style.setProperty("--oy", oy + "px");

  burstAt(ox, oy);
  stopAmbientParticles();
  welcome.classList.add("exit");
  viewport.classList.add("enter");
  startMap();

  setTimeout(() => { welcome.classList.add("gone"); }, 900);
});

// ---------- Credencial (flip) ----------
document.getElementById("idcard").addEventListener("click", function () {
  this.classList.toggle("flipped");
});
