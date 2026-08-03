document.addEventListener('DOMContentLoaded', function() {
    // 1. Считываем параметр track из URL
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('track') || 'music';

    // 2. Сопоставляем ID с путями к аудиофайлам
    const audioMap = {
        'music': 'files/mus-hor.mp3',
       // 'happy': 'files/happy.mp3',
       // 'calm': 'files/calm.mp3',
       // 'alert': 'files/alert.mp3'
    };
    const src = audioMap[trackId] || audioMap['music'];

    // 3. Создаём аудио-объект
    const audio = new Audio(src);
    audio.loop = false;   // можно включить зацикливание при необходимости
    audio.volume = 0.8;

    // 4. Функция запуска воспроизведения
    function playAudio() {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Автозапуск заблокирован – ждём первого клика/касания
                const startOnInteraction = () => {
                    audio.play().catch(e => console.warn('Ошибка воспроизведения:', e));
                    document.removeEventListener('click', startOnInteraction);
                    document.removeEventListener('touchstart', startOnInteraction);
                };
                document.addEventListener('click', startOnInteraction, { once: true });
                document.addEventListener('touchstart', startOnInteraction, { once: true });
            });
        }
    }

    // 5. Пытаемся запустить сразу (если разрешено)
    playAudio();
});