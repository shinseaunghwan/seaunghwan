const divList = document.querySelector('ul#gnb');
console.log(divList);

//try는 실행문 catch는 에러날시 실행

// try {
//   //JSON 파일 위치 저장
//   let _app_json_file = "https://shinseaunghwan.github.io/seaunghwan/price.json"
//   let _app_requset = new XMLHttpRequest();
//   _app_requset.open("GET",_app_json_file, false);
//   _app_requset.send(null);
//   let _app_json_data = JSON.parse(_app_requset.responseText);
//   console.log(_app_json_data);


//   // map을 활용한 반복처리
//   _app_json_data.map((value, index) => {
//     divList.innerHTML += `<li style="font-size: 36px";>${index+1}. ${value.addr}</li>`
//   })


// } catch(e) {
//   alert(e);
// }
// //옛날 방식 요즘은 패치를 사용

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200 ) {
    console.log(ajax.responseText);
  }
};
ajax.open('GET', 'https://shinseaunghwan.github.io/seaunghwan/price.json', true);
ajax.send();