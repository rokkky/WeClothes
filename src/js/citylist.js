import byCityList from "./cityData"; //Принимаем список городов из by 
const active = document.querySelector(".city__active"), //Выбранный город
      menu = document.querySelector(".city__menu"),
      btn = document.querySelector('.city__button'),
      city = document.querySelector('.weather__city'),
      icon = document.querySelector('.weather__icon'),
      tempK = document.querySelector('.weather__temp'),
      status = document.querySelector('.weather__status');
let currentState = active.textContent;

const icons = {
  Clouds: `
  <div class="cloud"></div>
    <div class="cloud"></div>
  `,
  Clear: `
  <div class="sun">
      <div class="rays"></div>
    </div>
  `,
  Rain: `
  <div class="cloud"></div>
    <div class="rain"></div>
  `,
  Snow: `
  <div class="cloud"></div>
  <div class="snow">
    <div class="flake"></div>
    <div class="flake"></div>
  </div>
  `,
  Thunderstorm: `
  <div class="cloud"></div>
    <div class="lightning">
      <div class="bolt"></div>
      <div class="bolt"></div>
    </div>
  `,
  Drizzle: `
  <div class="cloud"></div>
    <div class="sun">
      <div class="rays"></div>
    </div>
    <div class="rain"></div>
  `
}


// Вывод списка городов в меню
byCityList.forEach( city => {
  // Добавляем в меню новый элемент для кажого города с его именем
  menu.insertAdjacentHTML('beforeend', `
  <div class="city__elem">${city.name}</div> 
  `);
});


//Открытие закрытие меню выбора города
document.querySelector('.weather').addEventListener('click', e => {
  if (e.target && e.target.classList.contains("city__active")) {
    menu.classList.toggle("active")
  } else {
    menu.classList.remove("active");
  }
})

// Смена города
menu.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("city__elem")) {
    active.textContent = e.target.textContent;
    currentState = e.target.textContent;
  }  
})

  // fetch запрос на сервер за данными по клику на кнопку
btn.addEventListener("click", e => { 
  //Запрос в список городов чтобы найти там выбранный
  let stateID = byCityList.find(city => {
    return city.name == currentState // Сравниваем текущий город с именами в списке и получаем id подходящего
  }).id;
  console.log(stateID);
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${stateID}&appid=7e04d4f89530a7688a2ef4295fa47bb7`) //Запрос к api по id города
  .then(response => response.json()) //
  .then(data => render(data));
  });



function render(resp) {
  console.log(resp);
  let main = resp.weather[0].main;
  let temp = resp.main.temp - 273;
  city.textContent = currentState;
  tempK.textContent = Math.round(temp);
  status.textContent = main;
  if (main == 'Snow') {
    icon.innerHTML = `${icons.Snow}`;
  } 
  else if (main == 'Rain') {
    icon.innerHTML = `${icons.Rain}`;
  }
  else if (main == 'Clear') {
    icon.innerHTML = `${icons.Clear}`;
  }
  else if (main == 'Clouds') {
    icon.innerHTML = `${icons.Clouds}`;
  }
  else if (main == 'Thunderstorm') {
    icon.innerHTML = `${icons.Thunderstorm}`;
  }
  else if (main == 'Drizzle') {
    icon.innerHTML = `${icons.Drizzle}`;
  }
  else {
    icon.innerHTML = `${icons.Clouds}`;
  };
}


