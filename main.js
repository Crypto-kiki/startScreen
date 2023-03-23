const time1 = document.querySelector(".time1");

function getTime1() {
  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // if (seconds.toString().length === 1) {
  //   seconds = "0" + seconds;
  // }

  // time.innerHTML = hours + ":" + minutes + ":" + seconds + ":";
  time1.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getTime1();

setInterval(getTime1, 1000);

// padstart 라는 함수 알아보기
/*
	const a = "h662"
	a.padStart(6, "0x");
	'0xh662" 가 나옴
	a. padStart에서 6은 6글자를 만들고싶고, 빈 자리에는 0x 를 채워라
	*/

// 상하반전
const time2 = document.querySelector(".time2");

function getTime2() {
  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  time2.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getTime2();

setInterval(getTime2, 1000);
