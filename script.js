// ---- Lista de pruebas ----
const CHALLENGES = [
  {n:"Foto portada", p:1, d:"Recread la portada de un disco o grupo musical delante de un bar. Poses, actitud y composición como si fuera la carátula real."},
  {n:"Palabra prohibida", p:1, d:"20-30 seg hablando de la noche de hoy sin decir: pollo, bar, cerveza, caro ni «solo una». Si alguien la suelta, no cuenta."},
  {n:"Brindis con palabras obligatorias", p:2, d:"Inventad un brindis que incluya sí o sí las palabras que dé la organización. Debe rimar al menos una vez."},
  {n:"Mascota del equipo", p:2, d:"Adoptad un objeto como mascota, ponedle nombre y llevadla toda la noche en los vídeos. No puede ser de un bar, negocio o persona."},
  {n:"Foto imposible", p:2, d:"Una sola foto con todo a la vez: algo amarillo, una bebida, un reloj, una bandera y todo el equipo."},
  {n:"Sorbo sincronizado", p:1, d:"Todo el equipo da un trago exactamente a la vez sin que nadie diga «ya». Solo miradas."},
  {n:"Luxemburgués avanzado", p:2, d:"Cada miembro pide usando: Moien al entrar, «ee Béier wann ech gelift» al pedir y Merci villmools al final."},
  {n:"Cerveza más barata del centro", p:2, d:"Foto de la pinta más barata que encontréis con el precio visible. Punto extra al equipo que consiga la más barata de todos.", bonus:"+1 al récord de la noche"},
  {n:"Brindis en los ascensores", p:2, d:"Brindis grupal dentro del ascensor panorámico gratis (Pfaffenthal o Grund), con cara de estar en un rooftop de lujo."},
  {n:"Frontalier del amor", p:2, d:"Con permiso, encontrad a alguien que viva en Francia, Bélgica o Alemania y trabaje en Lux, y brindad «por cruzar la frontera cada día»."},
  {n:"El trueque imposible", p:3, d:"Empezáis con un objeto sin valor (un boli, un chicle) y hacéis trueques con desconocidos hasta algo mejor. Mínimo 3 intercambios grabados."},
  {n:"Recomendación local", p:3, d:"Preguntad a alguien de aquí su bar favorito de Lux que NO sea turístico. Id hasta allí y haceos una foto."},
  {n:"El precio justo · edición bar", p:2, d:"Los pollos mandan la foto de una bebida de un bar concreto. Adivinad de cuál es, id y haceos una foto allí.", bonus:"+1 si recreáis la foto original"},
  {n:"El equilibrista", p:2, d:"Un miembro cruza una plaza entera con un vaso (de plástico/agua) en la cabeza, sin sujetarlo con las manos."},
  {n:"Karaoke en Oscar's", p:2, d:"Todo el equipo canta el estribillo entero de una canción en Oscar's, el bar de karaoke. A poder ser sin partirse de risa."}
];

const GOAL = 20;
const grid = document.getElementById('grid');
const state = {};   // index -> bool
let offset = 0;     // ajustes manuales de ±2

// ---- Construir las tarjetas ----
CHALLENGES.forEach((c, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-pressed', 'false');
  card.innerHTML = `
    <div class="check">✓</div>
    <div class="row">
      <div class="name">${c.n}</div>
      <div class="pill">${c.p} pt${c.p > 1 ? 's' : ''}</div>
    </div>
    <div class="desc">${c.d}</div>
    ${c.bonus ? `<div class="bonus">${c.bonus}</div>` : ''}
    <div class="tap-hint">tocar</div>`;
  const toggle = () => {
    state[i] = !state[i];
    card.classList.toggle('on', state[i]);
    card.setAttribute('aria-pressed', state[i] ? 'true' : 'false');
    save();
    render();
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
  card.dataset.i = i;
  grid.appendChild(card);
});

const cur = document.getElementById('cur'),
      fill = document.getElementById('fill'),
      status = document.getElementById('status'),
      hint = document.getElementById('hint'),
      plus2 = document.getElementById('plus2'),
      minus2 = document.getElementById('minus2'),
      adjInfo = document.getElementById('adjInfo');
let wasReady = false;

function total() {
  let t = 0;
  CHALLENGES.forEach((c, i) => { if (state[i]) t += c.p; });
  return Math.max(0, t + offset);   // nunca baja de 0
}

function render() {
  const t = total();
  cur.textContent = t;
  fill.style.width = Math.min(100, t / GOAL * 100) + '%';

  const ready = t >= GOAL;
  fill.classList.toggle('done', ready);

  // Regla del juego: al llegar a 20 los puntos se congelan
  minus2.disabled = ready;

  if (ready) {
    status.textContent = '🐔 Modo caza · Puntos congelados';
    status.classList.add('ready');
    hint.textContent = 'Los pollos se separan en dos parejas. Atentos a las pistas del grupo privado.';
    if (!wasReady) { showToast('🐔 ¡20 PUNTOS! Empieza la caza'); }
  } else {
    status.textContent = 'Fase 1 · Acumulando';
    status.classList.remove('ready');
    const left = GOAL - t;
    hint.textContent = `Faltan ${left} punto${left > 1 ? 's' : ''} para desbloquear la caza.`;
  }

  adjInfo.textContent = offset === 0 ? '' : `Ajuste manual: ${offset > 0 ? '+' : ''}${offset}`;
  wasReady = ready;
}

// ---- Botones de ajuste ----
plus2.addEventListener('click', () => {
  offset += 2;
  save();
  render();
  showToast('+2 puntos · prueba de los pollos');
});

minus2.addEventListener('click', () => {
  if (total() >= GOAL) return;   // puntos congelados
  offset -= 2;
  save();
  render();
  showToast('−2 puntos · penalización');
});

// ---- Toast ----
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ---- Guardado en el móvil ----
function save() {
  try {
    localStorage.setItem('ftc-state', JSON.stringify({ s: state, o: offset }));
  } catch (e) {}
}

function load() {
  try {
    const data = JSON.parse(localStorage.getItem('ftc-state') || '{}');
    const s = data.s || {};
    offset = data.o || 0;
    Object.keys(s).forEach(k => {
      if (s[k]) {
        state[k] = true;
        const el = grid.querySelector(`[data-i="${k}"]`);
        if (el) { el.classList.add('on'); el.setAttribute('aria-pressed', 'true'); }
      }
    });
  } catch (e) {}
}

document.getElementById('reset').addEventListener('click', () => {
  Object.keys(state).forEach(k => delete state[k]);
  offset = 0;
  grid.querySelectorAll('.card').forEach(c => {
    c.classList.remove('on');
    c.setAttribute('aria-pressed', 'false');
  });
  wasReady = false;
  save();
  render();
});

load();
render();
