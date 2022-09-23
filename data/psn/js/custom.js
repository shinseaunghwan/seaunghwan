//접속 브라우저의 정보 확인
const ver = navigator.userAgent;
console.log(ver);

//접속 브라우저의 정보중 trident가 있는지 체크
const isIE = /gecko/i.text(ver);
console.log(isIE);

if (isIE) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.')
}
