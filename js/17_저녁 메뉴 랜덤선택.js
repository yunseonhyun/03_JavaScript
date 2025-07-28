const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menuInput = document.getElementById("menuInput");
const addBtn = document.getElementById("addBtn");
const validationMessage = document.getElementById("validationMessage");
const menuItems = document.getElementById("menuItems");
const menuCount = document.getElementById("menuCount");

const menus = [
  "곱창",
  "김밥",
  "제육볶음",
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

// 한글, 영어, 숫자 포함 정규식
const menuRegex = /^[가-힣a-zA-Z0-9\s]{2,20}$/;

// 메뉴 목록 화면에 표시
function displayMenus() {
  menuItems.innerHTML = "";
  /* 
    createElement = 태그 내부에 추가로 태그 및 요소 넣을수 있음
    forEach = 각 배열의 요소에 대해 주어진 함수를 한번씩 실행하는 배열 메서드
    예를 들어
    const 과일들 = ["사과","바나나","오렌지"];
    내부에 존재하는 과일들을 한번씩 모두 출력하는 향상된 for문
    사용방법
    과일들.forEach((과일) => {
        // 과일을 한번씩 꺼냈을때 실행할 기능들 작성
        // 주로 배열에서 index 대신에 가볍게 문자열을 순회하여 출력할 때 많이 사용
        
        }) 
    
    */

  menus.forEach((menu) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = menu;
    menuItems.appendChild(menuItem);
  });
  menuCount.textContent = menus.length;
}
// displayMenus() 만들어진 기능을
// html 화면이 보이자마자 사용할 수 있도록 호출
displayMenus();

// 랜덤Math.random 사용해서 메뉴 랜덤으로 선택하기

// 뽑기 버튼에 해당하는 selectBtn에 클릭했을 때
// 현재 메뉴 목록에 작성된 메뉴를 랜덤으로 선택하기

addBtn.addEventListener("click", function () {
  const newMenu = menuInput.value.trim();
  // 빈 값 체크
  if (newMenu.length === 0) {
    validationMessage.textContent = "메뉴를 입력해주세요.";
    validationMessage.className = "validation-message error";
    // input 창으로 focus 맞추기
    menuInput.focus();
    return;
  }

  if (!menuRegex.test(newMenu)) {
    // 정규식과 소비자가 작성한 메뉴입력을 비교했을때
    //정규식과 일치하지 않는게 사실이라면 = true로 설정하겠다 맨 앞에 ! 붙여줌
    // return으로 되돌리기

    validationMessage.textContent =
      "한글, 영어, 숫자만 포함해서 2~20글자로 입력해주세요.";
    validationMessage.className = "validation-message error";
    // input 창으로 focus 맞추기
    menuInput.focus();
    return;
  }

  if (menus.includes(newMenu)) {
    // 메뉴 목록에 소비자가 작성한 메뉴 입력값이 존재하는게 맞다면
    validationMessage.textContent = "이미 존재하는 메뉴입니다.";
    validationMessage.className = "validation-message error";
    menuInput.focus();
    return; // displayMenus() 까지 가지 못하도록 기능 중단할 수 있도록 되돌리기
  }
  // 2번 정규식 검사 test 에서 문제가 없을 경우 true 일경우
  menus.push(newMenu);
  menuInput.value = "";
  validationMessage.textContent = `${newMenu}메뉴가 추가되었습니다.`;
  validationMessage.className = "validation-message success";
  // 추가된 메뉴를 다시 볼 수 있도록 displayMenu() 기능 호출
  displayMenus();
});

/* 
className
HTML 요소 전체 class 속성을 문자열로 다루는 방식 한 번에 교체할 때 사용

classList
HTML 요소의 class들을 개별적으로 관리하는 방식
class를 하나씩 추가/제거/토글 기능


*/

// menuInput Enter 키로 메뉴 추가하기
menuInput.addEventListener("keyup", (e) => {
  // 만약에 Enter 키가 입력 됐다면
  if (e.key === "Enter") {
    // 추가하기
    menus[menus.length + 1] = menuInput.value;
  }
});

// 메뉴 랜덤으로 선택 가능
selectBtn.addEventListener("click", function () {
  // 만약에 length가 === 0이라면
  // 선택할 멘뉴가 없습니다 alert 띄운후
  // return; 되돌려 보내기
  if (menus.length === 0) {
    alert("선택할 메뉴가 없습니다");
    return;
  } else {
    // 메뉴가 존재한다면 랜덤함수 사용해서
    // const selectMenu = menus[랜덤번호]로 메뉴 선택할 수 있도록 설정

    // menuResult에 selectedMenu 글씨가 보이도록 설정
    const selectMenu = menus[Math.floor(Math.random() * menus.length)];
    menuResult.textContent = selectMenu;
  }
});
