



/*~~~~~~~~~~~~~~~~~~conuter~~~~~~~~~~~~~~~~~~ */
var secs = document.getElementById("seconds");
var mins = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('May 4, 2022 09:30:00').getTime(),
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



    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });