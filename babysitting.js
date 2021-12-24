var day = new Date();
var n = day.getFullYear();

const d = (y, m) => new Date(y, m, 0).getDate() // obtain number of days in selected month

var message = "";

var clicks = sessionStorage.getItem('numClicks');

//document.getElementById("disp").innerHTML = clicks;


// SAVING AND RETRIEVING NUMBER OF COUPONS
function saveClicks(clicks){
    sessionStorage.setItem('numClicks', clicks)
}


function retrieveClicks(){
    clicks = sessionStorage.getItem('numClicks');
    displayClicks();
}

function clearStorage(){
    sessionStorage.clear();
    clicks= 103;
    saveClicks(clicks);
    displayClicks();
}

function displayClicks(){
    document.getElementById("count").innerHTML = clicks;
}



function countDown() {
  if (clicks > 0){
      document.getElementById("count").innerHTML = --clicks;
      saveClicks(clicks);

  }
  else{
      daysUntilNextChristmas();
      document.getElementById("count").innerHTML = message + " days until Christmas 2022 :)";
  }
}

function daysUntilNextChristmas(){

    var daysUntilNextChristmas = 0;

    if(getCurrentYear() == "2021"){
        daysUntilNextChristmas = (365 - 6) + (365 - currentDayOfYear());
        message = daysUntilNextChristmas;
    }
    else if(getCurrentYear() == "2022"){
        daysUntilNextChristmas = (365 - 6) - currentDayOfYear();
    }
    else
    {
        // Bro update the code
    }

}

function currentDayOfYear(){
    var currentMonth = getCurrentMonth();
    var currentYear = getCurrentYear();
    var dayOfCurrentMonth = currentDayOfCurrentMonth();
    var dayOfYear = 0;

    for(let i = 0; i <= currentMonth; i++){

        dayOfYear += d(currentYear, i);
    }

    dayOfYear -= (d(currentYear, currentMonth) - dayOfCurrentMonth) + 1;

    return dayOfYear;
}



function getCurrentMonth(){
    return new Date().getMonth();
}

function getCurrentYear(){
    return new Date().getFullYear();
}

function currentDayOfCurrentMonth(){
    return new Date().getDate();
}
