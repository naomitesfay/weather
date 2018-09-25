const API_KEY = '9ab5994cbe2a55f0392a3e1112fa9103';
const ENDPOINT_URL = `http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`;



function getData() {
  console.log("Getting Data");
  fetch(ENDPOINT_URL)
    .catch(displayError)
    .then((response) => response.json())
    .then(presentData);
}

function presentData(data) {
  console.log('Displaying Data');
  console.log(data);
  const containerElement = document.getElementById('weather-container');
  containerElement.innerHTML += `
   <div>
     <span>Temperture in ${data.name} is ${data.main.temp} C</span>
     <span>${data.weather[0].description}</span>
   </div>
 `;
}

function displayError(error) {
  console.log(error);
  const containerElement = document.getElementById('weather-container');
  containerElement.innerHTML += `
   ${error}
 `;
}

getData();
