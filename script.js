const userSetTime = document.getElementById("userSetTime");
const displaynone = document.getElementById("displaynone");

userSetTime.addEventListener("focus", () => {
  userSetTime.innerText = "00 : 00 : 00";
});

function setTimer() {
  let intervalId;
  let str = userSetTime.innerText.replaceAll(" ", "").split(":");

  const date = new Date(`2022-10-10T${str[0]}:${str[1]}:${str[2]}`);
  displaynone.style.display = "none";

  //takeinput element and transform them
  let hour =
    date.getHours() >= 0 && date.getHours() <= 9
      ? "0" + date.getHours()
      : date.getHours();

  let min =
    date.getMinutes() >= 0 && date.getMinutes() <= 9
      ? "0" + date.getMinutes()
      : date.getMinutes();

  let sec =
    date.getSeconds() >= 0 && date.getSeconds() <= 9
      ? "0" + date.getSeconds()
      : date.getSeconds();

  //container Creation
  const newDiv = document.createElement("div");
  newDiv.id = "container";
  newDiv.innerHTML = `<div id="userInput">
  <span id="settime">Time Left:</span>
  <span contenteditable="true" id="userSetTime">${hour} : ${min} : ${sec}</span>
  <button onclick="deleteTimer(this)">Delete</button>
  <audio id="audioPlayer" src="a.mp3"></audio>
</div>`;

  //creating new intervaldiv
  intervalDiv(newDiv, date);

  document.body.appendChild(newDiv);

  //after every click userInput will be set back to this
  userSetTime.innerText = "00 : 00 : 00";
}

//where magic happens
function intervalDiv(newDiv, date, status) {
  let newInterval = setInterval(() => {
    if (status === "delete") {
      clearInterval(newInterval);
    }

    date.setSeconds(date.getSeconds() - 1);
    let hour =
      date.getHours() >= 0 && date.getHours() <= 9
        ? "0" + date.getHours()
        : date.getHours();

    let min =
      date.getMinutes() >= 0 && date.getMinutes() <= 9
        ? "0" + date.getMinutes()
        : date.getMinutes();

    let sec =
      date.getSeconds() >= 0 && date.getSeconds() <= 9
        ? "0" + date.getSeconds()
        : date.getSeconds();

    //updation of time happens
    newDiv.innerHTML = `<div id="userInput">
    <span id="settime">Time Left:</span>
    <span contenteditable="true" id="userSetTime">${hour} : ${min} : ${sec}</span>
    <button onclick="deleteTimer(this)">Delete</button>
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
      const audioPlayer = document.getElementById("audioPlayer");

      div.id = "container";
      newDiv.innerHTML = `<div id="innerUserInput" style="background-color:#F0F757;">
      <span contenteditable="true" id="timesUp">Time Is Up !</span>
      <button id="innerButton" onclick="stopAudio(this)">Stop</button>
    </div>`;

      clearInterval(newInterval);

      playAudio();

      return;
    }
  }, 1000);
}

// const currentTime = console.log(userSetTime.innerText);
function stopAudio(element) {
  element.nextSiblingElemnet.audioPlayer.stop();
}

function playAudio() {
  const play = new Audio("./a.mp3");
  play.play();
}
