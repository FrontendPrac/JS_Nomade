// API KEY
const API_KEY = "7c85994319253cd946d68c5fbb295cf4";

// 성공 콜백함수
function onGeoSucces(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2n)");
      const temp = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

// 실패 콜백함수
function onGeoError() {
  console.log("Can't find you. No weather for you");
}

// 지리 정보 가져오기
navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);
