// ============================================================
// GEOMETRÍAS PRECOLOMBINAS // Dossier Artístico & Escénico
// ============================================================

const SCENES_DOSSIER = [
  {
    id: "scene1",
    indexNum: "01",
    tag: "ESCENA 1 · WEBGL 3D",
    title: "Geometric Heartbeat",
    poeticTitle: "El latido de la forma",
    culture: "Cultura Tolita (500 a.C. – 500 d.C.)",
    period: "Desarrollo Regional",
    artifactRef: "GA-7-876-78 · Cabeza y torso zoomorfo de jaguar",
    duration: "3:00 min",
    glyph: "🐆",
    urlFull: "sketchs/scene1/index.html",
    sketchFile: "sketchs/scene1/sketch.js",
    urlDemo: "GP-DEMO2026/agente1-jaguar3d.html",
    statement: "Un jaguar zoomorfo de la cultura Tolita gira en el vacío. No tiene superficie, no tiene peso ni color sólido: es pura estructura —un andamiaje de líneas que pulsa entre dorado y blanco como si la energía vital insuflada en el barro aún circulara por sus vértices. La malla respira mediante una oscilación sinusoidal; tras un minuto despierta la rotación en el eje X, y tras dos en Z, liberándose de la vitrina museística hacia un movimiento cósmico.",
    curatorialDetail: "No se trata de digitalización documental, sino de un ritual de reactivación algorítmica: el barro se convierte en wireframe y la espiral en función matemática.",
    audio: "Samples ceremoniales de percusión ritual del MAAC. Latido grave y resonancia de cerámica hueca sincronizada con la respiración del objeto 3D.",
    audioTag: "Sonic Pi · Pulsación Tolita",
    coreo: "Jean Correa & Darla Alarcón: Entrada lateral con sahumador de palo santo; delimitación física y consagración del espacio escénico.",
    tech: "Motor p5.js (WEBGL) · Modelo 3D normalizado · Renderizado en tiempo real"
  },
  {
    id: "scene2",
    indexNum: "02",
    tag: "ESCENA 2 · SLIDESHOW CINEMATOGRÁFICO",
    title: "Archivo de Mujeres",
    poeticTitle: "Presencia",
    culture: "Valdivia, Machalilla, Chorrera a Manteño (3500 a.C. – 1530 d.C.)",
    period: "Formativo a Integración",
    artifactRef: "47 figuras antropomorfas y Venus de fertilidad",
    duration: "3:55 min",
    glyph: "♀",
    urlFull: "sketchs/scene2/index.html",
    sketchFile: "sketchs/scene2/sketch.js",
    urlDemo: "GP-DEMO2026/agente2-mujeres.html",
    statement: "Cuarenta y siete figuras femeninas de arcilla ocupan, una a una, la totalidad de la pantalla. Cada pieza permanece cuatro segundos: tiempo suficiente para que la mirada la recorra, insuficiente para que la memoria la agote. El zoom suave simula el gesto íntimo de inclinarse ante la vitrina. El recorrido es cronológico: desde las Venus de Valdivia (las más antiguas de América) hasta las figuras Manteño.",
    curatorialDetail: "El crossfade cinematográfico continuo declara que cada figura se disuelve en la siguiente como las generaciones se suceden en la historia. Lo que perdura es el gesto colectivo de modelar la vida.",
    audio: "Voces procesadas de América Orrala y su nieta: capas de susurros, respiraciones y cantos tradicionales algorítmicamente espaciados.",
    audioTag: "Sonic Pi · Archivo Vocal Ancestral",
    coreo: "Solo Darla Alarcón: Desplazamiento contemplativo y despedida del tronco y la vasija primordial.",
    tech: "p5.js 2D · Interpolación continua de 47 imágenes de alta resolución"
  },
  {
    id: "scene3a",
    indexNum: "03a",
    tag: "ESCENA 3a · RETRATO POR PARTÍCULAS",
    title: "América Orrala",
    poeticTitle: "Emergencia",
    culture: "Comuna Ancestral Valdivia (Santa Elena)",
    period: "Memoria Viva Contemporánea",
    artifactRef: "Retrato generativo de la Maestra Alfarera y Portadora de Saberes",
    duration: "3:00 min (Continua)",
    glyph: "🕸",
    urlFull: "sketchs/scene3-1/index.html",
    sketchFile: "sketchs/scene3-1/sketch.js",
    urlDemo: "GP-DEMO2026/agente3a-americaorrala.html",
    statement: "Un retrato que no existe al inicio: solo una pantalla negra y cien agentes algorítmicos que despiertan. Cada agente es un punto que traza filamentos mientras explora el lienzo sin saber qué está dibujando. Al detectar los niveles de luz de una fotografía invisible de América Orrala, giran y tejen su rostro desde el ruido, revelando la memoria viva de la alfarería costera.",
    curatorialDetail: "América Orrala no aparece de golpe, sino por capas e insistencia, evocando la forma orgánica en que la memoria tradicional se transmite a través del tiempo.",
    audio: "Cantos procesados de las hijas de América Orrala; texturas vocales que se espesan en paralelo a la densidad de las líneas.",
    audioTag: "Sonic Pi · Cantos de Tejedora",
    coreo: "Solo Jean Correa: Acción corporal con red tradicional de pesca y ejecución de quena en vivo.",
    tech: "p5.js 2D · Sistema de 100 agentes con muestreo estocástico de brillo"
  },
  {
    id: "scene3b",
    indexNum: "03b",
    tag: "ESCENA 3b · TRÁNSITO RITUAL",
    title: "Vasijas Funerarias",
    poeticTitle: "Tránsito",
    culture: "Jama-Coaque, Manteño, Milagro-Quevedo y Tolita",
    period: "Desarrollo Regional a Integración",
    artifactRef: "20 urnas funerarias y vasijas ceremoniales de entierro",
    duration: "1:40 min / 4:00 min",
    glyph: "🏺",
    urlFull: "sketchs/scene3-2/index.html",
    sketchFile: "sketchs/scene3-2/sketch.js",
    urlDemo: "GP-DEMO2026/agente3b-vasijas.html",
    statement: "Veinte vasijas funerarias flotan en el vacío negro con cadencia solemne. Son contenedores de tránsito: objetos creados para acompañar al cuerpo en su viaje a la otra orilla de la existencia. Las vasijas emergen de la oscuridad, permanecen para ser contempladas y se disuelven suavemente, transformando la muerte en metamorfosis espiritual.",
    curatorialDetail: "Cuatro culturas unidas por la misma devoción al descanso y la memoria: la vasija no contenía solo ofrendas, contenía el tránsito sagrado.",
    audio: "Ocarinas y silbatos zoomorfos del archivo del MAAC; registro grave de cerámica hueca y silencios contemplativos.",
    audioTag: "Sonic Pi · Silbatos Mortuorios MAAC",
    coreo: "Solo Jean Correa: Recogida ceremonial de las ofrendas y traslado de la urna mortuoria.",
    tech: "p5.js 2D · Transiciones suaves de escala y opacidad fotograma a fotograma"
  },
  {
    id: "scene4",
    indexNum: "04",
    tag: "ESCENA 4 · ABSTRACCIÓN CINÉTICA",
    title: "Cosmovisión",
    poeticTitle: "Lo que aparece y desaparece",
    culture: "Simbología geométrica abstracta del Litoral",
    period: "Abstracción Cosmogónica",
    artifactRef: "Sellos planos, cilindros y patrones geométricos ceremoniales",
    duration: "3:00 min",
    glyph: "◬",
    urlFull: "sketchs/scene4/index.html",
    sketchFile: "sketchs/scene4/sketch.js",
    urlDemo: "GP-DEMO2026/agente4-cosmovision.html",
    statement: "Sobre un espacio negro con textura de grano fotoeléctrico analógico —generado píxel a píxel como ruido estático—, 28 entidades geométricas y 20 líneas dinámicas nacen, rotan y se desvanecen con curvas de easing orgánicas. Formas concéntricas que evocan el principio precolombino según el cual todo ser vivo contiene a otro en su interior.",
    curatorialDetail: "Una reducción poética al ciclo elemental del universo: el acto de aparecer, existir con gracia en el espacio y ceder el lugar a la siguiente forma.",
    audio: "Clicks y percusiones mínimas procesadas del MAAC; pulsos electrónicos sutiles y texturas de espacio y glitch.",
    audioTag: "Sonic Pi · Geometría Estocástica",
    coreo: "Dúo Jean Correa & Darla Alarcón: Diálogo corporal sincopado con las líneas y constelaciones proyectadas.",
    tech: "p5.js Canvas · Generador de grano por array de píxeles · Curvas cúbicas de easing"
  },
  {
    id: "scene5",
    indexNum: "05",
    tag: "ESCENA 5 · MULTICAPA OCEÁNICA",
    title: "El Agua como Vínculo",
    poeticTitle: "Corriente",
    culture: "Manteño-Huancavilca · Confederación de Navegantes",
    period: "Integración (Costa del Pacífico)",
    artifactRef: "Redes de navegación y comercio ceremonial de concha Spondylus",
    duration: "3:06 min",
    glyph: "≋",
    urlFull: "sketchs/scene5/index.html",
    sketchFile: "sketchs/scene5/sketch.js",
    urlDemo: "GP-DEMO2026/agente5-mar.html",
    statement: "El Pacífico ecuatoriano nunca fue una frontera: fue el corazón vinculante. Siete capas de olas geométricas con quiebres angulares ondean en azul abisal, mientras una red de 22 nodos luminosos pulsa formando constelaciones efímeras y 120 partículas marinas derivan como estrellas sumergidas.",
    curatorialDetail: "El agua entendida no como recurso mercantil, sino como territorio vivo, ruta sagrada del Spondylus y memoria que une a todos los pueblos.",
    audio: "Flautas de cerámica del MAAC superpuestas con coros polifónicos de las mujeres de Valdivia y frecuencias bajas oceánicas en crescendo.",
    audioTag: "Sonic Pi · Marea & Voces Manteñas",
    coreo: "Solo Darla Alarcón: La Danza del Pez; ondulación continua de brazos y torso invocando el oleaje ancestral.",
    tech: "p5.js 2D · Sistema de ondas armónicas sinusoidales, redes de Delaunay y partículas"
  }
];

