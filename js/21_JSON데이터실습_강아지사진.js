"https://api.thedogapi.com/v1/images/search";

const randomDog = document.getElementById("randomDog");
const content = document.getElementById("content");

randomDog.addEventListener("click", () => {
  content.innerHTML = '<div class="loading">귀여운 강아지를 찾는중 ...</div>';

  fetch("https://api.thedogapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      content.innerHTML = `
        <strong>id : </strong> ${data[0].id} <br>
        <strong>URL 주소 확인 : </strong> ${data[0].url}<br>
        <img src="${data[0].url}" alt="귀여운 강아지" class="dog-image"/>
        `;
    });
});
/** TODO 코드를 작성해야하거나, 코드 설명, 코드 내용 포함 주소
 * 
 *  parse() json() 메서드 차이! 
 * 
 *  JSON.parse()
 *  JavaScript의 내장 메서드
 *  JSON 문자열을 JavaScript 객체로 변환
 *  동기적 처리
 * 
 *  response.json()
 *  FetchAPI의 Response 객체 메서드
 *  URL 응단 본문을 JSON으로 받아 JavaScript 객체로 변환
 *  비동기적 처리
 * 
 *  동기    : 은행 번호표 업무 순차적으로 시작하고 종료 
 *            직렬 업무 형태
 * 
 *  비동기  : 카페 주문 카페 주문을 먼저 헀지만 뒤에 있는 사람의 음료가 먼저 나오기도 함
 *            카페 주문을 기다리며 다른 업무를 할 수 있음
 *            병렬 업무 형태
 * 
 */