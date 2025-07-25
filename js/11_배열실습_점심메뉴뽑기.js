const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menus = [
  "곱창",
  "김밥",
  "제욱볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];

selectBtn.addEventListener("click", function () {
  /* 
        Math = JS에서 수학적 계산을 위해 제공되는 내장 객체
                * 내장 객체 : JS 개발팀이 추가적으로 만든 객체 기능
                    따로 설치할 필요 없이 맨 첫글자를 대문자로 작성

            메서드(기능들)
            .random() : 0이상 1미만의 핸덤한 소수를 생성
            .floor(숫자) : 소수점을 버림하여 정수로 만듦(내림 처리)
            .ceil(숫자) : 소수점을 올림하여 정수로 만듦(올림 처리)
            .round(숫자) : 소수점을 반올림하여 5부터는 올림 4이하는 내림 ec) 4.4 -> 4, 4.5 ->  5 
        */

  // menus 배열 index범위 안에서 난수 생성
  const mr = Math.random();
  const randomNumber = Math.floor(mr * menus.length);
  // .random() = 0이상 1미만의 랜덤한 소수
  // menus.length = 15
  // 소수값 * 15개의 메뉴 = 정수.소수
  console.log("Math.random() : " + Math.random());
  console.log("randomNumber : " + randomNumber);
  console.log("menus[randomNumber] : " + menus[randomNumber]);

  menuResult.innerText = menus[randomNumber];
});