let currentSceneIndex = 0;
let currentMode = 'full'; // 'full' (16:9) o 'demo' (9:16)
let isPaused = true;
let isManuallyPaused = true; // Inicia pausado por defecto
let isViewerInView = false;
let hasLoadedInitialScene = false;

// Elementos del DOM
let stageFrame, stageVideo, stageWrapper, loadingOverlay, pausedOverlay;
let navTabsContainer, btnTogglePlayback, ecoIndicator;

document.addEventListener('DOMContentLoaded', () => {
  stageFrame = document.getElementById('stageFrame');
  stageVideo = document.getElementById('stageVideo');
  stageWrapper = document.getElementById('stageWrapper');
  loadingOverlay = document.getElementById('loadingOverlay');
  pausedOverlay = document.getElementById('pausedOverlay');
  navTabsContainer = document.getElementById('sceneNavTabs');
  btnTogglePlayback = document.getElementById('btnTogglePlayback');
  ecoIndicator = document.getElementById('ecoIndicator');

  renderSceneTabs();
  updateCuratorialMetadata(0);
  updatePlaybackUI();
  setupPerformanceObserver();
  setupKeyboardShortcuts();
});

// Renderizar la barra de navegación del dossier (UN SOLO selector intuitivo)
function renderSceneTabs() {
  if (!navTabsContainer) return;
  navTabsContainer.innerHTML = '';

  SCENES_DOSSIER.forEach((scene, index) => {
    const btn = document.createElement('button');
    btn.className = `dossier-tab-btn ${index === currentSceneIndex ? 'active' : ''}`;
    btn.id = `dossierTab-${index}`;
    btn.onclick = () => {
      loadScene(index);
      if (isPaused) resumePlayback(true);
    };
    btn.innerHTML = `
      <span class="tab-glyph">${scene.glyph}</span>
      <span class="tab-index">${scene.indexNum}</span>
      <span class="tab-title">${scene.title}</span>
    `;
    navTabsContainer.appendChild(btn);
  });
}

