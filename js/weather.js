// 성공 콜백함수
function onGeoSucces(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}

// 실패 콜백함수
function onGeoError() {
  console.log("Can't find you. No weather for you");
}

// 지리 정보 가져오기
navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);
