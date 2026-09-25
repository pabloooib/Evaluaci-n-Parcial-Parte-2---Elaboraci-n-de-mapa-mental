// ---------- Datos del mapa mental ----------
const NODES = [
  {
    title: "Introducción y conceptos básicos",
    icon: "🔎", color: "#ff6b6b",
    def: "La ética es la rama de la filosofía que estudia la moralidad de los actos humanos: lo que es bueno o malo en la conducta de las personas. Se distingue de la moral (las normas vividas) porque la ética las reflexiona y fundamenta.",
    ej: "Cuando devuelvo el cambio de más que me dieron en una tienda, estoy aplicando un criterio ético, no solo una regla aprendida."
  },
  {
    title: "La persona humana",
    icon: "🧑", color: "#4ecdc4",
    def: "Ser dotado de razón, libertad y dignidad, capaz de conocerse a sí mismo, de decidir y de relacionarse con los demás como fin y nunca solo como medio.",
    ej: "Respeto la opinión de un compañero de trabajo aunque piense distinto a mí, porque reconozco su dignidad como persona."
  },
  {
    title: "Los actos humanos",
    icon: "🙋", color: "#ffc53d",
    def: "Acciones realizadas con conocimiento y libertad, de las que la persona es responsable; se distinguen de los simples «actos del hombre» (reflejos, instintos) por ser voluntarias.",
    ej: "Estudiar para un examen es un acto humano, porque decido libremente sentarme a repasar en vez de salir con amigos."
  },
  {
    title: "La conciencia moral",
    icon: "🧭", color: "#5fbf64",
    def: "Juicio interior por el cual la persona reconoce si un acto concreto es bueno o malo, y que la orienta a obrar bien y evitar el mal.",
    ej: "Sentí remordimiento al haber ocultado la verdad a mi familia; mi conciencia me lo señaló antes de que nadie me lo dijera."
  },
  {
    title: "Libertad y responsabilidad",
    icon: "🕊️", color: "#4d96ff",
    def: "La libertad es la capacidad de autodeterminarse; la responsabilidad es asumir las consecuencias de lo que se decide libremente.",
    ej: "Elegí mi carrera universitaria y por eso asumo con disciplina el esfuerzo que implica terminarla."
  },
  {
    title: "Valores y virtudes morales",
    icon: "🌟", color: "#b983ff",
    def: "Cualidades estables que orientan la conducta hacia el bien, como la honestidad, la justicia, la prudencia y la fortaleza.",
    ej: "Procuro practicar la puntualidad como un valor diario, incluso cuando nadie lo exige."
  },
  {
    title: "La ley moral",
    icon: "📜", color: "#ff9f45",
    def: "Conjunto de normas que orientan al ser humano hacia su bien y su fin propio; la ley natural está inscrita en la razón, y la ley positiva la concretan las autoridades civiles o religiosas.",
    ej: "Respetar la vida de los demás lo reconozco como una exigencia de la ley natural, sin que nadie tenga que imponérmelo."
  },
  {
    title: "Ética y sexualidad",
    icon: "💗", color: "#ff6fb1",
    def: "Reflexión sobre el sentido y el ejercicio responsable de la sexualidad humana, integrada al amor, al respeto y a la dignidad de la otra persona.",
    ej: "Valoro más el respeto y la comunicación en una relación de pareja que la búsqueda de una satisfacción inmediata."
  },
  {
    title: "Ética y matrimonio",
    icon: "💍", color: "#17a2b8",
    def: "Estudio de los principios morales que fundamentan el matrimonio como una unión libre, fiel, exclusiva y orientada al bien de los cónyuges y de los hijos.",
    ej: "Admiro el compromiso de mis padres, que después de muchos años siguen apoyándose mutuamente en las dificultades."
  }
];

// ---------- Referencias ----------
const map = document.getElementById("map");
const svg = document.getElementById("lines");
const hub = document.getElementById("hub");
const viewport = document.getElementById("viewport");
const stage = document.getElementById("stage");

const CENTER = 620; // centro del lienzo de 1240x1240
const RADIUS = 420;

// ---------- Construir nodos y líneas ----------
const nodeEls = [];
const pathEls = [];

