const arr_li = document.querySelectorAll(".arr_li");
const article = document.querySelector("article");
console.log(arr_li);

for(let i=0;i<arr_li.length;i++){
  arr_li[i].addEventListener("click", () => {
    article.innerHTML = `
      ${i} 페이지 입니다.
    `
  })
}