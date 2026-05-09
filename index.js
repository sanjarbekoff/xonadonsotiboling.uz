function startTimer() {
    const timerElement = document.getElementById('timer');
    
    let totalSeconds = 24 * 60 * 60 - 1;

    const updateTimer = () => {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        if (totalSeconds <= 0) {
            totalSeconds = 24 * 60 * 60 - 1;
        } else {
            totalSeconds--;
        }
    };

    setInterval(updateTimer, 1000);
}

startTimer();