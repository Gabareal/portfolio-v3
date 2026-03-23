let cursor = document.querySelector('.customCursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});

//Shoutout this youtube video for timer tutorial https://www.youtube.com/watch?v=34kbdFLpff8
//Might consider that as ai assistance who knows

const DAYS = document.getElementById('dayCounter-days');
const HOURS = document.getElementById('dayCounter-hours');
const MINUTES = document.getElementById('dayCounter-minutes');
const SECONDS = document.getElementById('dayCounter-seconds');

const STARTDATE = new Date("January 15 2026 11:08:42").getTime();
function timer () {
    const CURRENTDATE = new Date().getTime();
    const DISTANCE = CURRENTDATE - STARTDATE;

    const SETDAYS = Math.floor(DISTANCE / 1000 / 60 / 60 / 24);
    const SETHOURS = Math.floor(DISTANCE / 1000 / 60 / 60) % 24;
    const SETMINUTES = Math.floor(DISTANCE / 1000 / 60) % 60;
    const SETSECONDS = Math.floor(DISTANCE / 1000) % 60;

    DAYS.innerHTML = SETDAYS;
    HOURS.innerHTML = SETHOURS;
    MINUTES.innerHTML = SETMINUTES;
    SECONDS.innerHTML = SETSECONDS;
}

setInterval(timer,1000);
