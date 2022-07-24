const DAY= new Date()

let currentDay = DAY.getDay()
let weekday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById("day").innerHTML= (weekday[currentDay]);

let currentMonth= DAY.getMonth()

let currentDate= DAY.getDate()

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML= (months[currentMonth]+" "+ currentDate);

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  let ampm = "AM";
  if(h>=12)
  {
    ampm = "PM";
    h -= 12;
    h = addZero(h);
  }

  let time = h + ":" + m + ":" + s + " " + ampm;
  document.getElementById("time").innerHTML = time;