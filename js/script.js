
/*~~~~~~~~~~~~~~~~~~conuter~~~~~~~~~~~~~~~~~~ */
var secs = document.getElementById("seconds");
var mins = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('nov 01, 2021 01:00:00').getTime(),
    x = setInterval(function() {
      
      let now = new Date().getTime(),
          distance = countDown - now;
      days.innerText = Math.floor(distance / (day)),
      hours.innerText = Math.floor((distance % (day)) / (hour)),
      minutes.innerText = Math.floor((distance % (hour)) / (minute)),
      seconds.innerText = Math.floor((distance % (minute)) / second);
    }, second)



    
    /* ****************start wow ******************** */
    new WOW().init();
    document.documentElement.style.setProperty('--animate-duration', '.5s');
    /* ****************end wow ******************** */





// effect text animation 
  anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.650 + 0.690*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });