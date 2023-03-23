// 시계 만들기
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

// 명언함수
const QUOTES = "quotes";

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살지맙시다",
        "그래도 열심히 살아야지.",
        "열심히 살면 뭐해",
        "열심히 살면 반드시 빛이온다.",
      ])
    );
    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerHTML =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();
/* 로컬스토리지 : 웹브라우저에 저장공간. 명언을 저장해두고 불러오기 등
localstorage, localstorage.setItem("key", "value");
localstorage.getItem("key");
5mb까지 저장할 수 있음. 컴퓨터 껐다 켜도 남아있음.
삭제하려면 localstorage.removeItem("키값");
*/

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
}
