// Clock ----------------------------------------------------------------------------------------------------------------
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const newDate = new Date();
const hours = newDate.getHours();
const timeOfDay = getTimeOfDay(hours);

const currentTime = newDate.toLocaleTimeString(); 


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
    const options = {month: 'long', day: 'numeric', weekday: 'long', month: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
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
    console.log (getTimeOfDay(h));
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

function setBg() {
    const getRandomInt = () => {
        if (Math.floor((Math.random()* 20)) === 0) {
            return 1;
        }
        else {return Math.floor(Math.random() * 20) + 1 ;}
      };

    const bgNum = String (getRandomInt()).padStart(2 , '0');
    const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${url})`;
}
setBg()

// Body background ---------------------------------------------------------------------------------------------------------------