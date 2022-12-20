let add = document.querySelector('.add');
let minus = document.querySelector('.minus');
let counter = document.querySelector('.tally');
let price = document.querySelector('.price');

add.addEventListener('click', addCounter);
minus.addEventListener('click', minusCounter);

function addCounter() {
  counter_num = counter.innerHTML;
  price_num = price.innerHTML;
  counter.innerHTML = parseInt(counter_num) + 1;
  price.innerHTML = parseInt(price_num) + 3;
}

function minusCounter() {
  counter_num = counter.innerHTML;
  price_num = price.innerHTML;
  if (counter_num == 0) {
    return false;
  }
  if (price_num < 1) {
    return false;
  }
  counter.innerHTML = parseInt(counter_num) - 1;
  price.innerHTML = parseInt(price_num) - 3;
}

let add_two = document.querySelector('.add_two');
let minus_two = document.querySelector('.minus_two');
let counter_two = document.querySelector('.tally_two');

add_two.addEventListener('click', addCounterTwo);
minus_two.addEventListener('click', minusCounterTwo);

function addCounterTwo() {
  counter_num = counter_two.innerHTML;
  price_num = price.innerHTML;
  counter_two.innerHTML = parseInt(counter_num) + 1;
  price.innerHTML = parseInt(price_num) + 4;
}

function minusCounterTwo() {
  counter_num = counter_two.innerHTML;
  price_num = price.innerHTML;
  if (counter_num > 0) {
    counter_two.innerHTML = parseInt(counter_num) - 1;
  }
  if (price_num < 1) {
    return false;
  }
  price.innerHTML = parseInt(price_num) - 4;
}
