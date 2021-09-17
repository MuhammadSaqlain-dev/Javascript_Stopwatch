window.onload = () => {
  var tens = 00;
  var seconds = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var startBtn = document.getElementById("start");
  var stopBtn = document.getElementById("stop");
  var resetBtn = document.getElementById("reset");
  var Interval;

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startFunction, 10);
  };

  stopBtn.onclick = () => {
    clearInterval(Interval);
  };
  // a
  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  startFunction = () => {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      console.log(seconds);

      appendTens.innerHTML = "0" + 0;
      tens = 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  };
};
