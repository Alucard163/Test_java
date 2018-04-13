//Задание 1
'use strict';
var productName;
var productPrice;

//Задание 2
var productName = 'Телепорт бытовой VZHIH-101';
var productPrice = 10000;
var quid = 'Q';

console.log(`В наличии имеется «${productName}»`);
console.log(`Стоимость товара ${productPrice} ${quid}`);

//Задание 3
var productQuantity = 2;
var clientDiscount = 0.1;
var clientSum = productQuantity * productPrice * (1 - clientDiscount);

console.log(`Цена покупки составит ${clientSum} ${quid}`);

//Задание 4
var firmSum = 52334224;
var purchasePrice = 6500;
var Purchase = (firmSum - purchasePrice) / purchasePrice;
var purchaseRemainder = firmSum % purchasePrice;
var maxPurchase= parseInt (Purchase);

console.log(
  `Мы можем закупить ${maxPurchase} единиц товара, после закупки на счету останется ${purchaseRemainder} ${quid}`
);

