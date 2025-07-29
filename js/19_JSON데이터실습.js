// 1. const elementById로 모두 html Javascript 연결 설정하기

const result = document.getElementById("result");
const fetchPost = document.getElementById("fetchPost");
const content = document.getElementById("content");

// html button type은 submit이 아니라 button 형태로 타입 맞춰주는 것이 바람직함
fetchPost.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json()) // json 형태로 변환 parse() 메서드와 json() 메서스 차이 확인
    .then((data) => {
      console.log("data : ", data);
      // innerHTML = <> 태그 적용 innerTEXT = <>태그도 텍스트로 출력
      content.innerHTML = `
        <strong>userID:</strong>${data.userId}<br>
        <strong>ID:</strong>${data.Id}<br>
        <strong>title:</strong>${data.title}<br>
        <strong>body:</strong>${data.body}<br>
        
        `;
    });
});
