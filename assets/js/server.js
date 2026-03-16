/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const MEMBERS = [
  { id:1,  name:"Abdurrahman",            role:"Anggota Aktif",          tag:"Drama",      rating:"99%", photo:"assets/img/abdurahman.png",    ig:"https://instagram.com/tifara_untara25" },
  { id:2,  name:"Aditya Hartono",         role:"PJ Dasar Pemrograman",   tag:"Tech",       rating:"99%", photo:"assets/img/aditya.png",        ig:"https://instagram.com/tifara_untara25" },
  { id:3,  name:"Ahmad Fadhlan Amin",     role:"Anggota Aktif",          tag:"Comedy",     rating:"99%", photo:"assets/img/fadhlan.png",       ig:"https://instagram.com/dadidudedenn" },
  { id:4,  name:"Alya Rosiana Rahayu",    role:"PJ Teknologi Platform",  tag:"Tech",       rating:"99%", photo:"assets/img/alya.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:5,  name:"Anaz Urbanangta",        role:"PJ Fisika Dasar",        tag:"Sci-Fi",     rating:"99%", photo:"assets/img/anaz.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:6,  name:"Arvenal",                role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/arvenal.png",       ig:"https://instagram.com/tifara_untara25" },
  { id:7,  name:"Attha Mauluna I. P.",    role:"Bendahara",              tag:"Thriller",   rating:"99%", photo:"assets/img/luna.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:8,  name:"Aulia Nur Ramadhani",    role:"Anggota Aktif",          tag:"Romance",    rating:"99%", photo:"assets/img/aulia.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:9,  name:"Chandra Elisa",          role:"PJ Bahasa Indonesia",    tag:"Drama",      rating:"99%", photo:"assets/img/chandra.png",       ig:"https://instagram.com/tifara_untara25" },
  { id:10, name:"Dede Juliansyah",        role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/dejul.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:11, name:"Dhava Adiyuda P.",       role:"Anggota Aktif",          tag:"Sci-Fi",     rating:"99%", photo:"assets/img/dhava.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:12, name:"Dimas Eka Saputra",      role:"Anggota Aktif",          tag:"Drama",      rating:"99%", photo:"assets/img/dimas-eka.png",     ig:"https://instagram.com/tifara_untara25" },
  { id:13, name:"Dimas Maulaya S.",       role:"Anggota Aktif",          tag:"Comedy",     rating:"99%", photo:"assets/img/dimas-maulaya.png", ig:"https://instagram.com/tifara_untara25" },
  { id:14, name:"Dini Fitriani",          role:"PJ Public Speaking",     tag:"Drama",      rating:"99%", photo:"assets/img/dini.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:15, name:"Dio Adha",               role:"Wakil Ketua",            tag:"Action",     rating:"99%", photo:"assets/img/dio.png",           ig:"https://instagram.com/tifara_untara25" },
  { id:16, name:"Elis Amelia Contesa",    role:"Ketua Kelas",            tag:"Leadership", rating:"99%", photo:"assets/img/elis.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:17, name:"Fadly Irfansyah M.",     role:"PJ Aljabar Linear",      tag:"Sci-Fi",     rating:"99%", photo:"assets/img/ipan.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:18, name:"Fahmi Rizqy F.",         role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/fahmi.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:19, name:"Fathahillah Zakky",      role:"Anggota Aktif",          tag:"Mystery",    rating:"99%", photo:"assets/img/user.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:20, name:"Firsyha",                role:"Sekretaris",             tag:"Drama",      rating:"99%", photo:"assets/img/ica.png",           ig:"https://instagram.com/tifara_untara25" },
  { id:21, name:"Intan Aulia M.",         role:"Anggota Aktif",          tag:"Romance",    rating:"99%", photo:"assets/img/intan.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:22, name:"Keisya Cintya Putri",    role:"Anggota Aktif",          tag:"Romance",    rating:"99%", photo:"assets/img/keisya.png",        ig:"https://instagram.com/tifara_untara25" },
  { id:23, name:"Lia Noviana",            role:"Anggota Aktif",          tag:"Drama",      rating:"99%", photo:"assets/img/lia.png",           ig:"https://instagram.com/tifara_untara25" },
  { id:24, name:"Rian Permana",           role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/rian.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:25, name:"Muhamad Bilal Islami",   role:"Anggota Aktif",          tag:"Thriller",   rating:"99%", photo:"assets/img/bilal.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:26, name:"Wahyu Putra Raihan",     role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/wahyu.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:27, name:"M. Nurul Furqon",        role:"PJ Agama",               tag:"Spiritual",  rating:"99%", photo:"assets/img/furqon.png",        ig:"https://instagram.com/tifara_untara25" },
  { id:28, name:"Naufal Syauqi",          role:"Anggota Aktif",          tag:"Mystery",    rating:"99%", photo:"assets/img/nopal.png",         ig:"https://instagram.com/tifara_untara25" },
  { id:29, name:"Rangga Bachrunisman",    role:"Anggota Aktif",          tag:"Action",     rating:"99%", photo:"assets/img/rangga.png",        ig:"https://instagram.com/tifara_untara25" },
  { id:30, name:"Saefullah",              role:"Anggota Aktif",          tag:"Comedy",     rating:"99%", photo:"assets/img/ipul.png",          ig:"https://instagram.com/tifara_untara25" },
  { id:31, name:"Samuel",                 role:"Anggota Aktif",          tag:"Drama",      rating:"99%", photo:"assets/img/samuel.png",        ig:"https://instagram.com/tifara_untara25" },
  { id:32, name:"Zahra Hikayatul Aulia",  role:"Anggota Aktif",          tag:"Romance",    rating:"99%", photo:"assets/img/zahra.png",         ig:"https://instagram.com/tifara_untara25" },
];

const STRUCTURE = [
  { role:"Wali Kelas",           name:"Saryani, S.Kom., M.TI",       level:0, icon:"👑" },
  { role:"Ketua Kelas",          name:"Elis Amelia Contesa",          level:1, icon:"⭐" },
  { role:"Wakil Ketua",          name:"Dio Adha",                     level:1, icon:"⭐" },
  { role:"Sekretaris",           name:"Firsyha",                      level:2, icon:"📝" },
  { role:"Bendahara",            name:"Attha Mauluna Isnainy Putrie", level:2, icon:"💰" },
  { role:"PJ Agama",             name:"Muhammad Nurul Furqon",        level:3, icon:"🕌" },
  { role:"PJ Aljabar Linear",    name:"Fadly Irfansyah Mutaqin",      level:3, icon:"📐" },
  { role:"PJ Fisika Dasar",      name:"Anaz Urbanangta",              level:3, icon:"⚛️" },
  { role:"PJ Dasar Pemrograman", name:"Aditya Hartono",               level:3, icon:"💻" },
  { role:"PJ Bahasa Indonesia",  name:"Chandra Elisa",                level:3, icon:"📚" },
  { role:"PJ Public Speaking",   name:"Dini Fitriani",                level:3, icon:"🎤" },
  { role:"PJ Teknologi Platform",name:"Alya Rosiana Rahayu",          level:3, icon:"🖥️" },
];

const ACHIEVEMENTS = [
//   { year:"2025", title:"JUARA 1", event:"Lomba Disakiti", category:"Best Performance",      icon:"🏆" },
//   { year:"2024", title:"JUARA 1", event:"Lomba Disakiti", category:"Outstanding Achievement", icon:"🥇" },
];

const TAG_COLORS = {
  Drama:"#e50914", Tech:"#0080ff", Comedy:"#ff9900", "Sci-Fi":"#9b59b6",
  Action:"#e67e22", Thriller:"#c0392b", Romance:"#e91e8c", Mystery:"#16a085",
  Spiritual:"#27ae60", Leadership:"#f39c12"
};

const GRADIENTS = [
  "linear-gradient(160deg,#1a0000,#8b0000)",
  "linear-gradient(160deg,#000d1a,#003380)",
  "linear-gradient(160deg,#0d001a,#4a0080)",
  "linear-gradient(160deg,#001a0d,#005c2e)",
  "linear-gradient(160deg,#1a1000,#7a4f00)",
  "linear-gradient(160deg,#1a000d,#800040)",
  "linear-gradient(160deg,#000f1a,#00416a)",
  "linear-gradient(160deg,#0a0a00,#3d3d00)",
];

/* ═══════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════ */
function grad(id)      { return GRADIENTS[id % GRADIENTS.length]; }
function initials(n)   { return n.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase(); }
function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); }

/* ═══════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  // Scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Active section highlight
  const sections = ["home","tentang","struktur","anggota","prestasi"];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll(".nav-links button").forEach(b => {
          b.classList.toggle("active", b.dataset.sec === e.target.id);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn  = document.querySelector(".nav-ham");
  const open = menu.classList.toggle("open");
  btn.textContent = open ? "✕" : "☰";
}

/* ═══════════════════════════════════════════════════
   HERO GRID
═══════════════════════════════════════════════════ */
function buildHeroGrid() {
  const container = document.getElementById("heroGrid");
  MEMBERS.slice(0, 12).forEach(m => {
    const div = document.createElement("div");
    div.className = "hero-thumb";
    div.style.background = grad(m.id);

    if (m.photo) {
      div.innerHTML = `
        <img
          src="${m.photo}"
          alt="${m.name}"
          class="hero-thumb-photo"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
        />
        <span class="hero-thumb-initials" style="display:none">${initials(m.name)}</span>`;
    } else {
      div.textContent = initials(m.name);
    }

    container.appendChild(div);
  });
}

/* ═══════════════════════════════════════════════════
   STRUCTURE
═══════════════════════════════════════════════════ */
function buildStructure() {
  const container   = document.getElementById("structureContainer");
  const levelLabels = ["Executive Producer","Main Cast","Supporting Cast","Special Roles"];
  const levelColors = ["#e50914","#f5a623","#46d369","rgba(255,255,255,0.5)"];

  // Section header
  const header = document.createElement("div");
  header.innerHTML = `
    <div class="section-header">
      <div class="section-bar"></div>
      <h2 class="section-title">CAST & CREW</h2>
      <span class="section-sub">— Struktur Kelas</span>
    </div>`;
  container.appendChild(header);

  [0,1,2,3].forEach(li => {
    const items = STRUCTURE.filter(s => s.level === li);
    const wrap  = document.createElement("div");

    const label = document.createElement("div");
    label.className = "level-label";
    label.style.color = levelColors[li];
    label.textContent = levelLabels[li];
    wrap.appendChild(label);

    const row = document.createElement("div");
    row.className = "level-row";

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "cast-card";
      card.style.border = li === 0
        ? "1px solid rgba(229,9,20,0.3)"
        : "1px solid rgba(255,255,255,0.06)";
      card.innerHTML = `
        <div class="cast-avatar"
             style="background:${li===0?'rgba(229,9,20,0.2)':'rgba(255,255,255,0.06)'};
                    border:1px solid ${levelColors[li]}44">
          ${item.icon}
        </div>
        <div>
          <div class="cast-name">${item.name}</div>
          <div class="cast-role" style="color:${levelColors[li]}">${item.role}</div>
        </div>`;
      row.appendChild(card);
    });

    wrap.appendChild(row);
    container.appendChild(wrap);
  });
}

/* ═══════════════════════════════════════════════════
   MEMBER CARD
═══════════════════════════════════════════════════ */
function createMemberCard(m) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.innerHTML = `
    <div class="card-poster" style="background:${grad(m.id)}">
      <div class="card-poster-inner">
        ${m.photo
          ? `<img
               src="${m.photo}"
               alt="${m.name}"
               class="card-photo"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
             />
             <div class="card-name-small" style="margin-top:6px">${m.name}</div>
             <div class="card-fallback" style="display:none">
               <div class="card-initials">${initials(m.name)}</div>
               <div class="card-name-small">${m.name}</div>
             </div>`
          : `<div class="card-initials">${initials(m.name)}</div>
             <div class="card-name-small">${m.name}</div>`
        }
      </div>
      <div class="card-tag-badge" style="background:${TAG_COLORS[m.tag]||'#e50914'}">${m.tag}</div>
      <div class="card-rating">${m.rating}</div>
    </div>
    <div class="card-hover-panel">
    <div class="panel-actions">
        <button class="panel-btn-play" onclick="openPhotoModal('${m.photo}','${m.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="black"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
        ${m.ig
            ? `<a href="${m.ig}" target="_blank" rel="noreferrer" class="panel-btn-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
            </a>`
            : `<button class="panel-btn-icon" disabled style="opacity:0.3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
            </button>`
        }
        <button class="panel-btn-more">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <polyline points="6,9 12,15 18,9"/>
            </svg>
        </button>
    </div>
      <div class="panel-name">${m.name}</div>
      <div class="panel-meta">
        <span class="panel-match">${m.rating} Match</span>
        <span class="panel-year">2026</span>
      </div>
      <div class="panel-role">${m.role}</div>
      <div class="panel-tags">
        <span class="panel-tag-item">${m.tag}</span>
        <span class="panel-tag-item" style="margin-left:4px;color:rgba(255,255,255,0.2)">•</span>
        <span class="panel-tag-item" style="margin-left:4px">1 Season</span>
      </div>
    </div>`;
  return card;
}

/* ═══════════════════════════════════════════════════
   ROW
═══════════════════════════════════════════════════ */
function createRow(title, members, badge) {
  const wrap = document.createElement("div");
  wrap.className = "row-wrap";

  let expanded = false;

  // Header
  const rowHeader = document.createElement("div");
  rowHeader.className = "row-header";
  rowHeader.innerHTML = `
    <span class="row-title">${title}</span>
    ${badge ? `<span class="row-badge">${badge}</span>` : ""}
    <span class="row-see-all">Lihat Semua ›</span>`;
  wrap.appendChild(rowHeader);

  // Scroll buttons (only visible in scroll mode)
  const btnLeft  = document.createElement("button");
  const btnRight = document.createElement("button");
  btnLeft.className  = "row-scroll-btn left";
  btnRight.className = "row-scroll-btn right";
  btnLeft.textContent  = "‹";
  btnRight.textContent = "›";
  btnLeft.style.display = "none";
  wrap.appendChild(btnLeft);
  wrap.appendChild(btnRight);

  // Card list (horizontal scroll by default)
  const list = document.createElement("div");
  list.className = "row-list";
  members.forEach(m => list.appendChild(createMemberCard(m)));
  wrap.appendChild(list);

  // Scroll arrows logic
  btnLeft.addEventListener("click",  () => list.scrollBy({ left: -600, behavior:"smooth" }));
  btnRight.addEventListener("click", () => list.scrollBy({ left:  600, behavior:"smooth" }));
  list.addEventListener("scroll", () => {
    if (expanded) return;
    btnLeft.style.display  = list.scrollLeft > 10 ? "block" : "none";
    btnRight.style.display = list.scrollLeft + list.clientWidth < list.scrollWidth - 10 ? "block" : "none";
  });

  // "Lihat Semua" toggle expand
  const seeAll = rowHeader.querySelector(".row-see-all");
  seeAll.addEventListener("click", () => {
    expanded = !expanded;
    if (expanded) {
      list.classList.add("row-list--grid");
      btnLeft.style.display  = "none";
      btnRight.style.display = "none";
      seeAll.textContent = "Tutup ✕";
    } else {
      list.classList.remove("row-list--grid");
      seeAll.textContent = "Lihat Semua ›";
      // re-check arrows
      btnRight.style.display = list.scrollWidth > list.clientWidth ? "block" : "none";
    }
  });

  return wrap;
}

/* ═══════════════════════════════════════════════════
   MEMBERS SECTION
═══════════════════════════════════════════════════ */
function buildMembers() {
  const container = document.getElementById("rowsContainer");

  container.appendChild(createRow("📺 SEMUA ANGGOTA", MEMBERS));

  const cats = ["Drama","Action","Comedy","Romance","Tech","Sci-Fi","Thriller","Mystery","Spiritual","Leadership"];
  cats.forEach(cat => {
    const list = MEMBERS.filter(m => m.tag === cat);
    if (list.length > 0) container.appendChild(createRow(`🎬 ${cat.toUpperCase()}`, list));
  });
}

/* ═══════════════════════════════════════════════════
   ACHIEVEMENTS
═══════════════════════════════════════════════════ */
function buildAchievements() {
  const grid = document.getElementById("achievGrid");

  ACHIEVEMENTS.forEach(a => {
    const card = document.createElement("div");
    card.className = "achiev-card";
    card.innerHTML = `
      <div class="achiev-top">
        <div class="achiev-top-glow"></div>
        <div class="achiev-icon">${a.icon}</div>
        <div class="achiev-year">${a.year}</div>
      </div>
      <div class="achiev-body">
        <div class="achiev-cat">${a.category}</div>
        <div class="achiev-title">${a.title}</div>
        <div class="achiev-event">${a.event}</div>
        <div class="achiev-actions">
          <button class="achiev-btn-play">PLAY</button>
          <button class="achiev-btn-add">+</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Coming soon card
  const soon = document.createElement("div");
  soon.className = "achiev-soon";
  soon.innerHTML = `
    <div class="achiev-soon-icon">🎯</div>
    <div class="achiev-soon-text">COMING SOON</div>
    <div class="achiev-soon-sub">Prestasi baru sedang dalam perjalanan...</div>`;
  grid.appendChild(soon);
}

/* ═══════════════════════════════════════════════════
   PHOTO MODAL
═══════════════════════════════════════════════════ */
function openPhotoModal(photo, name) {
  // buat modal kalau belum ada
  let modal = document.getElementById("photoModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "photoModal";
    modal.innerHTML = `
      <div id="photoModalBackdrop"></div>
      <div id="photoModalBox">
        <button id="photoModalClose">✕</button>
        <img id="photoModalImg" src="" alt=""/>
        <div id="photoModalName"></div>
      </div>`;
    document.body.appendChild(modal);
    document.getElementById("photoModalBackdrop").addEventListener("click", closePhotoModal);
    document.getElementById("photoModalClose").addEventListener("click", closePhotoModal);
  }

  document.getElementById("photoModalImg").src = photo;
  document.getElementById("photoModalName").textContent = name;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePhotoModal() {
  const modal = document.getElementById("photoModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  buildHeroGrid();
  buildStructure();
  buildMembers();
  buildAchievements();
});