NODES.forEach((n, i) => {
  const angle = (-90 + i * (360 / NODES.length)) * Math.PI / 180;
  const x = CENTER + RADIUS * Math.cos(angle);
  const y = CENTER + RADIUS * Math.sin(angle);

  // curva de conexión (bezier cuadrática con leve desvío perpendicular)
  const dx = x - CENTER, dy = y - CENTER;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len, ny = dx / len;
  const bend = (i % 2 === 0 ? 1 : -1) * 34;
  const mx = (CENTER + x) / 2 + nx * bend;
  const my = (CENTER + y) / 2 + ny * bend;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", `M ${CENTER} ${CENTER} Q ${mx} ${my} ${x} ${y}`);
  path.setAttribute("stroke", n.color);
  path.style.color = n.color;
  svg.appendChild(path);
  pathEls.push(path);

  const node = document.createElement("div");
  node.className = "node";
  node.style.setProperty("--c", n.color);
  node.style.left = x + "px";
  node.style.top = y + "px";
  node.innerHTML = `
    <div class="head"><span class="ico">${n.icon}</span><h3>${i + 1}. ${n.title}</h3></div>
    <p class="def">${n.def}</p>
    <p class="ej"><b>Ejemplo personal:</b> ${n.ej}</p>
  `;
  map.appendChild(node);
  nodeEls.push(node);

  node.addEventListener("click", (e) => {
    e.stopPropagation();
    focusNode(i);
  });
});

// ---------- Animación de entrada ----------
requestAnimationFrame(() => {
  hub.classList.add("show");
  setTimeout(() => hub.classList.add("pulse"), 700);
  nodeEls.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), 250 + i * 90);
  });
  // dibujar líneas progresivamente
  pathEls.forEach((p, i) => {
    const length = p.getTotalLength();
    p.style.strokeDasharray = length;
    p.style.strokeDashoffset = length;
    setTimeout(() => {
      p.style.transition = "stroke-dashoffset 1s ease";
      p.style.strokeDashoffset = 0;
    }, 200 + i * 90);
  });
});

// ---------- Enfocar / resaltar un tema ----------
let focused = null;
function focusNode(i) {
  if (focused === i) { clearFocus(); return; }
  focused = i;
  nodeEls.forEach((el, idx) => el.classList.toggle("dim", idx !== i));
  pathEls.forEach((p, idx) => {
    p.classList.toggle("active", idx === i);
    p.classList.toggle("dim", idx !== i);
  });
  nodeEls[i].classList.add("focused");
}
function clearFocus() {
  focused = null;
  nodeEls.forEach(el => el.classList.remove("dim", "focused"));
  pathEls.forEach(p => p.classList.remove("active", "dim"));
}
hub.addEventListener("click", clearFocus);
viewport.addEventListener("click", clearFocus);

// ---------- Pan y zoom ----------
let scale = 1, panX = 0, panY = 0;
let dragging = false, lastX = 0, lastY = 0;

function applyTransform() {
  stage.style.transform = `translate(-50%,-50%) translate(${panX}px, ${panY}px)`;
  map.style.transform = `scale(${scale})`;
}

viewport.addEventListener("pointerdown", (e) => {
  dragging = true;
  lastX = e.clientX; lastY = e.clientY;
  viewport.classList.add("dragging");
});
window.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  panX += e.clientX - lastX;
  panY += e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  applyTransform();
});
window.addEventListener("pointerup", () => {
  dragging = false;
  viewport.classList.remove("dragging");
});

viewport.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.08 : 0.08;
  scale = Math.min(1.6, Math.max(0.35, scale + delta));
  applyTransform();
}, { passive: false });

document.getElementById("zoomIn").onclick = () => { scale = Math.min(1.6, scale + 0.12); applyTransform(); };
document.getElementById("zoomOut").onclick = () => { scale = Math.max(0.35, scale - 0.12); applyTransform(); };
document.getElementById("reset").onclick = () => { scale = 1; panX = 0; panY = 0; applyTransform(); clearFocus(); };

// vista inicial ligeramente alejada para ver todo el mapa
scale = 0.72;
applyTransform();

// ---------- Tema claro / oscuro ----------
const root = document.documentElement;
const saved = localStorage.getItem("mindmap-theme");
if (saved) root.setAttribute("data-theme", saved);

document.getElementById("theme").onclick = () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("mindmap-theme", next);
};
