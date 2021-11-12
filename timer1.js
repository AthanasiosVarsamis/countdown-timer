class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    console.log(this);
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //this.startButton.addEventListener('click',this.start.bind(this));
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    //kaloume mia fora apo pano to tick() επειδη την πρωτη φορα απο κατω θα αρχισει μετα απο 1μσ.
    this.timerInterval = setInterval(this.tick, 20);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };
  pause = () => {
    clearInterval(this.timerInterval);
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
