/*
const
lottoResult
lottoBtn

id값을 이용해서
click 기능을 눌렀을 때

Math.floor(Math.random * 45) + 1;

num1 ~ num6
난수 생성해서 
innertext로 화면 출력하기

*/

const lottoResult = document.getElementById("lottoResult");
const lottoBtn = document.getElementById("lottobutton");
lottoBtn.addEventListener("click", function () {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 45) + 1;

    if (i === 0) {
      result = num;
    } else if (i === 5) {
      result = result + " + " + num;
    } else {
      result = result + ", " + num;
    }
    // 만약에 i가 5라면 "+"를 붙여서 num 추가하기
  }

  lottoResult.innerText = result;
});

/*
const lottonum = new Array(6);

lottoBtn.addEventListener("click", function () {
  for (let a = 0; a < 6; a++) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;

    lottonum[a] = randomNumber;
  }
  lottoResult.innerText = lottonum;
});
*/