// Actualizar solo textos y metadatos sin forzar la carga pesada inmediata del iframe
function updateCuratorialMetadata(index) {
  currentSceneIndex = index;
  const scene = SCENES_DOSSIER[index];

  document.querySelectorAll('.dossier-tab-btn').forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '';
  };

  // Cabecera del visor
  setText('viewIndexBadge', scene.indexNum);
  setText('viewTagBadge', scene.tag);
  setText('viewMainTitle', scene.title);
  setText('viewPoeticSubtitle', `«${scene.poeticTitle}»`);
  setText('viewCultureBadge', scene.culture);
  setText('viewDurationBadge', scene.duration);

  // Ficha curatorial
  setText('dossierStatement', scene.statement);
  setText('dossierDetail', scene.curatorialDetail);
  setText('dossierArtifact', scene.artifactRef);
  setText('dossierAudio', scene.audio);
  setText('dossierAudioTag', scene.audioTag);
  setText('dossierCoreo', scene.coreo);
  setText('dossierTech', scene.tech);
  setText('dossierSourcePath', scene.sketchFile);

  const targetUrl = scene.urlFull;
  const btnDirect = document.getElementById('btnOpenDirect');
  if (btnDirect) btnDirect.href = targetUrl;
}

// Cargar una escena en el canvas/video
function loadScene(index) {
  updateCuratorialMetadata(index);
  hasLoadedInitialScene = true;
  isPaused = false;
  isManuallyPaused = false;
  if (pausedOverlay) pausedOverlay.classList.remove('visible');
  updatePlaybackUI();

  const scene = SCENES_DOSSIER[index];
  if (stageVideo) {
    stageVideo.pause();
    stageVideo.style.display = 'none';
  }
  stageFrame.style.display = 'block';

  showLoading();
  stageFrame.src = scene.urlFull;
  stageFrame.onload = () => hideLoading();
}

