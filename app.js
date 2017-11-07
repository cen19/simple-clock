class Clock {
  constructor() {
    this.callbacks = [];
    // execute a tick every second
    setInterval(this.tickAction.bind(this), 1000);
  }

  addCallback(callback) {
    this.callbacks.push(callback);
  }
  
  tickAction() {
    // declare the time
    let currentTime = new Date();
    // executes the callback with the current time
    this.callbacks.forEach(callback => callback(currentTime));
  }


}

class ClockUI {
  constructor() {
    // use the clock functionality
    this.clock = new Clock();
    this.clock.addCallback(this.renderTime.bind(this));
  }

  renderTime(currentTime) {
    let hours = document.getElementsByClassName('digits-hours')[0];
    let minutes = document.getElementsByClassName('digits-minutes')[0];
    let seconds = document.getElementsByClassName('digits-seconds')[0];
    hours.innerHTML = currentTime.getHours().toString();
    minutes.innerHTML = currentTime.getMinutes().toString();
    seconds.innerHTML = currentTime.getSeconds().toString();
  }
}

let clockUI = new ClockUI();