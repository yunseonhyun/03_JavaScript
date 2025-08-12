//Error: Cannot find module 'axios' 
// npm install axios 명령어를 이용해서 node_module에 axios에 관련된 프로젝트 기능 추가


const axios = require("axios");
const fs = require("fs");
const path = require("path");

const query = "컴퓨터";
const lang = "ko"; // 한국어 위키백과

const url = `https://${lang}.wikipedia.org/w/api.php`;

const params = {
  action: "query",
  format: "json",
  prop: "extracts",
  exintro: true,
  explaintext: true,
  titles: query,
  redirects: 1,
};

async function fetchWikipediaArticle() {
  try {
    const response = await axios.get(url, { params });
    const data = response.data;

    // 페이지 ID 추출
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];

    // 결과 저장할 경로
    const outputPath = path.join(__dirname, `${query}.json`);

    // 파일 저장
    fs.writeFileSync(outputPath, JSON.stringify(page, null, 2), "utf-8");
    console.log(`✅ "${query}.json" 파일이 저장되었습니다.`);
  } catch (error) {
    console.error("❌ 오류 발생:", error.message);
  }
}

fetchWikipediaArticle();
