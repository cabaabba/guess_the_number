let input = document.querySelector(".field_input");
let btn = document.querySelector(".field_btn");
let check = document.querySelector(".result_check_out");
let help = document.querySelector(".result_help_out");
let count = document.querySelector(".result_count_out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Многовато будет";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Маловато будет";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Поздравляю! Вы угадали число";
    help.textContent = "В самый раз";
    item++;
    count.textContent = item;
  }
};