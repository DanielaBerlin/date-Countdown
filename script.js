//Time Countdown
let time = 10; //Time in minutes
let promoTime = time * 60;

let counting = document.getElementById('countdown');

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = 'promo has ended';
    } else {
      promoTime--;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const min = Math.floor(totalSeconds / 60) % 60;
      const sec = Math.floor(totalSeconds) % 60;
    }
  }, 1000);
}
