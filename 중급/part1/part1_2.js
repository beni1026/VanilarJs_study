// 배열 붙이기 
const myArr1 = [1,2,3,4];
const myArr2 = [5,6,7,8];
const myArr12 = myArr1.concat(myArr2);
console.log(myArr12);

// 문자열 붙이기
const str1 = "hello ";
const str2 = "javascript";
console.log(str1.concat(str2));

// 응용 배열 이어붙이기
const someArr = ["안녕", " 반가워", " 내", "이름은 ", "뽀로로"];
console.log("".concat(...someArr));

// 몇번 째 인덱스에 있는지 확인(대소문자 구분함)
// indexOf("찾을 값", "시작할 위치"); 시작 위치와 상관없이 절대 인덱스가 출력
let Man = ['홍길동', '이순신', '강감찬', '김유신', '임꺽정'];
console.log(Man.indexOf('이순신'));
// 없는 값을 indexOf하면 -1 출력

// 역순으로 찾기
let abcStr = "abcdefghijkhik";
console.log(abcStr.lastIndexOf('h'));


// 특정 번째 있는 값의 인덱스 모두 찾기
const numbers = [2,3,4,3,5,8,5,3,4,8,4,2,1];
const idxarr = [];
const indexFnc = (arr, num , st) => {
  let idx = arr.indexOf(num, st);
  if(idx === -1) return;
  else{
    idxarr.push(idx);
    indexFnc(arr, num, idx+1);
  }
}

indexFnc(numbers, 4, 0);
console.log(...idxarr);


// 배열에 특정 요소가 포함되는지 확인 includes()
const testArr = ['a', 'b', 'c', 'd', 'e'];
console.log(testArr.includes('a')); // true, false로 출력

// 배열 내 요소 묶기
// 매개변수는 각각을 묶을때 붙은 문자 없으면 default = 콤마
const testArr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(testArr2.join());

// 배열 요소 내 undefined, null 있으면 빈문자열로 연결됨

console.log(testArr2.reverse()); //원본배열 바뀜


// find() 조건에 맞는 첫번째 요소 반환, 없으면 undefined
const test = [56,34,89,100,90];
const found = test.find((e) => (e>=90));
console.log(found);

// filter() : 배열의 끝까지 조건에 맞는 원소 찾음
let rst = test.filter(ele => {
    return ele === 3;
});

// 객체에서 find()
const cars = [
  {name:'테슬라', price:25000},
  {name:'기아', price:2000},
  {name:'람보로', price:30000},
]

let r_cars = cars.filter(ele => ele.name === '테슬라');
console.log(r_cars);  // filter면 배열 객체 형태, find면 객체형태
