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

let isLoading = false;

async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");

  if (!searchInput.value) return;
  if (isLoading) return;
  // 검색요청 반복 금지. 여기까지옴 === isLoading false

  //   // 프론트엔드에서 백엔드로
  isLoading = true;
  const question = searchInput.value;

  searchInput.value = "검색 중 입니다... 잠시만 기다려주세요.";

  // 프론트엔드에서 백엔드
  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question, // 바디부분임. 키값과 밸류값(question)이 같으면 {question: question,} question,으로 쓰면 됨. JSON형태로 전송. 이미지같은 경우는 예외
      //서버에 post요청과 get 요청이란게 있음. 강사님은 포스트 요청을 해놓음.
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
      // 헤더부분임. JSON형태로 전송. 어떠한 양식으로 전송하는지. 위 바디부분의 데이터에 대한 데이터.
    }
  );
  // console.log(response); // 이렇게 작성하면 프론트에서 백엔드로 보냈는데 응답시긴이 있기 때문에 바로 console.log(response)찍으면 프로미스 팬딩 뜸. 따라서 response에 await를 붙여야함. 그런데 await를 아무 함수에나 못쓰기 때문에 함수명 앞에 async를 붙여줘야 함. 비동기 방식임.

  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }

  searchInput.value = "";
  isLoading = false;
}

function onClickToggle() {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  } else {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  }
}
