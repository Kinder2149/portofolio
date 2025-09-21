document.addEventListener('DOMContentLoaded', () => {

    const isMobile = () => window.innerWidth <= 767;

    if (isMobile()) {
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.classList.add('is-mobile');
        }
    }

    // --- Données du carrousel de jeu ---
    const gameImages = [
        { image: "paper-clip-1.jpg" },
        { image: "paper-clip-2.jpg" },
        { image: "paper-clip-3.png" },
    ];

    // --- 1. Base de données des projets ---
    // Pour ajouter un projet, il suffit de copier un bloc { ... } et de le coller ici.
    const projects = [
        {
            title: "L’atelier connecté",
            tags: ["Site vitrine", "Maquette / demo", "Design & Intégration", "Wix (prototype)"],
            description: "Maquette d’un site de service local destinée aux associations et petites entreprises — organisation des services, prise de contact et mise en avant d’offres de proximité. Le design met l’accent sur la clarté des informations et la facilité d’accès pour un public local.",
            invitation: "Clique sur l’image pour voir la démo et n’hésite pas à naviguer vers les autres onglets pour découvrir plus de projets.",
            image: "Atelier-connecté.PNG",
            url: "https://keamder.wixsite.com/latelier-connecte",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "La légende du Graoully",
            tags: ["Enquête urbaine / Récit", "Projet pro (ancien poste)", "Intégration & contenu", "Wix / site storytelling"],
            description: "Site conçu autour d’une enquête à propos d’un lieu historique de la ville — ambiances immersives, éléments narratifs et interactions pour guider l’utilisateur dans l’enquête. Idéal pour événements locaux et médiation culturelle.",
            invitation: "Clique pour explorer l’enquête en ligne, et parcours les autres onglets pour voir mes autres réalisations.",
            image: "la_legende_du_graoully.PNG",
            url: "https://keamder.wixsite.com/legende-du-graoully",
            gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)"
        },
        {
            title: "Make it better",
            tags: ["E-commerce (maquette)", "Concept", "UX / UI", "Boutique (maquette)"],
            description: "Maquette d’une boutique en ligne dédiée aux t-shirts personnalisables : page produit, configurateur simple et parcours d’achat simulé. L’objectif : démontrer un flux commercial et une interface claire pour un public jeune.",
            invitation: "Teste la démo depuis l’image et visite les autres onglets pour voir d’autres types de projets.",
            image: "make_it_better.PNG",
            url: "https://keamder.wixsite.com/make-it-better",
            gradient: "linear-gradient(135deg, #2E8B57 0%, #4682B4 100%)"
        },
        {
            title: "Enquête dans le Multivers",
            tags: ["Projet perso / Enquête interactive", "Prototype", "Création & conception", "Accès restreint (code 'Ultim@te')"],
            description: "Site personnel conçu comme une enquête multi-scénarios. Accès protégé par un code (Ultim@te) pour débloquer les épisodes. Le site mélange textes, indices visuels et liens pour une expérience immersive.",
            invitation: "Clique pour ouvrir la page (code requis) et explore aussi les autres onglets pour voir d’autres expériences.",
            image: "enquete_multivers.PNG",
            url: "https://keamder.wixsite.com/clef7258",
            gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)"
        },
        {
            title: "Escape Mythology",
            tags: ["Enquête / Jeu narratif", "Projet perso", "Scénarisation & design", "Web"],
            description: "Projet d’enquête basé sur la mythologie, avec énigmes, indices et mise en page immersive. Destiné à tester des mécaniques narratives et UX ludiques.",
            invitation: "Clique sur l’image pour visiter la page et navigue entre les onglets pour découvrir les autres travaux.",
            image: "mythology_escape.PNG",
            url: "https://keamder.wixsite.com/escapemythology",
            gradient: "linear-gradient(135deg, #D1B48C 0%, #534833 100%)"
        },
        {
            title: "Formation BAFA",
            tags: ["Support pédagogique", "Réalisé (personnel)", "Création de contenu / Blog", "Web (onglets blog)"],
            description: "Support en ligne conçu pour accompagner des formations BAFA : ressources pédagogiques, fiches activités et onglet blog pour retours d’expérience. Pensé pour la lisibilité en formation.",
            invitation: "Consulte la fiche via l’image et n’hésite pas à parcourir les onglets pour d’autres projets.",
            image: "formation_bafa.PNG",
            url: "https://keamder.wixsite.com/my-site-2",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            title: "Jeux Olympique",
            tags: ["Événement / Inscription", "Utilisé en événement pro", "Développement & gestion", "Web"],
            description: "Site d’événement pensé pour gérer inscriptions et compétitions sportives : formulaires d’inscription, calendrier et suivi des résultats. Conçu pour un usage ponctuel et intensif.",
            invitation: "Ouvre l’exemple via l’image et parcoure les onglets pour découvrir d’autres réalisations.",
            image: "jeux_olympique.PNG",
            url: "https://keamder.wixsite.com/my-site",
            gradient: "linear-gradient(135deg, #4285F4 0%, #DB4437 50%, #0F9D58 100%)"
        },
        {
            title: "OPPI",
            tags: ["E-commerce (Shopify)", "Mission professionnelle", "Intégration sous charte graphique", "Shopify"],
            description: "Mission professionnelle sur une boutique Shopify avec charte graphique imposée : adaptation des templates, intégration des visuels et optimisations UX pour la conversion. Travail réalisé en respect de la marque.",
            invitation: "Clique pour voir la boutique en ligne et explore les autres onglets pour voir d’autres types de missions.",
            image: "oppi.PNG",
            url: "https://oppitoys.com",
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
        },
        {
            title: "Subteal",
            tags: ["E-commerce (Shopify)", "Mission professionnelle", "Intégration & optimisation", "Shopify"],
            description: "Intégration d’un site Shopify dans le respect d’une identité visuelle existante. Focus sur la présentation produit et la fluidité du tunnel d’achat.",
            invitation: "Visite la boutique via l’image et passe aux autres onglets pour parcourir mon portfolio complet.",
            image: "subteal.PNG",
            url: "https://subteal.fr/",
            gradient: "linear-gradient(135deg, #008080 0%, #004d4d 100%)"
        }
    ];

    // --- 2. Sélection des éléments du DOM ---
    // --- Sélection des éléments du DOM ---
    const body = document.body;
    const menuItems = document.querySelectorAll('.section-switcher .menu-item');
    const contentSections = document.querySelectorAll('.content-section');
    let mainCarouselCurrentSlide = 0;

    // --- 3. Génération dynamique des slides et indicateurs ---
    // --- 4. Fonction générique pour initialiser un carrousel ---
    function initializeCarousel(options) {
        const slidesContainer = document.querySelector(options.slidesContainer);
        let indicatorsContainer = document.querySelector(options.indicatorsContainer);
        let prevButton = document.querySelector(options.prevButton);
        let nextButton = document.querySelector(options.nextButton);

        const data = options.data;
        let currentSlide = 0;

        // Génération des slides et indicateurs
        data.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.classList.add(options.slideClass);
            slide.innerHTML = options.slideContent(item);
            slidesContainer.appendChild(slide);



            if (indicatorsContainer) {
                const indicator = document.createElement('div');
                indicator.classList.add(options.indicatorClass);
                indicator.addEventListener('click', () => showSlide(index));
                indicatorsContainer.appendChild(indicator);
            }
        });

        const allSlides = slidesContainer.querySelectorAll(`.${options.slideClass}`);
        const allIndicators = indicatorsContainer ? indicatorsContainer.querySelectorAll(`.${options.indicatorClass}`) : [];

        // On groupe les contrôles dans une div pour les styliser ensemble
        if (options.controlsContainer) {
            const controlsDiv = document.createElement('div');
            controlsDiv.className = options.controlsContainer;
            if(prevButton) controlsDiv.appendChild(prevButton);
            if(indicatorsContainer) controlsDiv.appendChild(indicatorsContainer);
            if(nextButton) controlsDiv.appendChild(nextButton);
            slidesContainer.parentElement.appendChild(controlsDiv);
        }

        function showSlide(index) {
            if (index >= data.length) index = 0;
            if (index < 0) index = data.length - 1;

            allSlides.forEach(s => s.classList.remove('active'));
            allSlides[index].classList.add('active');

            if (allIndicators.length > 0) {
                allIndicators.forEach(i => i.classList.remove('active'));
                allIndicators[index].classList.add('active');
            }

            if (options.onSlideChange) {
                options.onSlideChange(index);
            }

            currentSlide = index;
        }

        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));

        // Gestion du swipe
        let touchstartX = 0;
        let touchendX = 0;

        slidesContainer.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; });
        slidesContainer.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchendX < touchstartX) showSlide(currentSlide + 1);
            if (touchendX > touchstartX) showSlide(currentSlide - 1);
        });

        showSlide(0);
        return showSlide;
    }

    // --- 5. Initialisation des deux carrousels ---
    const showMainSlide = initializeCarousel({
        controlsContainer: 'carousel-controls', // Classe du conteneur pour les contrôles
        slidesContainer: '.carousel-slides',
        indicatorsContainer: '.carousel-indicators',
        prevButton: '.carousel-arrow.prev',
        nextButton: '.carousel-arrow.next',
        data: projects,
        slideClass: 'slide',
        indicatorClass: 'indicator',
        slideContent: (item) => {
            const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const imageHtml = item.image
                ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer"><img src="assets/${item.image}" alt="${item.title}" loading="lazy" class="project-screenshot"></a>`
                : `<div class="placeholder"><p>Visuel indisponible</p></div>`;

            // Structure HTML avec un conteneur pour le texte
            return `
                <div class="slide-content">
                    <h3 class="slide-title">${item.title}</h3>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="text-content">
                        <p class="project-desc">${item.description}</p>
                        <p class="invitation">${item.invitation}</p>
                    </div>
                    <div class="image-container">${imageHtml}</div>
                </div>
            `;
        },
        onSlideChange: (index) => {
            body.style.background = projects[index].gradient;
            mainCarouselCurrentSlide = index;
        }
    });

    initializeCarousel({
        slidesContainer: '.project-carousel-slides',
        indicatorsContainer: '.project-carousel-indicators',
        prevButton: '.project-carousel-arrow.prev',
        nextButton: '.project-carousel-arrow.next',
        data: gameImages,
        slideClass: 'project-slide',
        indicatorClass: 'project-indicator',
        slideContent: (item) => `<a href="https://play.google.com/store/apps/details?id=com.kinder2149.paperclip2" target="_blank" rel="noopener noreferrer"><img src="assets/${item.image}" alt="Image du jeu ClipFactory Empire" loading="lazy"></a>`
    });

    // Bonus : navigation avec les flèches du clavier
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('sites-section').classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        }
    });

    // --- 6. Gestion des onglets du menu ---
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Met à jour l'état actif du menu
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const targetSectionId = item.getAttribute('data-section');

            // Affiche la section correspondante
            contentSections.forEach(section => {
                if (section.id === targetSectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Si on affiche la section des sites, on rafraîchit le fond
            if (targetSectionId === 'sites-section') {
                showMainSlide(mainCarouselCurrentSlide);
            } else {
                // Pour la section des jeux, on met un fond thématique
                body.style.background = 'linear-gradient(135deg, #8a2be2 0%, #c71585 100%)';
            }

        });
    });
});