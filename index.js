const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const button = document.getElementById("button1");
const heading1 = document.getElementById("heading1");

const bottom1 = document.getElementById("bottom1");
const bottom2 = document.getElementById("bottom2");
const AQI = document.getElementById("aqi");
const CO = document.getElementById("co");
const NO2 = document.getElementById("no2");
const O3 = document.getElementById("o3");
const PM25 = document.getElementById("pm25");
const PM10 = document.getElementById("pm10");
const SO2 = document.getElementById("so2");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const lat = latitude.value;
  const long = longitude.value;
  const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${long}&lat=${lat}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "XXXXXXX Enter RapidAPI Token Here XXXXXXXX",
      "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      const reading = result.data[0];
      console.log(reading);
      AQI.textContent = reading.aqi;
      CO.textContent = reading.co;
      NO2.textContent = reading.no2;
      O3.textContent = reading.o3;
      PM25.textContent = reading.pm25;
      PM10.textContent = reading.pm10;
      SO2.textContent = reading.so2;
      heading1.style.display = "flex";
      bottom1.style.display = "flex";
      bottom2.style.display = "flex";
    });
});
