document.addEventListener('DOMContentLoaded', () => {
    // --- Логика для бургер-меню ---
    const burger = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });

        // Закрываем меню при клике на любую ссылку в нем
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }

    // --- Логика для карточек-перевертышей (Чемпионы) ---
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});