// Pausar ejecución (libera 100% de CPU y GPU)
function pausePlayback(manual = false) {
  isPaused = true;
  if (manual) isManuallyPaused = true;

  // Notificar al sketch p5.js que pause su bucle draw()
  try {
    if (stageFrame && stageFrame.contentWindow) {
      stageFrame.contentWindow.postMessage('pause', '*');
    }
  } catch (e) {}

  if (stageVideo) {
    stageVideo.pause();
  }

  if (manual && pausedOverlay) {
    pausedOverlay.classList.add('visible');
  }

  updatePlaybackUI();
}

// Reanudar ejecución fluida
function resumePlayback(manual = false) {
  if (manual) isManuallyPaused = false;
  isPaused = false;

  if (pausedOverlay) {
    pausedOverlay.classList.remove('visible');
  }

  // Si aún no se había cargado la escena inicial (carga diferida/on-demand), cargarla ahora
  if (!hasLoadedInitialScene || !stageFrame.src || stageFrame.src === 'about:blank' || stageFrame.src === window.location.href) {
    loadScene(currentSceneIndex);
    return;
  }

  // Notificar al sketch p5.js que reanude el bucle draw()
  try {
    if (stageFrame && stageFrame.contentWindow) {
      stageFrame.contentWindow.postMessage('resume', '*');
    }
  } catch (e) {}

  const scene = SCENES_DOSSIER[currentSceneIndex];
  if (scene && scene.isVideo && stageVideo) {
    stageVideo.play().catch(() => {});
  }

  updatePlaybackUI();
}

