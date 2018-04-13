'use strict';

// Задание 1

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

function fixAmount(amount) {
  if (typeof amount === 'number') {

    return amount;
  }
  let resultAmount = parseFloat(amount.trim().replace(',', '.'));

  return (isNaN(resultAmount)) ? -1 : resultAmount;
}

const orders = [
  {price: 21, amount: 4},
  {price: 50, amount: '17 штук'},
  {price: 7, amount: '1,5 килограмма'},
  {price: 2, amount: ' 2.7 метра '},
  {price: 1, amount: 'семь единиц'}
];

console.log(`Задание 1`);
for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}


// Задание 2

console.log(`\nЗадание 2`);
let a = '';

function handleKey(char) {
  a += char;
  if (a.length >= 4) {
    let b = a.slice(a.length - 4);
   
    if (b.toLowerCase().indexOf('r2d2') !== -1) {
      showSpecialPrice();
      a = '';
    }
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

// Задание 3

console.log(`\nЗадание 3`);

function parseData(cellNames, fileInfo, limit = ',') {
  let preparedItems = [];
  let parsedItems = [];
  let serviceObj = {};

  fileInfo.forEach(function (stringItem) {

    cellNames.forEach(function (cell, ind) {
      serviceObj[cell] = stringItem.split(limit)[ind].trim();
    });
    parsedItems.push(serviceObj);
  });
  return parsedItems;
}

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
