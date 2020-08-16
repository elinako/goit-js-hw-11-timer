class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timeCounter() {
    setInterval(() => {
      let time = this.targetDate - Date.now();

      const days = document
        .querySelector(this.selector)
        .querySelector('[data-value="days"]');

      days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));

      const hours = document
        .querySelector(this.selector)
        .querySelector('[data-value="hours"]');

      hours.textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const mins = document
        .querySelector(this.selector)
        .querySelector('[data-value="mins"]');

      mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

      const secs = document
        .querySelector(this.selector)
        .querySelector('[data-value="secs"]');
      secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
}

const timerNew = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 27, 2020"),
});

timerNew.timeCounter();

const timerSecond = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("'Jul 17, 2021'"),
});

timerSecond.timeCounter();
