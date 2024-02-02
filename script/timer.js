var countDownDate = new Date("Feb 24, 2024 18:00:00").getTime();

// Run myfunc
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the time left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + " days "
document.getElementById("hours").innerHTML = hours + " hours " 
document.getElementById("mins").innerHTML = minutes + " minutes " 
document.getElementById("secs").innerHTML = seconds + " seconds " 
}, 1000);
