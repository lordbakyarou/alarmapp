const userSetTime = document.getElementById("userSetTime");
const displaynone = document.getElementById("displaynone");

userSetTime.addEventListener("focus", () => {
  userSetTime.innerText = "00 : 00 : 00";
});

function setTimer() {
  let str = userSetTime.innerText.replaceAll(" ", "").split(":");

  const date = new Date(`2022-10-10T${str[0]}:${str[1]}:${str[2]}`);
  displaynone.style.display = "none";
  date.setSeconds;

  //takeinput element and transform them

  //container Creation
  const newDiv = document.createElement("div");
  newDiv.id = "container";
  newDiv.innerHTML = `<div id="userInput">
  <span id="settime">Time Left:</span>
  <span contenteditable="true" id="userSetTime">${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</span>
  <button onclick="setTimer()">Delete</button>
</div>`;

  thisis(newDiv, date);

  document.body.appendChild(newDiv);

  userSetTime.innerText = "00 : 00 : 00";
}

function thisis(newDiv, date) {
  let newInterval = setInterval(() => {
    date.setSeconds(date.getSeconds() - 1);

    newDiv.innerHTML = `<div id="userInput">
    <span id="settime">Time Left:</span>
    <span contenteditable="true" id="userSetTime">${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</span>
    <button onclick="setTimer()">Delete</button>
  </div>`;

    console.log(
      date.getHours() == "0" &&
        date.getMinutes() == "0" &&
        date.getSeconds() == "0"
    );

    if (
      date.getHours() == "0" &&
      date.getMinutes() == "0" &&
      date.getSeconds() == "0"
    ) {
      const div = document.createElement("div");
      div.id = "container";
      newDiv.innerHTML = `<div id="innerUserInput" style="background-color:#F0F757;">
      <span contenteditable="true" id="timesUp">Time Is Up !</span>
      <button id="innerButton" onclick="setTimer()">Stop</button>
    </div>`;

      clearInterval(newInterval);

      return;
    }
  }, 1000);
}

// const currentTime = console.log(userSetTime.innerText);
