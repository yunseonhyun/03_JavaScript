/* JS 객체
    -{K:V, K:V, K:V} 형태
    
    - (중요) Key는 무조건 문자열(string)
        -> "Key", 'key', key ("",'' 작성 안해도 JavaScript는 String으로 인식)
        
    - key는 기본적으로 오름차순으로 정렬된다.(short, ASC)

        
*/
/* {} 객체 생성 + 다루기 */

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // const product = {}; // 비어있는 객체 생성

  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "samsung",
    price: 200000,
  };

  console.log(제품);

  // --------------------------------------------------
  // 2. 객체 내 key 값을 이용해 원하는 value 얻어오기

  // 1) 객체명. key
  // 가장 많이 사용하는 방법
  console.log(제품.productName, 제품.productBrand, 제품.price);

  console.log("------------------------------");
  // 위와 동일한 역할을 하지만 위에 비하여 사용을 많이 하지 않는 방법
  console.log(제품["productName"], 제품["productBrand"], 제품["price"]);

  // ---------------------------------------
  // 3. 객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌, [] 리스트 목록 형태도 가능
  // 원하는 key를 생각해두고

  // 객체명.key = value;
  // 또는
  // 객체명["key"] = value;
  제품.color = ["black", "silver", "red"];
  console.log(제품);
  console.log(제품.color[1]);

  // 제품 내에 storage라는 key 명칭으로 256gb, 512gb, 1tv 리스트 형태로 저장
  제품.storage = ["256GB", "512GB", "1TB"];
  console.log(제품.storage);

  //price를 190000 18만원으로 변경
  제품.price = 180000;

  console.log(제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // - delete 객체이름.key

  delete 제품.productName; //productName 삭제
  console.log("delete 후 제품 : ", 제품);
});

// ============================================================
/* method(메서드) */
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  const 스마트폰 = {}; // 내부가 비어있는 객체 생성
  스마트폰.모델이름 = "아이폰16프로맥스";
  스마트폰.가격 = 1000000;

  // 메서드(객체의 기능(함수)) 추가
  스마트폰.정보 = function () {
    const 브랜드 = "사과";
    /*
        this 참조 변수
        - 작성되는 위치에 따라서 의미가 다름
        
        ex) <button onclick=테스트기능(this)>
        //  -> 이때 this == 클릭된 요소(버튼)

        ex) 객체이름.메서드이름 = function(){}
            this.변수이름 = "값";

            -> 이 때 this == 메서드가 작성된 객체

        */

    // this == 스마트폰을 가리킴
    console.log("모델이름 : ", this.모델이름);
    console.log("가격 : ", this.가격);
    console.log("브랜드 : ", this.브랜드); // 스마트폰.브랜드
    console.log("브랜드 : ", 브랜드);
  };

  // 메서드 기능 수행하기
  // 어디서든 정보() 기능을 수행했을 때 내용이나 행동을 확인할 수 있는것이 아니라
  // 스마트폰이라는 내부에 존재하는 기능을 수행하기 위해서는
  // 스마트폰 객체 내부에 존재하는 정보() 기능을 호출하겠다 와 같은 형식으로 사용
  스마트폰.정보();
  /* 
  정규식.test("소비자가 작성한 값 확인하가") = true / false로 일치하는지 확인 
  // 1번 방법
  정규식 = {
    test = function() {
        boolean 값으로 확인할 수 있는 코드 작성
        }
    }

  // 2번 방법
  정규식 = {};
  정규식.test = function () {
  boolean 값으로 확인할 수 있는 코드 작성
  }

  // 1번 방법이나 2번 방법을 활용해서 정규식 메서드를 생성하고 나면... 아래와 같이 호출
  정규식.test();

  if(개발자가원하는정규식.test(소비자가작성한값확인)) {
    // 개발자가원하는정규식 == 소비자가작성한값확인
    // true일 경우레만 실행
  }*/
});

// ==========================================
/* 생성자 함수 */

// 1. 생성자 함수 선언 + 정의
// (중요) 생성자 함수의 이름은 무조건 "대문자"로 시작
// 영어 이외에 한글 가능, 소문자도 가능하지만
// 대문자로 작성해주는 것이 개발자간의 예의
// 자바에서는 대문자로 주로 사용될 것
/* 학생 객체 생성자 함수 */
function Student(name, grade, ban, number, score) {
  // 속성
  // 전달 받은값(parameter, 매개변수, 리터럴)을 현재 객체(this)에 속성으로 추가
  // 현재 속성에 = 값 추가
  // this.속성 = 값;
  this.name = name; // 이름
  this.grade = grade; // 학생
  this.ban = ban; // 반
  this.number = number; // 번호
  this.score = score; // 점수

  // 기능(메서드)
  this.intro = function () {
    console.log(`
            ${this.grade} 학년 
            ${this.ban} 반 
            ${this.number} 번 
            ${this.name} 이름
            ${score}점 입니다.
            `);
  };
}

// 생성자 함수 호출
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  const st1 = new Student("홍길동", 3, 5, 17, 80);
  console.log(st1);

  const st2 = new Student("박철수", 1, 2, 3, 90);
  console.log(st2);
});

/* JSON */
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  // JS 객체 생성
  const obj = { id: "test01", pw: "1234", number: 9999 };

  // 1. JS 객체 -> JSON 문자열로 반환
  const str = JSON.stringify(obj);

  console.log("obj : ", obj);
  console.log("str : ", str);

  // JS 객체 설정
  // VM1368:1 Uncaught SyntaxError:
  // str2 =    '{ id : "test01", pw : "1234", number : 9999 }';
  const str2 = '{ "id": "test01", "pw": "1234", "number": 9999 }';

  // 1. JSON 문자열 -> JS 객체로 반환
  const obj2 = JSON.parse(str2);

  console.log("obj : ", str2);
  console.log("str : ", obj2);

  // 서버 데이터 비동기 요청
  /*
  fetch("API_URL")                         :웹 API로 HTTP 요청을 보냄
                                            비동기 처리 상태로 
                                            네트워크 요청이 완료되면 Response 객체 제공
  .then((response) => response.json())     : fetch에서 URL 주소로 접속해서 
                                            요청을 성공적으로 받으면 실행
                                            주로 URL 주소에서는 JSON() 형태로 데이터 존재
                                            이 데이터를 JSON -> JavaScript 객체로 변환
  .then((result) => result.response.데이터)
                                            : result : 변환된 JavaScript 객체 데이터 저장
                                            result 내부에서 원하는 값에 접근 해서 
                                            원하는 데이터만 출력
                                            : 반드시 fetch .then .then 형식이 종료된 후
                                                맨 마지막에 붙여주기
                                             해선 안될 행동 : fetch; 금지!!

   전체 흐름
    API 요청      ->      응답 받기        ->     JSON 변환       ->      데이터 출력
    fetch                  then                    then2                 console.log
  ;
  */
  fetch(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10"
  )
    .then((response) => response.json())
    .then((result) => console.log(result.response.header.resultMsg));
});