// Alternar entre pausa y reproducción
function togglePlayback() {
  if (isPaused) {
    resumePlayback(true);
  } else {
    pausePlayback(true);
  }
}

// Actualizar la interfaz de controles y badges según el estado
function updatePlaybackUI() {
  if (btnTogglePlayback) {
    if (!hasLoadedInitialScene) {
      btnTogglePlayback.innerHTML = '▶ Iniciar';
      btnTogglePlayback.title = 'Iniciar laboratorio en vivo (Espacio)';
    } else {
      btnTogglePlayback.innerHTML = isPaused ? '▶ Reanudar' : '⏸ Pausar';
      btnTogglePlayback.title = isPaused ? 'Reanudar interactivo (Espacio)' : 'Pausar sketch para ahorrar CPU/GPU (Espacio)';
    }
  }

  if (ecoIndicator) {
    if (isPaused) {
      if (!hasLoadedInitialScene) {
        ecoIndicator.textContent = '⏸ En pausa';
      } else {
        ecoIndicator.textContent = isManuallyPaused ? '⏸ En pausa (GPU libre)' : '⏸ Suspendido fuera de vista';
      }
      ecoIndicator.classList.add('paused');
    } else {
      ecoIndicator.textContent = '● En vivo';
      ecoIndicator.classList.remove('paused');
    }
  }
}

// Observador inteligente: Suspende los sketchs cuando el usuario se aleja del visor
function setupPerformanceObserver() {
  const viewerSection = document.getElementById('obra-en-vivo');
  if (!viewerSection || !window.IntersectionObserver) {
    // Si no hay soporte, cargar escena 0 directamente
    loadScene(0);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isViewerInView = true;
        // Si no está pausado manualmente, reanudar o inicializar
        if (!isManuallyPaused) {
          resumePlayback(false);
        }
      } else {
        isViewerInView = false;
        // Cuando no esté a la vista, pausar para ahorrar batería y recursos
        if (hasLoadedInitialScene && !isPaused) {
          pausePlayback(false);
        }
      }
    });
  }, { threshold: 0.15 });

  observer.observe(viewerSection);
}

function showLoading() {
  if (loadingOverlay) loadingOverlay.classList.add('visible');
}

function hideLoading() {
  if (loadingOverlay) {
    setTimeout(() => loadingOverlay.classList.remove('visible'), 250);
  }
}

function reloadScene() {
  const scene = SCENES_DOSSIER[currentSceneIndex];
  showLoading();
  const targetUrl = scene.urlFull;
  stageFrame.src = targetUrl + (targetUrl.includes('?') ? '&' : '?') + 'reload=' + Date.now();
  stageFrame.onload = () => hideLoading();
}

function prevScene() {
  const prevIdx = (currentSceneIndex - 1 + SCENES_DOSSIER.length) % SCENES_DOSSIER.length;
  loadScene(prevIdx);
}

function nextScene() {
  const nextIdx = (currentSceneIndex + 1) % SCENES_DOSSIER.length;
  loadScene(nextIdx);
}

function toggleFullscreen() {
  if (!stageWrapper) return;
  stageWrapper.classList.toggle('fullscreen-mode');
  if (stageWrapper.classList.contains('fullscreen-mode')) {
    if (stageWrapper.requestFullscreen) {
      stageWrapper.requestFullscreen().catch(() => {});
    }
  } else {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && stageWrapper) {
    stageWrapper.classList.remove('fullscreen-mode');
  }
});

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -70;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (id === 'obra-en-vivo') {
      resumePlayback(true);
    }
  }
}

function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key >= '1' && e.key <= '5') {
      const idx = parseInt(e.key) - 1;
      if (idx < SCENES_DOSSIER.length) loadScene(idx);
    } else if (e.key === 'ArrowRight') {
      nextScene();
    } else if (e.key === 'ArrowLeft') {
      prevScene();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'r' || e.key === 'R') {
      reloadScene();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayback();
    }
  });
}
