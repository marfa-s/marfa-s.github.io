function initNavigation() {

    const links = document.querySelectorAll('.mobile-nav a');

    const sections = document.querySelectorAll('section[id], header[id]');



    links.forEach(link => {

        link.addEventListener('click', e => {

            e.preventDefault();

            const target = document.querySelector(

                link.getAttribute('href')

            );

            target.scrollIntoView({

                behavior:'smooth',

                block:'start'

            });

        });

    });



    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const id = entry.target.id;

                links.forEach(link => {

                    link.classList.toggle(

                        'active',

                        link.getAttribute('href') === '#' + id

                    );

                });

            });

        },

        {

            threshold:0.4

        }

    );



    sections.forEach(section => observer.observe(section));

}