const time = document.querySelector(".time");

function getTime() {
  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // if (seconds.toString().length === 1) {
  //   seconds = "0" + seconds;
  // }

  // time.innerHTML = hours + ":" + minutes + ":" + seconds + ":";
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getTime();

setInterval(getTime, 1000);

// padstart 라는 함수 알아보기
/*
	const a = "h662"
	a.padStart(6, "0x");
	'0xh662" 가 나옴
	a. padStart에서 6은 6글자를 만들고싶고, 빈 자리에는 0x 를 채워라
	*/
