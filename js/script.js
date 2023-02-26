const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
  }

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
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=51764fe870c4f1ec1e742c8973b62b40&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=51764fe870c4f1ec1e742c8973b62b40&units=metric`
    const res = await fetch(url);
    const data = await res.json();     
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed );

    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent =  `Humidity: ${data.main.humidity}%`;
    wind.textContent =  `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
  }
  getWeather()

  function setLocalStorage1() {
    const city = document.querySelector('.city')
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage1);

  function getLocalStorage1() {
    const city = document.querySelector('.city');
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalStorage1);


// Weather ---------------------------------------------------------------------------------------------------------------
// Quotes ---------------------------------------------------------------------------------------------------------------
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const numRun = () => {
    return (Math.floor (Math.random() * 20 ))
 }
let num = numRun(); 
async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  quote.textContent = `${data[num].text}`;
  author.textContent = `${data[num].author}`;
}
getQuotes();
function getReload() { 
    if (num <20) {
        num = numRun() + 1;
        }
    else { num = 0;}
    getQuotes();
}
changeQuote.addEventListener('click', getReload);
// Quotes --------------------------------------------------------------------------
// Play-List -------------------------------------------------------------------
const playList = [
    {      
      title: 'Aqua Caelestis',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '00:39'
    },  
    {      
      title: 'River Flows In You',
      src: '../assets/sounds/River Flows In You.mp3',
      duration: '01:37'
    },
    {      
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
      },  
      {      
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:50'
      }
  ]
//   console.log (playList)
// Play-List --------------------------------------------------------------
// Player --------------------------------------------------------------------------
let isPlay = false;
let playNum = 0;


const playBtn = document.querySelector('.play');
const playNex = document.querySelector('.play-next');
const playPre = document.querySelector('.play-prev');
const audio = new Audio();

function playAudio() {
if(!isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}
else { audio.pause();
    isPlay = false;}
}
playBtn.addEventListener('click', playAudio);

function toggleBtn() {
    playBtn.classList.toggle('pause');
    }
playBtn.addEventListener('click', toggleBtn);


// function playN() {
//     if(!isPlay) {
//       audio.play();
//         isPlay = true;
//         playBtn.classList.remove('pause')
//     }
//     else { 
//         // audio.pause();
//         isPlay = false;
//         playBtn.classList.add('pause')
//         }
//     }


// Player ----------------------------------------------------------------------

// Player Next Prew -------------------------------------------------------

            function playNext() {
                if (playNum < 3){
                playNum = playNum + 1;
                audio.src = playList[playNum].src;
                audio.currentTime = 0;
                audio.play();
                isPlay = true;
                playBtn.classList.add('pause')
                console.log (playNum)

                }
                else {playNum = 0;
                    audio.src = playList[playNum].src;
                    audio.currentTime = 0;
                    audio.play();
                    isPlay = true;
                    console.log (playNum)
                }
            }
            function playPrev() {
                if (playNum > 0){
                    playNum = playNum - 1;
                    audio.src = playList[playNum].src;
                    audio.currentTime = 0;
                    audio.play();
                    isPlay = true;
                    playBtn.classList.add('pause')
                    console.log (playNum)
                }
                else {playNum = 3;
                    audio.src = playList[playNum].src;
                    audio.currentTime = 0;
                    audio.play();
                    isPlay = true;
                    console.log (playNum)
                    }
            }

            playNex.addEventListener('click', playNext);
            playPre.addEventListener('click', playPrev);

// Player Next Prew --------------------------------------------------------


// let activ = playNum;
// function act(activ) {
//     li.classList.add ('.item-active')
// }
// act(activ)

// Player li ---------------------------------------------------------------
let i = 0;
    playList.forEach(el => {
    const playy = document.querySelector ('.play-list')
    const li = document.createElement('li');
    li.classList.add ('play-item')
    li.textContent = `${playList[i].title}`;
    i = i + 1;
    playy.append(li)
  })
// Player li ----------------------------------------------------------------

// Translate ----------------------------------------------------------------

const greetingTranslation = [
    {      
        Russian: 'Доброе',
        English: 'Good',
        Belorus: 'Добры'
      },  
]

// Translate ----------------------------------------------------------------
