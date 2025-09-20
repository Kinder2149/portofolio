document.addEventListener('DOMContentLoaded', () => {

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
            title: "Atelier Connecté",
            image: "Atelier-connecté.PNG",
            link: "https://keamder.wixsite.com/latelier-connecte",
            description: "Description du projet Atelier Connecté à compléter.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "La légende du Graoully",
            image: "la_legende_du_graoully.PNG",
            link: "https://keamder.wixsite.com/legende-du-graoully",
            description: "Description du projet La légende du Graoully à compléter.",
            gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)"
        },
        {
            title: "Make it better",
            image: "make_it_better.PNG",
            link: "https://keamder.wixsite.com/make-it-better",
            description: "Description du projet Make it better à compléter.",
            gradient: "linear-gradient(135deg, #2E8B57 0%, #4682B4 100%)"
        },
        {
            title: "Enquête Multivers",
            image: "enquete_multivers.PNG",
            link: "https://keamder.wixsite.com/clef7258",
            description: "Description du projet Enquête Multivers à compléter.",
            gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)"
        },
        {
            title: "Escape Mythology",
            image: "mythology_escape.PNG",
            link: "https://keamder.wixsite.com/escapemythology",
            description: "Description du projet Escape Mythology à compléter.",
            gradient: "linear-gradient(135deg, #D1B48C 0%, #534833 100%)"
        },
        {
            title: "Formation BAFA",
            image: "formation_bafa.PNG",
            link: "https://keamder.wixsite.com/my-site-2",
            description: "Description du projet Formation BAFA à compléter.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            title: "CSC Gilbert Jansem",
            image: "csc.PNG",
            link: "https://keamder.wixsite.com/csc-gilbertjansem",
            description: "Description du projet CSC à compléter.",
            gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
        },
        {
            title: "Jeux Olympiques",
            image: "jeux_olympique.PNG",
            link: "https://keamder.wixsite.com/my-site",
            description: "Description du projet Jeux Olympiques à compléter.",
            gradient: "linear-gradient(135deg, #4285F4 0%, #DB4437 50%, #0F9D58 100%)"
        },
        {
            title: "Oppi",
            image: "oppi.PNG",
            link: "https://oppitoys.com",
            description: "Description du projet Oppi à compléter.",
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
        },
        {
            title: "Subteal",
            image: "subteal.PNG",
            link: "https://subteal.fr",
            description: "Description du projet Subteal à compléter.",
            gradient: "linear-gradient(135deg, #008080 0%, #004d4d 100%)"
        }
    ];

    // --- 2. Sélection des éléments du DOM ---
    // --- Sélection des éléments du DOM ---
    const body = document.body;
    const profilePic = document.getElementById('profilePic');
    const profileMenu = document.getElementById('profileMenu');
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');
    let mainCarouselCurrentSlide = 0;

    // --- 3. Génération dynamique des slides et indicateurs ---
    // --- 4. Fonction générique pour initialiser un carrousel ---
    function initializeCarousel(options) {
        const slidesContainer = document.querySelector(options.slidesContainer);
        const indicatorsContainer = document.querySelector(options.indicatorsContainer);
        const prevButton = document.querySelector(options.prevButton);
        const nextButton = document.querySelector(options.nextButton);
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
        slidesContainer: '.carousel-slides',
        indicatorsContainer: '.carousel-indicators',
        prevButton: '.carousel-arrow.prev',
        nextButton: '.carousel-arrow.next',
        data: projects,
        slideClass: 'slide',
        indicatorClass: 'indicator',
        slideContent: (item) => `
            <div class="slide-content">
                <img src="assets/${item.image}" alt="${item.title}" class="slide-image">
                <h2 class="slide-title">${item.title}</h2>
                <p class="slide-description">${item.description}</p>
                <a href="${item.link}" target="_blank" class="slide-link">Voir le projet</a>
            </div>`,
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
        slideContent: (item) => `<img src="assets/${item.image}" alt="Image du jeu ClipFactory Empire">`
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

    // --- 6. Gestion du menu de profil ---
    profilePic.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêche la fermeture immédiate
        profileMenu.classList.toggle('active');
    });

    // Ferme le menu si on clique n'importe où sur la page
    document.addEventListener('click', () => {
        if (profileMenu.classList.contains('active')) {
            profileMenu.classList.remove('active');
        }
    });

    // --- 7. Gestion des onglets du menu ---
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