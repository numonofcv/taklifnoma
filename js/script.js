    // Timer
    let deadline = '2025-06-28 17:00:00';
    function getTimeRemaining(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hours = Math.floor(((time / (1000 * 60 * 60)) % 24)),
            minutes = Math.floor((time / (1000 * 60)) % 60),
            seconds = Math.floor(time / (1000) % 60)

        return {
            totalTime: time,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hour = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {

            const time = getTimeRemaining(endtime);

            days.textContent = time.days;
            hour.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (time.totalTime <= 0) {
                clearInterval(timeInterval)
                days.textContent = 0;
                hour.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;
            };
        };
    };
    setClock('.timer', deadline);