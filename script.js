async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e0f396f0cf2c9a4cbcba853a56ce0e11'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById('weatherData').innerHTML = `
          <p><strong>${data.name}</strong></p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        document.getElementById('weatherData').innerHTML = `<p>${data.message}</p>`;
      }
    } catch (error) {
      document.getElementById('weatherData').innerHTML = `<p>Error fetching data</p>`;
    }
  }
  