
'use strict';

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

// Задание 1

function lotCalculator(item, amt) {

  let data = {};
  data.lots = Math.ceil(amt / item.producer.lot);
  data.total = data.lots * item.price * item.producer.lot;
  return data;
}

let item1 = positions[1];
let itemAmt1 = 15;
let item2 = positions[2];
let itemAmt2 = 1;

console.log(`Задание 1`);
let result1 = lotCalculator(positions[1], 15);
let result2 = lotCalculator(positions[2], 1);
console.log(`${item1.title} ${itemAmt1} шт: заказать партий ${result1.lots}, стоимость ${result1.total} Q`);
console.log(`${item2.title} ${itemAmt2} шт: заказать партий ${result2.lots}, стоимость ${result2.total} Q`);


// Задание 2

const deferedPayments = [];

function deferPay(producer, shipmentAmount,argDate) {
   const paymentDate = new Date(argDate.getTime());
   paymentDate.setDate(argDate.getDate() + producer.deferPeriod);
  let data = {};

  data.producer = producer;
  data.paymentDate = paymentDate;
  data.amount = shipmentAmount;

  deferedPayments.push(data);
}

deferPay(positions[1].producer, 7200, new Date(2030, 4 - 1, 10));
deferPay(positions[2].producer,12300,new Date(2030, 3 - 1, 20));
deferPay(positions[0].producer,3120,new Date(2030, 4 - 1, 21));
console.log(`\nЗадание 2`);

for (var i=0; i < deferedPayments.length; i++) {
  console.log(`${deferedPayments[i].paymentDate.toLocaleDateString('ru-Ru')}: ${deferedPayments[i].producer.name} сумма ${deferedPayments[i].amount} Q`);
}

// Задание 3

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amt, from, to) {
  let jsonData = loadCurrencyJSON();
  let currency = {}, onAccuracySum = 0;
  if (jsonData) {
    try {
      currency = JSON.parse(jsonData);
      onAccuracySum = (amt * currency[from] / currency[to]).toFixed(2) * 1;

      return onAccuracySum;
    }
    catch (e) {
      console.log(e.name, e.message);
    }
  }

  return false;
}

console.log(`\nЗадание 3`);

let res1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${res1} USD`);

let res2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${res2} ZZZ`);

let res3 = convertCurrency(100, 'TMT', 'UZS');
console.log(`Сумма ${res3} UZS`);
