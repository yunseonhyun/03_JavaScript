// 문제 1: 나이별 영화 관람 등급
function 영화등급확인() {
  const 나이인풋 = document.getElementById("input1");
  const 나이 = Number(나이인풋.value);

  if (나이 < 12) {
    alert("전체관람가 영화만 볼 수 있어요! 🎬");
  } else if (나이 < 15) {
    alert("12세 관람가까지 볼 수 있어요! 🍿");
  } else if (나이 < 19) {
    alert("15세 관람가까지 볼 수 있어요! 🎭");
  } else {
    alert("모든 영화를 관람할 수 있어요! 🌟");
  }
}

// 문제 2: 온도에 따른 옷차림 추천
function 옷차림추천() {
  const 온도인풋 = document.getElementById("input2");
  const 온도 = Number(온도인풋.value);

  if (온도 < 5) {
    alert("패딩과 목도리를 꼭 챙기세요! 🧥");
  } else if (온도 < 15) {
    alert("코트나 자켓을 입으세요! 🧥");
  } else if (온도 < 25) {
    alert("가디건이나 얇은 겉옷이 좋아요! 👔");
  } else {
    alert("반팔, 반바지로 시원하게! 👕");
  }
}

// 문제 3: 시험 점수별 부모님 반응 예측
function 부모님반응예측() {
  const 점수인풋 = document.getElementById("input3");
  const 점수 = Number(점수인풋.value);

  if (점수 >= 90) {
    alert("용돈 인상! 치킨 사줄게! 🍗");
  } else if (점수 >= 80) {
    alert("잘했다! 계속 열심히 해! 👏");
  } else if (점수 >= 70) {
    alert("조금 더 노력해보자... 📖");
  } else {
    alert("게임은 당분간 금지야... 😤");
  }
}

// 문제 4: 카페 할인 쿠폰 적용
function 할인쿠폰적용() {
  const 금액인풋 = document.getElementById("input4");
  const 금액 = Number(금액인풋.value);

  if (금액 < 10000) {
    alert(`할인이 적용되지 않습니다. 결제금액: ${금액}원`);
  } else if (금액 < 30000) {
    const 할인금액 = 금액 * 0.9;
    alert(`10% 할인! 결제금액: ${할인금액}원 💰`);
  } else if (금액 < 50000) {
    const 할인금액 = 금액 * 0.8;
    alert(`20% 할인! 결제금액: ${할인금액}원 💰💰`);
  } else {
    const 할인금액 = 금액 * 0.7;
    alert(`30% 할인! 결제금액: ${할인금액}원 💰💰💰`);
  }
}

// 문제 5: 운동 강도 추천
function 운동강도추천() {
  const 시간인풋 = document.getElementById("input5");
  const 시간 = Number(시간인풋.value);

  if (시간 < 30) {
    alert("가벼운 스트레칭이나 산책을 추천해요! 🚶‍♀️");
  } else if (시간 < 60) {
    alert("중간 강도 운동이 적당해요! 💪");
  } else if (시간 < 120) {
    alert("고강도 운동으로 도전해보세요! 🔥");
  } else {
    alert("오늘은 충분히 했어요! 휴식을 취하세요! 😴");
  }
}
