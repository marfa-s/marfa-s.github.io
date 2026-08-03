function initReveal() {

    const blocks = document.querySelectorAll(

        '.section,.hero'

    );



    blocks.forEach(el => {

        el.classList.add('reveal');

    });



    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                }

            });

        },

        {

            threshold:.15

        }

    );



    blocks.forEach(block => observer.observe(block));

}