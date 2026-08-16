document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Base de données des projets, groupée par catégorie ---
    // Pour ajouter un projet : copier un bloc { ... } et le coller dans le bon tableau `items`.
    const categories = {
        ia: {
            accent: 'linear-gradient(90deg, #667eea, #764ba2)',
            glow: 'rgba(118, 75, 162, 0.4)',
            items: [
                {
                    icon: '🧠',
                    title: 'Librechat_Jarvis',
                    pitch: "Une équipe de 5 agents IA orchestrés (Brain, Planificateur, Rédacteur, Testeur, Vérificateur), conçue et pilotée pour transformer une demande floue en mission exécutable — avec un modèle, un rôle et des outils adaptés à chaque agent.",
                    stack: ['LibreChat (Node.js)', 'OpenRouter', 'MongoDB', 'MCP (filesystem + Notion)', 'Docker'],
                    result: '-63% de coût sur une mission comparable, -62% sur l’élagage de contexte (mesuré en production).',
                    role: 'Architecture de l’équipe d’agents, arbitrages de sécurité et de coût, pilotage de l’optimisation.',
                    link: null
                },
                {
                    icon: '🧠',
                    title: 'Big Bertha',
                    pitch: "Un orchestrateur à deux phases (routing puis synthèse) avec base de connaissance vectorielle (RAG), conçu comme produit réutilisable pour des entreprises.",
                    stack: ['FastAPI (Python)', 'ChromaDB', 'OpenRouter'],
                    result: 'Testé en charge sur 14 jours simulés : 0 échec de job, 0 fallback de routing.',
                    role: 'Conception de l’orchestrateur, des prompts système, du routing par coût/performance.',
                    link: null
                },
                {
                    icon: '🧠',
                    title: 'Brain',
                    pitch: "Un orchestrateur de cadrage à 4 agents qui transforme une idée floue en prompt exécutable pour Claude Code — utilisé quotidiennement dans mon propre travail.",
                    stack: ['Python', 'SQLite'],
                    result: '32 missions réelles traitées en v1.',
                    role: 'Définition de la méthode, choix d’architecture.',
                    image: 'projects/brain.png',
                    link: { url: 'https://github.com/Kinder2149/Brain', label: 'Voir le repo' }
                }
            ]
        },
        apps: {
            accent: 'linear-gradient(90deg, #0f9d58, #00c9a7)',
            glow: 'rgba(15, 157, 88, 0.4)',
            items: [
                {
                    icon: '🥏',
                    title: 'Ultimate-frisbee-manager',
                    pitch: "Une application de gestion complète pour un club de sport, en production réelle avec des utilisateurs actifs — la preuve que la méthode « cadrage + exécution pilotée par IA » tient à l’échelle et dans la durée.",
                    stack: ['Angular 17', 'Node.js / Express', 'PostgreSQL (Supabase) + Prisma', 'Cloudinary', 'Vercel'],
                    result: '~10 utilisateurs actifs réels, en production.',
                    role: 'Spécification fonctionnelle, arbitrages de stack, pilotage du développement piloté à 100% par IA, validation à chaque étape.',
                    image: 'projects/ultimate-frisbee-manager.png',
                    link: { url: 'https://ultimate-frisbee-manager.vercel.app', label: 'Voir l’application' }
                },
                {
                    icon: '📎',
                    title: 'ClipFactory Empire',
                    pitch: "Devenez le magnat du trombone ! Commencez avec une simple machine et développez votre empire en produisant, vendant et améliorant vos trombones. Gérez vos ressources et dominez le marché.",
                    stack: ['Flutter', 'Firebase'],
                    result: null,
                    role: null,
                    status: 'Publié sur le Play Store',
                    image: 'projects/clipfactory-empire.png',
                    gallery: ['paper-clip-1.jpg', 'paper-clip-2.jpg', 'paper-clip-3.png'],
                    link: { url: 'https://play.google.com/store/apps/details?id=com.kinder2149.paperclip2', label: 'Voir sur le Play Store' }
                },
                {
                    icon: '🖇️',
                    title: 'PaperClip2',
                    pitch: "Un jeu mobile « idle » (production/vente de trombones) avec sauvegarde cloud synchronisée entre appareils.",
                    stack: ['Flutter', 'Firebase'],
                    result: null,
                    role: null,
                    status: 'Cœur de jeu stable, pas encore publié sur le store',
                    link: null
                },
                {
                    icon: '🎬',
                    title: 'TMDB — Mon suivi de films/séries',
                    pitch: "Une application personnelle de suivi de films et séries, avec profils locaux et intégration d’API externe.",
                    stack: ['Node.js full-stack', 'API TMDB'],
                    result: null,
                    role: null,
                    status: 'Utilisée personnellement, activement maintenue',
                    image: 'projects/tmdb-suivi.png',
                    link: null
                },
                {
                    icon: '🚪',
                    title: 'escape-room',
                    pitch: "Un jeu d’évasion en vue FPS avec IA ennemie et une chaîne d’objectifs scriptée.",
                    stack: ['Godot 4'],
                    result: null,
                    role: null,
                    status: 'Le plus abouti de mes projets Godot',
                    link: null
                },
                {
                    icon: '🏰',
                    title: 'TerraNova',
                    pitch: "Un jeu de gestion de colonie avec système de ressources, artisans et progression par ticks.",
                    stack: ['Flutter'],
                    result: null,
                    role: null,
                    status: 'En pause',
                    link: null
                },
                {
                    icon: '🗂️',
                    title: 'FlashCard_Memory',
                    pitch: "Une application de flashcards avec import direct depuis Google Sheets et statistiques de réussite par carte.",
                    stack: ['Flutter'],
                    result: null,
                    role: null,
                    status: 'Fonctionnel, en développement',
                    link: null
                }
            ]
        },
        missions: {
            accent: 'linear-gradient(90deg, #ff5e7e, #ff9a5a)',
            glow: 'rgba(255, 94, 126, 0.4)',
            items: [
                {
                    icon: '🎨',
                    title: 'SebARTian LECUZE',
                    pitch: "Site vitrine bilingue (FR/EN) pour un peintre professionnel, avec une charte graphique dédiée.",
                    stack: ['HTML / CSS / JS'],
                    result: null,
                    role: null,
                    status: 'Livré et validé par le client',
                    image: 'projects/sebartian-lecuze.png',
                    link: { url: 'https://kinder2149.github.io/SebARTian_LECUZE/', label: 'Voir le site' }
                },
                {
                    icon: '🍷',
                    title: 'Le Tourbillon de la Vigne',
                    pitch: "Site vitrine de démonstration pour un restaurant, conçu comme outil de prospection commerciale.",
                    stack: ['HTML / CSS / JS'],
                    result: null,
                    role: null,
                    image: 'projects/tourbillon-de-la-vigne.png',
                    link: { url: 'https://atelier-connecte.github.io/tourbillion_de_la_vigne/', label: 'Voir le site' }
                },
                {
                    icon: '🍽️',
                    title: 'Restaurant Pointe de Rêve',
                    pitch: "Site vitrine de démonstration avec espace de gestion protégé pour le gérant.",
                    stack: ['HTML / CSS / JS'],
                    result: null,
                    role: null,
                    link: null
                },
                {
                    icon: '🛍️',
                    title: 'OPPI',
                    pitch: "Site e-commerce livré pour une entreprise cliente, via une mission encadrée par une agence intermédiaire.",
                    stack: ['Shopify'],
                    result: null,
                    role: null,
                    image: 'projects/oppi.png',
                    link: { url: 'https://oppitoys.com', label: 'Voir la boutique' }
                },
                {
                    icon: '🛒',
                    title: 'Subteal',
                    pitch: "Site e-commerce livré pour une entreprise cliente, via une mission encadrée par une agence intermédiaire.",
                    stack: ['Shopify'],
                    result: null,
                    role: null,
                    image: 'projects/subteal.png',
                    link: { url: 'https://subteal.fr/', label: 'Voir la boutique' }
                }
            ]
        }
    };

    // --- 2. Halo de fond réactif (crossfade entre deux calques) ---
    const spotlightA = document.querySelector('.spotlight-a');
    const spotlightB = document.querySelector('.spotlight-b');
    let spotlightToggle = false;

    function setActiveGlow(colorA, colorB) {
        const showEl = spotlightToggle ? spotlightB : spotlightA;
        const hideEl = spotlightToggle ? spotlightA : spotlightB;
        showEl.style.background = `radial-gradient(circle at 30% 35%, ${colorA}, transparent 55%), radial-gradient(circle at 70% 65%, ${colorB}, transparent 55%)`;
        showEl.classList.add('active');
        hideEl.classList.remove('active');
        spotlightToggle = !spotlightToggle;
    }

    // --- 3. Génération d'une carte ---
    function createCard(item, accent, glow) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.setProperty('--card-accent', accent);
        card.style.setProperty('--card-glow', glow);

        // Vraie capture d'écran si disponible, sinon icône emoji en fallback (comme demandé)
        const media = item.image
            ? `<div class="project-card-media"><img src="assets/${item.image}" alt="${item.title}" loading="lazy"></div>`
            : `<div class="project-card-media project-card-media-placeholder"><span class="project-card-icon">${item.icon}</span></div>`;

        card.innerHTML = `
            ${media}
            <h3 class="project-card-title">${item.title}</h3>
            <p class="project-card-pitch">${item.pitch}</p>
            ${item.status ? `<span class="project-card-status">${item.status}</span>` : ''}
        `;

        card.addEventListener('click', () => openModal(item, accent));
        return card;
    }

    // --- 4. Carrousel horizontal (un par catégorie) ---
    function getVisibleCount() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1024) return 2;
        return 3;
    }

    function initCarousel(categoryKey, category) {
        const wrapper = document.querySelector(`.carousel-wrapper[data-category="${categoryKey}"]`);
        if (!wrapper) return;

        const track = wrapper.querySelector('.carousel-track');
        const prevButton = wrapper.querySelector('.carousel-arrow.prev');
        const nextButton = wrapper.querySelector('.carousel-arrow.next');
        const indicatorsContainer = wrapper.parentElement.querySelector('.carousel-indicators');

        const items = category.items;
        let currentIndex = 0;

        items.forEach(item => track.appendChild(createCard(item, category.accent, category.glow)));

        const cardEls = Array.from(track.children);

        items.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'indicator';
            dot.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(dot);
        });
        const dotEls = Array.from(indicatorsContainer.children);

        function maxIndex() {
            return Math.max(0, items.length - getVisibleCount());
        }

        function updateTrack() {
            const cardWidth = cardEls[0].getBoundingClientRect().width;
            const gap = 20;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;

            dotEls.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));

            // Le fond réagit à la carte de tête actuellement visible dans ce carrousel
            const activeItem = items[currentIndex];
            const [colorA, colorB] = category.accent.match(/#[0-9a-fA-F]{3,6}/g) || ['#667eea', '#764ba2'];
            setActiveGlow(colorA, colorB);
        }

        function goToSlide(index) {
            currentIndex = Math.min(Math.max(index, 0), maxIndex());
            updateTrack();
        }

        prevButton.addEventListener('click', () => {
            currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
            updateTrack();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
            updateTrack();
        });

        // Swipe tactile
        let touchStartX = 0;
        let touchEndX = 0;

        wrapper.querySelector('.carousel-viewport').addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        wrapper.querySelector('.carousel-viewport').addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            const delta = touchStartX - touchEndX;
            if (Math.abs(delta) < 35) return;
            if (delta > 0) {
                currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
            } else {
                currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
            }
            updateTrack();
        });

        window.addEventListener('resize', () => {
            currentIndex = Math.min(currentIndex, maxIndex());
            updateTrack();
        });

        updateTrack();
    }

    Object.entries(categories).forEach(([key, category]) => initCarousel(key, category));

    // --- 5. Animation au scroll : le carrousel entier apparaît en fondu ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.carousel-wrapper').forEach(el => observer.observe(el));

    // --- 4. Modal de détail ---
    const modalOverlay = document.getElementById('project-modal-overlay');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalButton = document.getElementById('close-modal');

    function openModal(item, accent) {
        const stackTags = (item.stack || []).map(s => `<span class="tag">${s}</span>`).join('');

        const metaLines = [];
        if (item.result) metaLines.push(`<p class="modal-meta-line"><strong>Résultat :</strong> ${item.result}</p>`);
        if (item.role) metaLines.push(`<p class="modal-meta-line"><strong>Mon rôle :</strong> ${item.role}</p>`);
        if (item.status) metaLines.push(`<p class="modal-meta-line"><strong>Statut :</strong> ${item.status}</p>`);

        const gallery = item.gallery
            ? `<div class="modal-gallery">${item.gallery.map(img => `<img src="assets/${img}" alt="${item.title}" loading="lazy">`).join('')}</div>`
            : (item.image ? `<div class="modal-gallery"><img src="assets/${item.image}" alt="${item.title}" loading="lazy"></div>` : '');

        const linkHtml = item.link
            ? `<a href="${item.link.url}" target="_blank" rel="noopener noreferrer" class="modal-link">${item.link.label}</a>`
            : `<span class="modal-link-disabled">Lien à venir</span>`;

        modalContent.innerHTML = `
            <h2 class="modal-title" style="border-image: none;">${item.icon} ${item.title}</h2>
            <div class="modal-tags">${stackTags}</div>
            <p class="modal-description">${item.pitch}</p>
            ${gallery}
            <div class="modal-meta">${metaLines.join('')}</div>
            ${linkHtml}
        `;

        modal.style.setProperty('--card-accent', accent);
        modalOverlay.classList.add('visible');
        modal.classList.add('show');
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
        modal.classList.remove('show');
    }

    closeModalButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // --- 5. Fiche de profil ---
    const profilePic = document.querySelector('.profile-pic-static');
    const profileOverlay = document.getElementById('profile-overlay');
    const profileCard = document.getElementById('profile-card');
    const closeProfileButton = document.getElementById('close-profile-card');

    function openProfileCard() {
        profileOverlay.classList.add('visible');
        profileCard.classList.add('show');
    }

    function closeProfileCard() {
        profileOverlay.classList.remove('visible');
        profileCard.classList.remove('show');
    }

    profilePic.addEventListener('click', (e) => {
        e.preventDefault();
        openProfileCard();
    });

    closeProfileButton.addEventListener('click', closeProfileCard);
    profileOverlay.addEventListener('click', closeProfileCard);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('show')) closeModal();
            if (profileOverlay.classList.contains('visible')) closeProfileCard();
        }
    });
});
