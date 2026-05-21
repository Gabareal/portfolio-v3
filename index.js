let cursor = document.querySelector('.customCursor');
//hello
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

const ANSWERS = {
    1: "I dont have a favourite colour, but somehow all of my interests gravitate to the colour blue.",
    2: "As an early 2000 to 2010s kid, the sites that I grew up with weren't so vibrant to the point of the early 2000s, or as dull as the major sites that we all rotate between (Youtube, Instagram, Whatsapp). Looking at neocities, I realised what I was missing out on. The vibrant colours, \"excessive\" gifs and images, a chatic blend of elements born of personal choices and not just what was necessary. So when making this site, I incorporated \"retro\" styles such as the pixel art backgrounds and text, and added some gifs. The layout is still quite modern, with the inspiration from notion. Also, the ultrakill font LOL",
    3: "When making this site, I wanted it to not be too serious, and most importantly have fun making it. Previous iterations of my website portfolios were too focused on only showing what was necessary, and not what I liked. It led to me having no motivation to update them. Especially with the rise of AI and slop code, the importance of really showing yourself, and not just what's technically impressive, became more apparent. Thats why I put a lot of GIFs, funny timers and a contact me textbox that doesn't work.",
    4: "Sure! Send me a message on the guestbook and your site, and I will check it out!",
    5: "NO. Every line of html waas written by me, and every pixel of the background is made by me. Even this pfp of the smiley face is made by me in 10 minutes (Thats why its so badly shaded). All GIFs has been properly credited as well. The banner image in the header is made with a pixel art generator online using pixelartvillage.com, but I dont think it is a generative AI. The timer was made from a youtube video (url credited in the js file), and the code looks suspiciously coded with AI, so that might count. Otherwise, this site is made by my own hands, sweat and stupidity.",
    6: "Yes. 100%. Don't check the index.js file", // Why are you here?
    7: "No clue. You tell me.",
    8: "Aw, thanks! I appreciate it!"
}

const QUESTIONS = {
    1: "What is your favourite colour",
    2: "Why did you choose this aesthetic?",
    3: "Why did you make this site?",
    4: "Can I be your net neighbour?",
    5: "Is this site coded with AI?",
    6: "Am I talking to a real person right now?",
    7: "What is a \"gabbage\"?",
    8: "I really LOVE your site WOW!"
}

// Source - https://stackoverflow.com/a/7265613
// Posted by armen.shimoon, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-21, License - CC BY-SA 4.0


var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      target.append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
};

var MAINQNACONTAINER = document.getElementById('qna-container');
var CHOOSEQUESTION = document.getElementById('qna-choices');
var ASKQUESTIONCONTAINER = document.getElementById('qna-select-question');
var USERCHATBUBBLE = document.getElementsByClassName('qna-user-chatbubble');

function loadmessage(question) {
    console.log(question);
    // remove the question selection container first
    ASKQUESTIONCONTAINER.remove();

    // add a new message container by user displaying question asked
    var newQuestionContainer = document.createElement('div');
    newQuestionContainer.classList.add('qna-you-message-container');
    
    var userPfp = document.createElement('img');
    userPfp.src = "./pics/default_pfp.png";
    userPfp.classList.add('qna-pfp');
    
    var questionBubble = document.createElement('div');
    questionBubble.classList.add('qna-chatbubble');
    questionBubble.textContent = QUESTIONS[question]
    
    newQuestionContainer.appendChild(userPfp);
    newQuestionContainer.appendChild(questionBubble);

    MAINQNACONTAINER.appendChild(newQuestionContainer);
    // Append answer
    var newAnswerContainer = document.createElement('div');
    newAnswerContainer.classList.add('qna-me-message-container');
    
    var userPfp = document.createElement('img');
    userPfp.src = "./pics/smiley.png";
    userPfp.classList.add('qna-pfp');
    
    var answerBubble = document.createElement('div');
    answerBubble.classList.add('qna-chatbubble');
    showText(answerBubble,ANSWERS[question],0,30)
    
    newAnswerContainer.appendChild(answerBubble);
    newAnswerContainer.appendChild(userPfp);

    MAINQNACONTAINER.appendChild(newAnswerContainer);

    // Insert question selection container back
    MAINQNACONTAINER.appendChild(ASKQUESTIONCONTAINER);

    MAINQNACONTAINER.scrollTo(0, MAINQNACONTAINER.scrollHeight);
}