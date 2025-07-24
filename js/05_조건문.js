const 인풋1 = document.getElementById("input1");
function 체크1() {
  const val = Number(인풋1.value); //입력받은 값을 숫자로 변경

  // 만약에 클라이언크가 입력받은 숫자가 0보다 클 경우 = true
  if (val > 0) {
    alert("클라이언트가 입력한 숫자는 0보다 큰 양수입니다");
  }
  // 만약에 클라이언트가 입력한 숫자값이 0이랑 같거나 0보다 작으경우 = true
  if (val <= 0) {
    alert("클라이언트가 입력한 숫자는 0과 같거나 음수입니다.");
  }
}

function 체크2() {
  const 인풋2 = document.getElementById("input2");
  const 값 = Number(인풋2.value);
  if (값 > 0) {
    alert("양수입니다");
  } else {
    alert("음수입니다.");
  }
}
