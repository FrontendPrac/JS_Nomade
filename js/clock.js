const nowClock = document.querySelector("#clock");

function diffXmas() {
  const xmasDate = new Date("2023-12-25");
  const nowDate = new Date();
  const diffDate = xmasDate - nowDate;

  const diffDay = String(Math.floor(diffDate / (1000 * 60 * 60 * 24)));
  const diffHour = String(
    Math.floor((diffDate / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const diffMinute = String(Math.floor((diffDate / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const diffSecond = String(Math.floor((diffDate / 1000) % 60)).padStart(
    2,
    "0"
  );

  nowClock.innerText = `${diffDay}d : ${diffHour}h : ${diffMinute}m : ${diffSecond}s`;
}

diffXmas();
setInterval(diffXmas, 1000);
