let array = new Array();
array = [1, 2, 3];
console.log(array);

array.push(4); // 뒤에서
array.push(5);
console.log(array);

array.pop();
console.log("pop 후 array : " + array);

array.unshift(0);  // 앞에서
console.log(array);

array.shift();
console.log(array);


const animals = ['tiger', 'elephant', 'sheep', 'hippo'];
console.log(animals[0]);

console.log("인덱스 범위를 벗어났을 때: " + animals[animals.length] );

console.log("배열 출력하기");
for(let i=0;i<animals.length;i++){
  console.log(animals[i]);
}

console.log("for..in는 키값을 출력(index)");
for(ele in animals){
  console.log(ele);
}


console.log("for..of는 배열 값을 출력");
for(ele of animals){
  console.log(ele);
}


console.log("======== forEach() 활용 ===============");
animals.forEach((value, index, array) => {
  console.log(value, index, array);
});

console.log("두번째, 세번째 인자는 생략 가능하다.");
animals.forEach((v,i)=> console.log(v,i));


console.log("spread 연산자! 흩뿌려줌");
console.log(...animals); 


console.log("===========================================");

let s = "안 녕 하 세 요 반 갑 습 니 다";
s = s.split(" ", 5); // 공백을 기준으로 5개만 자름
console.log(s); //주의할 점, 요소는 string 형태


let arr = [1,2,3,4,5];
console.log(arr.slice(1,1)); // 출력안됨. 
let slice_arr = arr.slice(0,2); //start~end-1 (1,1) t생각
console.log(slice_arr, arr); // 원본 배열을 수정하지 않는다.

let arr2 = [1,2,3,4,5];
let splice_arr = arr2.splice(0,  2, 'b'); 
//기존 배열을 삭제, 교체 0부터 2개삭제, 거기에 b
console.log(splice_arr, arr2); // 원본 배열을 수정
// splice된 배열은 수정되고, 메서드로 저장한건 나머지 를 저장

let num = [1,2,3,4,5,6,7,8,9];
let splice_num = num.splice(5, 2); //  num에는 잘려진거. splice_num에는 잘린애들(삭제된애들)
console.log(splice_num, num);


let oriStrings = ['홍길동', '이순신', '강감찬', '김유신', '임꺽정'];
function del (idx, arr){
  arr.splice(idx, 2, '세종대왕', '을지문덕');
  console.log(arr);
}

del(2, oriStrings);

// 마이너스 지정 가능 , 맨뒤가 -1
// 삭제할 개수를 0으로 지정하면 배열에 추가하는 느낌으로 가능






