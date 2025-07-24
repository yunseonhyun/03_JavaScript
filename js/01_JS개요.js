/*
모든js파일명.js확장자면
*.js 파일 내부를 <script>태그 내부라고 보면 됨
어떤 특정 js파일 명칭인지 알 수 없으므로 * 어떠한 이라는 표기를 작성한 것임
*/

function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn() 함수 기능 호출되었습니다.");
}

/* JS 맛보기 */
//버튼 클릭 시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); //웹 페이지 문서 내에서 선택할 것(바디태그를)

/* 버튼에 장착된 기능 실행하면 다크모드로 바꾸는 기능(함수) 설정 */
function 어두움모드() {
  body.style.color = "white";
  // bodu 태그 안에 존재하는 스타일에서 글자색상을 흰색으로 변경하겠다.
  body.style.backgroundColor = "black";
  // body 태그 안에 존재하는 스타일에서 배경색상을 검정색으로 변경하겠다.
}

/* 버튼에 장착된 기능 실행하면 라이트모드로 바꾸는 기능(함수) 설정
      글자색상 = 검정 배경색상 = 흰색
      */
function 밝음모드() {
  body.style.color = "black";
  // bodu 태그 안에 존재하는 스타일에서 글자색상을 흰색으로 변경하겠다.
  body.style.backgroundColor = "white";
  // body 태그 안에 존재하는 스타일에서 배경색상을 검정색으로 변경하겠다.
}

// <> 태그를 작성하는 순간부터 javaScript 언어를 작성할 수 있음
//한줄 주석
/* script 범위 태그 주석 : JS 코드를 주석으로 작성할 수 있고,
          설명이나표기를 작성할 수 있음*/

//function : 함수, 기능
/*
          매개변수(=파라미터) : 중간에 개입하여 값을 변하게 하는 변수이름
          媒介變數 중매 매 개입할 개 변할 변 셀 수
          
          function 함수이름(매개변수 자리) {
              기능에 대해서 작성하는 공간!
          } 
      
          function 함수이름(매개변수의 값이 없을 수 있음) {
              기능에 대해서 작성하는 공간!
          } 
          
          function 함수이름() {
              함수기능에 대해 작성하는 공간        
              }
          
          function 함수이름(매개변수의 값이 1개 이상일 수 있음) {
              기능에 대해서 작성하는 공간!
          } 

          function 함수이름(name1, name2, name3, ...) {
              함수기능에 대해 작성하는 공간!
          } 
          */
//JS부터는 Alt L Alt O로 킨 브라우저가 작동하지 않을 수 있음
//파일이 위치한 폴더를 열어 html 파일을 열어주기

function internalFn() {
  // alert : 경고, 알리다 (JS : 알림창, 메세지)
  alert("버튼이 클릭되었습니다.");
}

const 바디 = document.querySelector("body"); //body 태그 내 정보를 바디라는 이름에 담아주기
// 위 버튼에서 전달받은 'lightblue' 컬러가
// 색상이라는 변수 이름에 담겨지고
// 담겨진 'lightblue'는 배경색상으로 변경
function 블루모드(색상) {
  바디.style.backgroundColor = 색상;
}
