document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguer para Mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // Alternar abas de horários
    const tabBtns = document.querySelectorAll('.tab-btn');
    const schedulePanes = document.querySelectorAll('.schedule-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos os botões e painéis
            tabBtns.forEach(b => b.classList.remove('active'));
            schedulePanes.forEach(p => p.classList.remove('active'));

            // Adiciona active no botão clicado e painel correspondente
            btn.classList.add('active');
            const dayId = btn.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        });
    });

    // Manipulação do Formulário de Lead / Matrícula
    const leadForm = document.getElementById('leadForm');
    const formSuccess = document.getElementById('formSuccess');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de envio bem-sucedido
            formSuccess.style.display = 'block';
            leadForm.reset();

            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }

    // Destaque do link do menu conforme scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});