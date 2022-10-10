'use strict';

/**
 * A. input 에 아이템 적은 후 add
 *  1. input 에 아이템 적은 값 담기
 *  2. add 클릭시 li 추가 or enter 누를시 li 추가
 * B. trash img 클릭시 아이템 (li) 삭제
 */

const input = document.querySelector("input");
const addBtn = document.querySelector(".add");
const trashBtn = document.querySelector('.trash');
const ul = document.querySelector("ul");

function createElement() {
  const trash = document.createElement("img");
  // const chkBox = document.createElement('input');
  const li = document.createElement("li");
  const span = document.createElement("span");
  ul.appendChild(li);
  // li.appendChild(chkBox);
  li.appendChild(span);
  li.appendChild(trash);
  li.scrollIntoView({block:'center'});
  span.textContent = input.value;
  trash.setAttribute("class", "trash");
  trash.setAttribute("src", "./trash.png");
  // chkBox.setAttribute('type','checkbox');

  trash.addEventListener("click", () => {
    ul.removeChild(li);
  });
}

function add() {
  if(input.value) {
   createElement();
    input.value = "";
    input.focus();

  } else {
    input.focus();
  }
}

function remove() {
  const li = document.querySelector('li');
  ul.removeChild(li);
}

addBtn.addEventListener("click", () => {
  add();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add();
  }
});


