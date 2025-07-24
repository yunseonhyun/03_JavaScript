function 잔액확인하기() {
  //1. 친구가 빌려달라는 금액 javaScript에서 확인

  //2. 만약에 친구가 빌려달라는 금액이 5000원 이상이면
  //  잔액이 없어서 힘들것 같아
  // 5000원 이하면 언제까지 돌려줄 수 있는지 알려줘^^ 를 보냄
  //(alert) 사용 if - else 문 사용
  const money = document.getElementById("input1");
  const 잔액 = Number(money.value);

  if (잔액 >= 5000) {
    alert("잔액이 없어서 힘들것 같아");
  } else {
    alert("언제까지 돌려줄 수 있는지 알려줘^^");
  }
}

function 홀짝기능() {
  const 인풋2 = document.getElementById("input2");
  const val2 = Number(인풋2.value);

  if (val2 % 2 == 1) {
    //홀수라면
    alert("홀수입니다.");
  } else {
    //짝수라면
    alert("짝수입니다.");
  }
}

//확인하기 버튼을 클릭했을때
const inputAge = document.getElementById("inputage");
function 체크4() {
  //입력한 나이 값 얻어오기
  const 받아온나이값 = Number(inputAge.value);

  // 1. 0미만 150초과 -> 잘못입력하셨습니다.
  // 2. 0세 ~ 13세 -> 어린이
  // 3. 14세 ~ 19세 -> 청소년

  // || = or, 또는
  // && = and, 양쪽 모두 참일 경우
  if (받아온나이값 < 0 || 받아온나이값 > 150) {
    alert("잘못 입력 하셨습니다");
  } else if (받아온나이값 >= 0 && 받아온나이값 <= 13) {
    alert("어린이");
  } else if (받아온나이값 <= 19) {
    alert("청소년");
  } else {
    alert("성인");
  }
}

/*
        1. 입력된 거리를 js로 가져오기
        const 인풋3
        const amount에 value값 저장

        3km 이하 기본 요금 3000원
        3km 초과 10km 이하 8000원

        10km 초과 모두 20000원
        alert 주행거리 비용은 000입니다.
        */

const 인풋3 = document.getElementById("input3");

function 주행거리계산기능() {
  const amount = Number(인풋3.value);
  if (amount <= 3) {
    alert("주행거리 비용은 3000원 입니다.");
  } else if (amount <= 10) {
    alert("주행거리 비용은 8000원 입니다.");
  } else {
    alert("주행거리 비용은 20000원입니다.");
  }
}
