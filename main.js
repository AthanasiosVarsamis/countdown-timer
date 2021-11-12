const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  //i gonna provide some optional callbacks,that we going to call at some spefic time of our timer
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("timer started");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter* timeRemaining) / duration - perimeter
    );

    console.log("timer just ticked down");
  },
  onComplete() {
    console.log("timer just completed");
  },
});

//this is the instance of the class
//if we want to call some other method inside of a class or reference some instance variable
//the value of this must be set equal to the instance of the class
