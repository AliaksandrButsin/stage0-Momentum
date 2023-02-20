// Clock ----------------------------------------------------------------------------------------------------------------
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); 
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000); 
}

showTime();
// Clock ----------------------------------------------------------------------------------------------------------------
// Date ----------------------------------------------------------------------------------------------------------------
function showDate() {
    const date1 = new Date();
    const lang = 'en-EN';
    const options = {month: 'long', day: 'numeric', weekday: 'long', month: 'long'};
    const currentDate = date1.toLocaleDateString(lang, options); 
    date.textContent = currentDate;
}

showDate()
// Date ----------------------------------------------------------------------------------------------------------------
// Greeting 1 ---------------------------------------------------------------------------------------------------------------
function getTimeOfDay(h) {
    if ( h >= 0 && h < 6 ) {
        return 'night'
    };
    if ( h >= 6 && h < 12 ) {
        return 'morning'
    };
    if ( h >= 12 && h < 18 ) {
        return 'afternoon'
    };
    if ( h >= 18 && h < 23 ) {
        return 'evening'
    }
    if ( h >= 23 && h < 24 ) {
        return 'night'
    }
    if ( h > 23 ) {
        return 'Это мера времени не используется на платене Земля'
    }
}

function showGreeting() {
    const newDate = new Date();
    const hours = newDate.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}
showGreeting()

// Greeting 1 ---------------------------------------------------------------------------------------------------------------
// Greeting Name ---------------------------------------------------------------------------------------------------------------

function setLocalStorage() {
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    const name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);
// Greeting Name ---------------------------------------------------------------------------------------------------------------
// Body background ---------------------------------------------------------------------------------------------------------------
 
const getRandomNum = () => {
    return (Math.floor (Math.random() * 20 )+1)
 }
let randomNum = getRandomNum();
const newDate = new Date();
const hours = newDate.getHours();
const timeOfDay = getTimeOfDay(hours);
function setBg() {
   
    const bgNum = String (randomNum).padStart(2 , '0');
    const body = document.querySelector('body');
    const img = new Image();
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/01.jpg';
    img.onload = () => {      
      body.style.backgroundImage = `url(${`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`})`
    }; 
}

setBg()
// Body background ---------------------------------------------------------------------------------------------------------------
// Body background list ---------------------------------------------------------------------------------------------------------------
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getSlideNext() { 
    if (randomNum <20) {
        randomNum = randomNum + 1;
        }
    else { randomNum = 1;}
    setBg();
}
function getSlidePrev() {
    if (randomNum > 1) {
        randomNum = randomNum - 1;
        }
    else { randomNum = 20;}
    setBg();
}
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
// Body background list ---------------------------------------------------------------------------------------------------------------
// Weather ---------------------------------------------------------------------------------------------------------------

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city')
city.addEventListener('change', getWeather)

async function getWeather() {  
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=51764fe870c4f1ec1e742c8973b62b40&units=metric`;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=51764fe870c4f1ec1e742c8973b62b40&units=metric`
    const res = await fetch(url);
    const data = await res.json();     
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed );

    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent =  `Humidity: ${data.main.humidity}%`;
    wind.textContent =  `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
  }
  getWeather()

// Weather ---------------------------------------------------------------------------------------------------------------
// Quotes ---------------------------------------------------------------------------------------------------------------

    // async function getQuotes() {  
    //     const quotes = 'data.json';
    //     const res = await fetch(quotes);
    //     const data = await res.json(); 
    //     console.log(data);
    // }
    // getQuotes();  
  
  
  
  
  
  
// Quotes ---------------------------------------------------------------------------------------------------------------