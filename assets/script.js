"use strict";
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const countDownDate = new Date("July 30, 2024 00:00:00");

const countDownTime = function () {
  const count = setInterval(() => {
    const now = new Date().getTime();
    let timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((timeLeft / 1000 / 60) % 60);
    const secs = Math.floor((timeLeft / 1000) % 60);

    day.textContent = +days;
    hour.textContent = +hours;
    minute.textContent = +mins;
    seconds.textContent = +secs;

    const lasttime = 0;

    if (timeLeft < 0) {
      clearInterval(count);
      day.textContent = lasttime;
      hour.textContent = lasttime;
      minute.textContent = lasttime;
      seconds.textContent = lasttime;
    }
  }, 1000);
};

countDownTime();
