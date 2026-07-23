// ---- Lista de pruebas ----
const CHALLENGES = [
  {p:2, n:"Mascota del equipo", d:"Adoptad un objeto como mascota, ponedle nombre y llevadla toda la noche en los vídeos y fotos. Válida al llegar a 18 puntos si todas las pruebas anteriores la incluyen."},
  {p:2, n:"Chupito oficial", d:"Brindis rápido del equipo con un chupito. Solo un trago."},
  {p:2, n:"Bola de billar", d:"Con permiso, encontrad a alguien que sea calvo y haceos una foto con él."},
  {p:2, n:"Foto imposible", d:"Una sola foto con algo amarillo, una bebida, un reloj, una bandera y los 5 miembros del equipo."},
  {p:4, n:"Split the G", d:"Hacer un Split the G con una Guinness. Al menos tres participantes deben intentarlo y uno conseguirlo."},
  {p:2, n:"El famoso infiltrado", d:"Convenced a un desconocido de que alguien del equipo es famoso en España. Si hace una foto con él o ella, cuenta."},
  {p:2, n:"El equilibrista", d:"Un miembro cruza una plaza entera con un vaso o botella de plástico en la cabeza, sin sujetarlo con las manos."},
  {p:2, n:"Brindis en Art Scene", d:"Brindis del equipo en Art Scene. Vale chupito, cerveza, refresco o agua."},
  {p:3, n:"Recomendación local", d:"Preguntad a alguien de aquí su bar favorito de Luxemburgo que no sea turístico, grabad su respuesta. Id hasta allí y haceos una foto."},
  {p:3, n:"Karaoke", d:"Todo el equipo canta el estribillo entero de una canción en un bar de karaoke, como Oscar's (Sazio) o Caribou (en frente de casa de Bellon)."},
  {p:2, n:"Cerveza en 5 segundos", d:"Un miembro del equipo se bebe una cerveza en 5 segundos mientras el resto hace la cuenta atrás."},
  {p:2, n:"Cumpleaños feliz", d:"Conseguid que un grupo de desconocidos cante cumpleaños feliz a alguien del equipo."},
  {p:2, n:"Cambio de personalidad", d:"Durante 2 minutos, cada miembro del equipo tiene que imitar a otro miembro del propio equipo. Grabad al menos 30 segundos intentando mantener una conversación completamente normal sin salir del personaje."},
  {p:1, n:"Sorbo sincronizado sin señal", d:"Los 5 dan un trago exactamente a la vez sin que nadie diga «ya». Solo miradas y coordinación."},
  {p:3, n:"¿Dónde están los pollos?", d:"Conseguid que 3 desconocidos distintos digan a cámara: «¿Dónde están los pollos?». Tiene que ser un único vídeo, es decir, tres desconocidos distintos uno detrás de otro."},
  {p:2, n:"Brindis en los ascensores", d:"Brindis grupal dentro del ascensor de Pfaffenthal o Grund, con cara de rooftop de lujo."},
  {p:3, n:"Invitación inesperada", d:"Conseguid que un desconocido os invite a una bebida. Tiene que salir en vídeo aceptando."},
  {p:2, n:"Ronda internacional", d:"Brindad en tres idiomas distintos en menos de 30 segundos. Valen español, francés, alemán, luxemburgués, inglés o inventiva decente."},
  {p:4, n:"Videoclip improvisado", d:"Elegid una canción y grabad un videoclip de mínimo 30 segundos por las calles de Luxemburgo. Los 5 miembros tienen que aparecer y debe incluir al menos una escena a cámara lenta, una coreografía y un solo dramático."},
  {p:4, n:"El trueque imposible", d:"Empezad con un objeto sin valor y haced trueques con desconocidos hasta conseguir algo mejor. Mínimo 3 intercambios grabados."},
  {p:2, n:"Una copa, cinco pajitas", d:"Los cinco miembros del equipo tienen que beber simultáneamente de la misma bebida usando cinco pajitas y acabar con la bebida."},
  {p:3, n:"Cambio de profesión", d:"Convenced a un desconocido durante al menos un minuto de que uno de vosotros tiene una profesión completamente inventada y absurda. El desconocido debe hacerle al menos una pregunta sobre su supuesto trabajo."},
  {p:3, n:"Happy New Year", d:"Comprad doce uvas y que uno de los miembros se las tome mientras los demás hacen el sonido de las campanadas en Place Guillaume."},
  {p:2, n:"Cascada", d:"Todo el equipo bebe en cascada: empieza uno, empieza el siguiente y así sucesivamente. Nadie puede parar de beber hasta que haya empezado el siguiente, y después se para en el mismo orden. Todo en una sola toma."},
  {p:3, n:"Nacionalidades", d:"Conseguid una foto con personas de al menos 5 nacionalidades diferentes. Cada persona tiene que decir su país en vídeo."},
  {p:3, n:"La pedida", d:"Uno del equipo tiene que hacer una pedida de matrimonio falsa a otro miembro en un lugar concurrido. La prueba solo cuenta si al menos un desconocido reacciona o aplaude."},
  {p:3, n:"Chupito ruso", d:"Pedid 5 chupitos: 4 de agua y 1 de tequila. Videollamada a los pollos. Todos los beben sin reaccionar y los pollos tienen que intentar adivinar quién tenía el tequila. Si los pollos fallan, conseguís los puntos."},
  {p:3, n:"Baile internacional", d:"Conseguid que un desconocido os enseñe un paso de baile de su país y que todo el equipo lo repita con él."},
  {p:2, n:"Luxemburgués avanzado", d:"Cada miembro pide usando «Moien» al entrar, «ee Béier wann ech gelift» al pedir y «Merci villmools» al final."},
  {p:3, n:"Foto de familia", d:"Conseguid reunir a mínimo 10 desconocidos para una foto grupal como si todos fuerais una gran familia."},
  {p:3, n:"Carrera de relevos", d:"Comprad una bebida y terminadla entre los 5 miembros como si fuera una carrera de relevos: uno bebe, se la pasa al siguiente y así sucesivamente hasta terminarla. Cada miembro tiene que beber al menos una vez y todo debe quedar grabado en una sola toma."},
  {p:3, n:"La entrevista seria", d:"Entrevistad a un desconocido sobre un tema completamente absurdo como si estuvierais haciendo un trabajo de comunicación para la uni. Mínimo 30 segundos y máxima seriedad."},
  {p:2, n:"Conga relámpago", d:"Montad una conga de mínimo 8 segundos con al menos 2 desconocidos."},
  {p:3, n:"DJ por un minuto", d:"Conseguid que en un bar pongan una canción elegida por vuestro equipo. Tenéis que grabar el momento en el que empieza a sonar y vuestra celebración."},
  {p:3, n:"El objeto misterioso", d:"Conseguid que un desconocido os regale voluntariamente un objeto que lleve encima. Cuanto más inexplicable sea el objeto, mejor. No vale dinero."},
  {p:4, n:"Estrella invitada", d:"Conseguid que un desconocido se una temporalmente al equipo y participe activamente en una de las pruebas de esta lista."},
  {p:3, n:"El nuevo mejor amigo", d:"Conoced a un desconocido y, en menos de 5 minutos, averiguad su nombre, profesión, país de origen, bebida favorita y último destino de vacaciones. Después presentadlo en vídeo como vuestro mejor amigo de toda la vida."},
  {p:3, n:"Llamada al pollo", d:"Conseguid que un desconocido llame por teléfono a uno de los pollos y pregunte seriamente: «¿Dónde estás, pollo?». El equipo no puede hablar durante la llamada."},
  {p:3, n:"El desconocido manda", d:"Preguntad a un desconocido cuál debería ser vuestro siguiente bar y grabad su respuesta. Tenéis que aceptar su decisión, ir hasta allí y mandar una foto desde el sitio."},
  {p:2, n:"La estatua", d:"Los 5 miembros tienen que quedarse completamente inmóviles durante 30 segundos en mitad de una plaza. Si alguien se mueve o se ríe, vuelta a empezar."},
  {p:3, n:"Cambio de ropa", d:"En menos de 2 minutos, los 5 miembros tienen que intercambiar al menos una prenda o accesorio entre ellos y hacerse una foto con el resultado final."}
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
      <div class="name"><span class="idx">${i + 1}</span>${c.n}</div>
      <div class="pill">${c.p} pt${c.p > 1 ? 's' : ''}</div>
    </div>
    <div class="desc">${c.d}</div>
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
