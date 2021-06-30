var divSecond, divMinute, divHour;

divSecond = document.getElementById("second");
divMinute = document.getElementById("minute");
divHour = document.getElementById("hour");

var date = new Date();
var hours,minutes,seconds;

function changeFormat(unit){
    if(unit <=9){
      return "0"+unit;
    }else{
      return unit;
    }
}

  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  function increase_second(){
      second += 1;
      if(second > 59){
        minutes = increase_minute(minutes);
        second = 0;
      }
      return second;
  }
  function increase_minute(){
      minute += 1;
      if(minute > 59){
        hours = increase_hour(hours);
        minute = 0;
      }
      return minute;
  }
  function increase_hour(){
    hour += 1;
    if(hour > 23){
      hour = 0;
    }
      return hour;
  }
  for(var counter = 0; counter < seconds; counter++){
    divSecond.inner.Text += "S"
  }
  for(var counter1 = 0; counter1 < minutes; counter1++){
    divSecond.inner.Text += "M"
  }
  for(var counter2 = 0; counter2 < hours; counter2++){
    divSecond.inner.Text += "H"
  }
  setInterval(function(){
     seconds = increase_second(seconds);
     if(seconds == 0){
        divSecond.inner.Text += "";
        divMinute.innerText += "M";
     }
     if(minutes == 0 && seconds == 0){
      divSecond.inner.Text += "";
      divHour.innerText += "H";
     }
     if(hours == 0 && minutes == 0);{
      divSecond.inner.Text += "";
     }


     divSecond.inner.Text += "S"
     console.log(seconds);

},1000)








  hours = changeFormat(hours);
  minutes = changeFormat(minutes);
  seconds = changeFormat(seconds);
  console.log(hours+":"+minutes+":"+seconds);
