/*
  Function: getTrip
    Returns a hardcoded date for a trip and the destination based
    on the dropdown value.
  Params: trip (string) -- value from dropdown menu.
  Returns: array -- Date object, string.
*/
function getTrip(trip) {
  //trip datetimes
  let timeToTrip = "";
  let destination = "";

  if (trip === "dc") {
    timeToTrip = new Date(2026, 11, 22, 17, 15, 45);
    destination = "Washington DC";
  } else if (trip === "ct") {
    timeToTrip = new Date(2026, 12, 24, 8, 10, 59);
    destination = "Connecticut";
  } else if (trip == "az") {
    timeToTrip = new Date(2027, 3, 6, 9, 30, 10);
    destination = "Arizona";
  } else if (trip == "tmb") {
    timeToTrip = new Date(2027, 7, 14, 12, 0, 0);
    destination = "Tour du Mont Blanc (Geneva)";
  }

  return [timeToTrip, destination];
}

/*
  Function: calculateTimeToTrip
    Based on the date of the trip, calculates and returns the
    amount of time until the trip.
  Params: trip (string) -- value from dropdown menu.
  Returns: string -- countdown clock.
*/
function calculateTimeToTrip(trip) {
  //current datetime
  const datetime = new Date();

  let tripInfo = getTrip(trip);

  //calculate difference
  let seconds = Math.abs(tripInfo[0] - datetime) / 1000;

  //isolate number of days
  const days = Math.floor(seconds / 86400);
  seconds -= days * 86400;

  //isolate number of hours
  const hours = Math.floor(seconds / 3600) % 24;
  seconds -= hours * 3600;

  //isolate number of minutes
  const minutes = Math.floor(seconds / 60) % 60;
  seconds -= minutes * 60;

  //isolate number of seconds
  seconds = Math.floor(seconds % 60);

  if (days < 0) {
    return "The trip is over and I had a great time!";
  } else {
    return (
      tripInfo[1] +
      "<br>" +
      days.toString() +
      " days " +
      hours.toString() +
      " hours " +
      minutes.toString() +
      " minutes " +
      seconds.toString() +
      " seconds"
    );
  }
}

/*
  Function: runCountDownClock
    Sets the action listener for the dropdown menu items. The event that 
    each menu item triggers is to start an interval clock that calculates
    the time until the trip each second.
  Params: none.
  Returns: none.
*/
function runCountDownClock() {
  //create interval var so that it can be reset
  let countdownInterval = null;

  //add event listener for clicking on dropdown items
  document.querySelectorAll("#travellist .dropdown-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      //clear interval var if present
      if (countdownInterval !== null) {
        clearInterval(countdownInterval);
      }

      //clear current text and set new trip value
      document.getElementById("countdownclock").innerHTML = "";
      const trip = event.target.getAttribute("value");

      //create and start new interval for clock, updating every second
      countdownInterval = setInterval(() => {
        const timeToTrip = calculateTimeToTrip(trip);
        document.getElementById("countdownclock").innerHTML = timeToTrip;
      }, 1000);
    });
  });
}

//check if on travel page and only run script if so
const path = window.location.pathname;
var page = path.split("/").pop();
if (page === "travel.html") {
  runCountDownClock();
}
