// Json이란? javascript object notaion (자바스크립트 객체 표기법)
// - 서버와 웹 페이지간 데이터를 주고 받을 때 많이 사용하는 포맷 방식
// 1) 형식
// [
//   {"속성" : "값"},
//   {"속성" : "값"},
//   {"속성" : "값"}
// ]
// - 속성과 값 쌍으로 이루어진 데이터 쌍
// - 자바스크립트 배열,객체 형식과 비슷해 보이지만 살짝 다르다
//   (프로퍼티나 값을 쌍따옴표로 처리함)

// 2) 특징
// - 사람이 읽기에 직관적인 데이터 형식
// - xml을 대체하여 나왔다.
// - xml과 json 둘다 계층적이 구조를 가지고 있음

// 3) xml vs json
// > xml
// <people>
//   <person>
//     <firstName>길동</firstName><lastName>홍</lastName>
//   </person>
//   <person>
//     <firstName>순신</firstName><lastName>이</lastName>
//   </person>
//   <person>
//     <firstName>감찬</firstName><lastName>강</lastName>
//   </person>
// </people>
// > json
// {
//   "people": [
//     {"firstName": "길동", "lastName" : "홍"},
//     {"firstName": "순신", "lastName" : "이"},
//     {"firstName": "감찬", "lastName" : "강"},
//   ]
// }

let people = [
    {"firstName": "길동", "lastName" : "홍"},
    {"firstName": "순신", "lastName" : "이"},
    {"firstName": "감찬", "lastName" : "강"},
];

console.log(people[0].lastName + people[0].firstName);

// 주요 메서드 2개
// 1) JSON.parse(jsonText) : json 형식의 텍스트를 자바스크립트 객체로 변환
// 2) JSON.stringfy(dataObect) : 자바스크립트 객체를 json 형식으로 변환

let jsonText = '{"firstName": "길동", "lastName" : "홍"}';
const dataObj = JSON.parse(jsonText);
console.log(typeof dataObj);
console.log(typeof jsonText);

// JSON.stringfy 호출 시 주의 사항
// - 원시형(문자,숫자,불린, 객체, 배열)은 잘 변환된다.
// - 함수, 심볼, undefined 은 무시 된다.

console.log(JSON.stringify(100));
console.log(JSON.stringify('korea')); // 홑따옴표가 쌍따옴표로 변경
console.log(JSON.stringify(false));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify({age:undefined}));
console.log(JSON.stringify(Symbol(''))); // undefined
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify({name:"홍길동", age:function(){return 20;}}));
console.log(JSON.stringify([1, undefined, 2 , Symbol(''), 3, function(){}, NaN])); // 배열 내 들어가면 null 이된다. 


let obj = {name:"홍길동", age:function(){return 20;}};
obj.age = obj.age.toString();
let jsonText2 = JSON.stringify(obj);
console.log(jsonText2);

// json 배열
let ob = {
  "name": "홍길동",
  "age" : 20,
  "hobby" : ["음악감상", "영화보기", "산책", "우표수집"],
}
let i, rst = "";
for(i=0;i<ob.hobby.length;i++){
  rst += ob.hobby[i];
}
console.log(rst);

for(e in ob.hobby){
  console.log(ob.hobby[e]);
}

// JSON space 옵션을 통한 가독성 높이기 (3번째 인자에 구분 문자(공백개수))
let someJsonData = {"num":20,"bane":"dd","s":2,"func":function(){}}; 
console.log(JSON.stringify(someJsonData,null,2));

// 두번째 인자. replacer 옵션(파라미터) : 원하는 객체의 속성들만 선택해서 지정할 수 있음(생략가능 null)
// replacer 파라미터는 함수, 배열을 인자값으로 받을 수 있다.

console.log(JSON.stringify(someJsonData, ["num"], 2));

function replacer(key, value){
  console.log(typeof value);
  if(typeof value === 'function') return "나는 함수";
  return value;
}


console.log(JSON.stringify(someJsonData, replacer, 2));