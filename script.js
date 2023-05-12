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
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime) % 60;

      counting.innerHTML = `Time: ${format(hours)}hr : ${format(min)}min : ${format(sec)} `;
    }
  }, 1000);
}

function format(t) {
  return t < 10 ? `0${t}` : t;
}

startCountdown();
