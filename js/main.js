'use strict';

document.addEventListener('DOMContentLoaded', () => {

    initProgressBar();

    initNavigation();

    initReveal();

    initLightbox();

    initFab();

});

function initFab() {

    const fab = document.querySelector('.fab');

    if (!fab) return;

    fab.addEventListener('click', () => {

        window.scrollTo({

            top:0,

            behavior:'smooth'

        });

    });

}