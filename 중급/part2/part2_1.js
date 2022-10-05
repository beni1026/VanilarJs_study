// isNaN vs Number.isNaN()

// 1. isNaN() : 어떤 값이 숫자가 아닌지 판별(is not a number)
// 앞에 !을 붙이는게 직관적
// NaN의 타입도 Number이다.
console.log("NaN의 타입은 = " + typeof(NaN));

// NumBer.isNaN() : 기존 메서드의 문제점을 해결하고자 추가
// 오로지 들어온 인자가 NaN인지 확인

console.log("======isNaN() 테스트");
let a = "NaN";
let b = NaN;
let c = "홍길동"
let d = "20";
let e = null;


console.log(isNaN(a)); 
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d)); //false
console.log(isNaN(e));
console.log(typeof null); 

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));
console.log(Number.isNaN(c));
console.log(Number.isNaN(d));
console.log(Number.isNaN(e));

console.log(isNaN(100));
console.log(isNaN("10.0")); // 자동 형변환 인자에 Number()가 들어갔다고 보면됨
console.log(isNaN("홍길동"));
// isNaN(Number(인자)); 


// 하지만 계산을 해주는 건 아니다. 연산기호는 따옴표내 문자 처리됨
console.log(isNaN("9*8")); // true
console.log(isNaN("9+8"));
console.log(isNaN("9-8"));
console.log(isNaN("9/8"));
console.log(isNaN("0/0"));


console.log(isNaN(null)); // false
console.log(isNaN(true)); // false
console.log(isNaN(false));  // false
console.log(isNaN(""));  // false
console.log(isNaN(undefined)); // true
console.log(isNaN(NaN)); // true


// 정리
// 1. isNaN() = isNaN(Number())
// - 숫자, true/false, null, ""(공백문자) : false
// - 그 외 NaN, 문자열, undefined  : true

// 2. Number.isNaN()
// - 오직 숫자(Number) 타입인 값에서만 동작하는 메서드
// - 오직 숫자형이고, NaN일때만 true
// - 그 외 false

console.log(isNaN("10px"));
console.log(Number.isNaN("10px"));
console.log(Number.isNaN(Number("10px")));


console.log("------연습문제--------");
console.log("isNaN('NaN') = " + isNaN("NaN"));  // true
console.log("isNaN(NaN) = " + isNaN(NaN));  // true
console.log("isNaN('0/0') = " + isNaN("0/0")); // true
console.log("isNaN(0/0) = " + isNaN(0/0)); // true
console.log("isNaN('홍길동') = " + isNaN("홍길동"));  // true
console.log("isNaN(undefined) = " + isNaN(undefined));  // true
console.log("isNaN('100') = " + isNaN("100"));  // false
console.log("isNaN('10px') = " + isNaN("10px"));  // true

console.log("Number.isNaN('NaN') = " + Number.isNaN("NaN"));  // false
console.log("Number.isNaN(NaN) = " + Number.isNaN(NaN));  // true
console.log("Number.isNaN('0/0') = " + Number.isNaN("0/0")); // false
console.log("Number.isNaN(0/0) = " + Number.isNaN(0/0)); // true
console.log("Number.isNaN('홍길동') = " + Number.isNaN("홍길동"));  // false
console.log("Number.isNaN(undefined) = " + Number.isNaN(undefined));  // false
console.log("Number.isNaN('100') = " + Number.isNaN("100"));  // false
console.log("Number.isNaN('10px') = " + Number.isNaN("10px"));  // false



// 특정 문자열을 배열과 객체로 변환 : Number.isNaN() 사요
// 1) 문자열 -> 배열 -> 객체로 변환

let someObj = {};
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 백점";
let strArr = someStr.split(", ");
for(ele of strArr){
  let e = ele.split(" ");
  let name = e[0];
  let num = e[1];
  if(!Number.isNaN(Number(num))) num = Number(num);
  someObj[name] = num;
}
console.log(someObj);




let someObj2 = {};
strArr.forEach((ele) => {
  let e = ele.split(" ");
  let name = e[0];
  let num = e[1];
  if(!Number.isNaN(Number(num))) num = Number(num);
  someObj2[name] = num;
})

console.log(someObj2);


// map() 메서드 : 배열 내 요소들을 반복하면서 1대 1로 매핑시켜주는 것
// * 매핑 : 하나의 값을 다른 값으로 1대1로 매핑시켜주는 것

const testArr = [1, 2, 3, 4, 5];
const mapArr = testArr.map((val) => val*100);
console.log(mapArr);
// 원본 배열을 건드리지 않는다.


// 배열 내 객체를 원하는 형태로 바꾸기
const test = [
  {key:'홍길동', value:80},
  {key:'강감찬', value:70},
  {key:'을지문덕', value:90},
  {key:'이순신', value:50}
] 


const newArr = test.map((ele) => {
  let obj = {};
  obj[ele.key] = ele.value;
  return obj;
});
console.log(newArr);


// 구조 분해 할당
const result = strArr.map((val) => {
  let [k, v] = val.split(" ");
  return {k, v: Number.isNaN(Number(v)) ? v : Number(v)};
});

console.log(result);

// map()메서드와 reduce()메서드 동시에 활용
// 문자열 -> 배열 -> 객체 변환

const result2 = result.reduce((acc, obj)=> {
  acc[obj.k] = obj.v;
  return acc;
}, {})

console.log(result2);

// 메서드 체이닝 가능!


