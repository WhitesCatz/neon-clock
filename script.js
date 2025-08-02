function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("hours").textContent = hours;
  document.getElementById("date").textContent = `${
    days[now.getDay()]
  }, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

updateClock();

setInterval(updateClock, 1000);