function updateClock() {
  let nowDate = new Date();

  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();

  verifyTime(hours);

  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  let secondsString = seconds.toString().padStart(2, "0");

  document.querySelector("#hours").textContent = hoursString;
  document.querySelector("#minutes").textContent = minutesString;
  document.querySelector("#seconds").textContent = secondsString;
}

const verifyTime = (hours) => {
  const isMorning = true ? hours >= 6 && hours <= 11 : false;
  const isAfternoon = true ? hours >= 12 && hours <= 18 : false;
  if (isMorning) {
    document.body.classList.add("its-morning");
  } else if (isAfternoon) {
    document.body.classList.add("its-afternoon");
  } else {
    document.body.classList.add("its-at-night");
  }
};

setInterval(updateClock, 1000);
