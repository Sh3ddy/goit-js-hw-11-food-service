class Timer {
    constructor({ selector , targetDate  }){
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            timerBox: document.querySelector("#timer-1"),
            daysTimer: document.querySelector(`${selector} span[data-value="days"]`),
            hoursTimer: document.querySelector(`${selector} span[data-value="hours"]`),
            minutesTimer: document.querySelector(`${selector} span[data-value="mins"]`),
            secondsTimer: document.querySelector(`${selector} span[data-value="secs"]`)
        };
        this.start();
    }
    start() {
        setInterval(()=>{
            const deltaTime = this.targetDate - Date.now();
            this.updateClockface(this.getTimeComponents(deltaTime));
        }, 1000);
    }
    updateClockface({ days , hours , mins , secs  }) {
        this.refs.daysTimer.innerHTML = days;
        this.refs.hoursTimer.innerHTML = hours;
        this.refs.minutesTimer.innerHTML = mins;
        this.refs.secondsTimer.innerHTML = secs;
    }
    getTimeComponents(time) {
        const days = pad(Math.floor(time / 86400000));
        const hours = pad(Math.floor(time % 86400000 / 3600000));
        const mins = pad(Math.floor(time % 3600000 / 60000));
        const secs = pad(Math.floor(time % 60000 / 1000));
        return {
            days,
            hours,
            mins,
            secs
        };
    }
}
function pad(value) {
    return String(value).padStart(2, "0");
}
const CountDownTimer = new Timer({
    selector: "#timer-1",
    targetDate: new Date("Oct 30, 2022")
});

//# sourceMappingURL=index.3f333593.js.map
