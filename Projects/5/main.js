 'use strict';
 //Задание 1
const taxOfSales = 73;
let quid='Q';
let sumOfTaxes = 0;
console.log(`Задание №1`);
function calcSalesTax(productCost) {
  sumOfTaxes += productCost * taxOfSales /100;
}
calcSalesTax(15);
console.log(`Налог с продаж (${taxOfSales} %), к оплате: ${sumOfTaxes} ${quid}`);
calcSalesTax(150);
console.log(`Налог с продаж (${taxOfSales} %), к оплате: ${sumOfTaxes} ${quid}`);
calcSalesTax(1500);
console.log(`Налог с продаж (${taxOfSales} %), к оплате: ${sumOfTaxes} ${quid}`);

//Задание 2
console.log(`\nЗадание №2`);
let wrapper = 30;
let packingSize = [];
function isPacking(width,heigth,length) {
  let wrapperArea;
  packingSize = [width,heigth,length];
  wrapperArea = (width*heigth + width*length + heigth*length)*2;
  if (wrapperArea > wrapper) {
    return false;
  }else {
    wrapper -= wrapperArea;
    return true;
  }
}
function packResult(isWrapper) {
  if (isWrapper) {
    console.log(`Заказ (${packingSize[0]}/${packingSize[1]}/${packingSize[2]} м) упакован, осталось упаковочной бумаги ${wrapper} м2`);
  }else {
    console.log(`Заказ (${packingSize[0]}/${packingSize[1]}/${packingSize[2]} м) не упакован, осталось упаковочной бумаги ${wrapper} м2`);
  }
}
packResult(isPacking(1,1,2));
packResult(isPacking(1,0.5,1));
packResult(isPacking(1,1.5,2));
packResult(isPacking(2,1,3));
packResult(isPacking(1,0.5,0.1));
packResult(isPacking(0.2,0.3,0.7));


//Задание 3
console.log(`\nЗадание №3`);
let teleCharge = [7,3,1];
let funcCharges = [];
for (let i = 0; i < teleCharge.length; i++) {
  funcCharges[i] = function () {
    if (teleCharge[i] === 0) {
      console.log(`Телепорт ${i+1} недоступен, перезаряжается`);
    }else {
      console.log(`Телепорт ${i+1} использован, заряд — ${--teleCharge[i]} единиц`);
    }
  };
}
funcCharges[0]();
funcCharges[2]();
funcCharges[1]();
funcCharges[2]();
console.log(`Остаток зарядов у телепортов: ${teleCharge}`);