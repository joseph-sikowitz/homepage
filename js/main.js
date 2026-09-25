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

function runCountDownClock() {
  let countdownInterval = null;
  document.querySelectorAll("#travellist .dropdown-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      if (countdownInterval !== null) {
        clearInterval(countdownInterval);
      }

      document.getElementById("countdownclock").innerHTML = "";
      const trip = event.target.getAttribute("value");

      countdownInterval = setInterval(() => {
        const timeToTrip = calculateTimeToTrip(trip);
        document.getElementById("countdownclock").innerHTML = timeToTrip;
      }, 1000);
    });
  });
}

const path = window.location.pathname;
var page = path.split("/").pop();
if (page === "travel.html") {
  runCountDownClock();
}
