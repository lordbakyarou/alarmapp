const userSetTime = document.getElementById("userSetTime");
const displaynone = document.getElementById("displaynone");

userSetTime.addEventListener("focus", () => {
  userSetTime.innerText = "00 : 00 : 00";
});

function setTimer() {
  let str = userSetTime.innerText.replaceAll(" ", "").split(":");

  const date = new Date(`2022-10-10T${str[0]}:${str[1]}:${str[2]}`);
  displaynone.style.display = "none";
  date.getSeconds;

  //takeinput element and transform them

  //container Creation
  const newDiv = document.createElement("div");
  newDiv.id = "container";
  newDiv.innerHTML = `<div id="userInput">
  <span id="settime">Time Left:</span>
  <span contenteditable="true" id="userSetTime">${str[0]} : ${str[1]} : ${str[2]}</span>
  <button onclick="setTimer()">Delete</button>
</div>`;

  thisis(newDiv, date);

  document.body.appendChild(newDiv);
}

function thisis(newDiv, date) {
  let newInterval = setInterval(() => {
    newDiv.innerHTML = `<div id="userInput">
    <span id="settime">Time Left:</span>
    <span contenteditable="true" id="userSetTime">${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</span>
    <button onclick="setTimer()">Delete</button>
  </div>`;
  }, 1000);
}

// const currentTime = console.log(userSetTime.innerText);
