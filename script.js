let key = "8a4459ad8b0ee1a02b8203a818310024";
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.87&lon=74.59&exclude=minutely&lang=ru&units=metric&appid=${key}`;
let sity = document.querySelector("#city");
let tempDegree = document.querySelector("#tempDegree");
let tempImg = document.querySelector("#tempImg");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let clouds = document.querySelector("#clouds");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let visibility = document.querySelector("#visibility");
let tempDescription = document.querySelector("#tempDescription");
let allWeather = document.querySelector(".all-weather");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    sity.textContent = data.timezone;
    tempDegree.textContent = `${data.current.temp} °C`;
    let iconUrl = ` http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    tempImg.setAttribute("src", iconUrl);
    feelsLike.textContent = `По ощущениям ${data.current.feels_like} °C`;
    humidity.textContent = ` Влажность ${data.current.humidity}%`;
    clouds.textContent = ` Облочно ${data.current.clouds}%`;
    sunrise.textContent = `Восход ${data.current.sunrise}`;
    sunset.textContent = `Закат ${data.current.sunset}`;
    visibility.textContent = `Видимость${data.current.visibility}%`;
    tempDescription.textContent = `${data.current.weather[0].description}`;
    let i = 0;

    data.daily.forEach((element) => {
      let days = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье',
        'понедельник',
      ];

      let n = new Date().getDay();

      allWeather.insertAdjacentHTML(
        "beforeend",
        `
          <div>
          <span>${days[n + i]}</span>
          <span>днем ${element.temp.day} °C</span>
          <span>Вечером ${element.temp.eve}°C</span>
          <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}.png" alt="" />
          <span>ясно ${element.weather[0].description}</span>
        </div>
          `
      );
      i++;
    });
  });
