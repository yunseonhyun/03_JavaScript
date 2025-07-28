/*
<h3>문제 1: 클릭할 때 마다 색상 변경하기</h3>
    <div class="problem">
      <h3>문제 1: 클릭할 때마다 색상 변경</h3>
      <p>
        박스를 클릭할 때마다 빨강 → 파랑 → 초록 → 노랑 → 빨강 순서로 색상이
        변경되도록 하세요.
      </p>
      <div id="colorBox">클릭하세요!</div>
    </div>

    <h3>문제 2: 더블클릭으로 크기 변경하기</h3>
    <div class="problem">
      <h3>문제 2: 더블클릭으로 크기 변경</h3>
      <p>
        박스를 더블클릭할 때마다 크기가 100px → 150px → 200px → 100px 순서로
        변경되도록 하세요.
      </p>
      <div id="sizeBox"></div>
      <p>현재 크기: <span id="currentSize">100px</span></p>
    </div>
    */

const colorBox = document.querySelector("#colorBox");

const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;

colorBox.addEventListener("click", function () {
  this.style.backgrounColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  // 현재 인덱스의 색상으로 배경색 변경
  // 인덱스를 다음으로 이동 (마지막이면 0으로)
});

/*문제 2: 더블클릭으로 크기 변경*/

const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");

let val = 100;

sizeBox.addEventListener("dblclick", function () {
  if (val == 100) {
    val = 150;
  } else if (val == 150) {
    val = 200;
  } else if (val >= 200) {
    val = 100;
  }

  sizeBox.style.width = val + "px";
  sizeBox.style.height = val + "px";
  currentSize.innerText = val + "px";
});

/*문제 3: 키보드 입력과 실시간 표시*/

const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

textInput.addEventListener("input", function () {
  display.textContent = `${textInput.value} - 글자수 : ${textInput.value.length}`;
  // 입력된 텍스트와 길이 가져오기
  // display에 "텍스트" - 글자 수: 숫자 형태로 표시
});

textInput.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    textInput.value = ""; // 값 초기화
    display.textContent = "글자 수 : 0";
  }
  // e.key가 "Escape"인지 확인
  // 맞다면 입력창과 표시창 초기화
});
