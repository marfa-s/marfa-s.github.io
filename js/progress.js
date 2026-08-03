function initProgressBar() {

    const progress = document.querySelector('.progress__bar');

    if (!progress) return;

    function updateProgress() {

        const scroll = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scroll / height) * 100;

        progress.style.width = percent + '%';

    }

    updateProgress();

    window.addEventListener('scroll', updateProgress);

}