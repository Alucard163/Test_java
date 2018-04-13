'use strict';

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];


// Задание 1
var quid='Q';
let hit = {};

hit.name = hitName;
hit.price = hitPrice;
console.log(`Задание 1`);
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} ${quid}`);

// Задание 2

var items = [];

for (var i=0; i < positions.length; i++) {
  var item = {
    'name':positions[i], 
    'price':prices[i]
  };
  items[i] = item;
}
console.log(`\nЗадание 2`);
console.log(`Купите ${items[4].name} по цене ${items[4].price} ${quid}`);

// Задание 3

function showDiscount (object, amt) {
  var discount = 0;
  if (amt < 10) {
    discount = 5;
  }else if (amt >= 10 && amt < 50) {
    discount = 7;
  }else if (amt >= 50 && amt < 100) {
    discount = 10;
  }else if (amt >= 100) {
    discount = 15;
  }
  var discountSum = object.price * amt * discount / 100;
  var cost = object.price * amt - discountSum;
  console.log(`${object.name} — стоимость партии из ${amt} штук ${cost} ${quid} (скидка ${discount} %), ваша выгода ${discountSum} ${quid}!`);
}
console.log(`\nЗадание 3`);
showDiscount(items[0],12);
showDiscount(items[3],97);


// Задание 4

items[3].amount = 4;

function updateAmount(item, rate = 1) {

  if (!('amount' in item)) {

    return false;
  }
  let currentAmount = item.amount;

  if (currentAmount === 0 || rate > currentAmount) {
    
    console.log(`${item.name} закончился на складе`);
  }
  else if (rate < currentAmount) {
    
    item.amount -= rate;
    console.log(`${item.name} — остаток ${item.amount} шт`);
  }
  else if (rate === currentAmount) {

    item.amount -= rate;
    console.log(`Это был последний ${item.name}, вам повезло!`);
  }

  return true;
}
console.log(`\nЗадание 4`);
updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);

