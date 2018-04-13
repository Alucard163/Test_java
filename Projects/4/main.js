'use strict';
//Задание 1

var firstCost = 1250;
var secondCost = 2300;
var quid = 'Q';
var serviceMessage = `Дополнительное гарантийное обслуживание: `;

function warranty(year=2) { //в year вводим количество лет доп обслуживания
  switch (year) {
   case 1:
     return firstCost;
     
   case 2:
     return secondCost;
     
   default:
   return 0;
  }
}

var orderWarranty = warranty(undefined);
var resultMessage = serviceMessage + `${orderWarranty} ${quid}`;

console.log(`Задание 1\n`+resultMessage);


//Задание 2

var engraveCost = 11;
var inputMessage = 'Акакий Акакиевич'; //сюда вводится надпись для гравировки
var engraveMessage = `Подарочная упаковка и гравировка:`;
function engravingPrice(msgStr) {
  if (inputMessage === '' || inputMessage === undefined) {
    return 0;
  }
  var resultWords = msgStr.split(' ');

  return resultWords.length * engraveCost;
}

console.log(`\nЗадание 2\n`+`${engraveMessage} ${engravingPrice(inputMessage)} ${quid}`);


//Задание 3

var destination = 'Галактика Туманность Андромеды';
var msgDeliveryCost;
var locationMessage = `Стоимость доставки для области "${destination}": `;

function deliveryPrice(deliveryNecessity, deliveryDestination) {

  if (!deliveryDestination) {
    return 0;
  }
  else {
    switch (deliveryNecessity) {
      case 'Луна':
        return 150;

      case 'Крабовидная туманность':
        return 250;

      case 'Галактика Туманность Андромеды':
        return 550;

      case 'Туманность Ориона':
        return 600;

      case 'Звезда смерти':
        return 'договорная цена';

      default:
        return NaN;
    }
  }
   
}
console.log(`\nЗадание 3`);
var deliveryResult = deliveryPrice(destination, 'да');

if (deliveryResult === 0) {
  msgDeliveryCost = `Доставка не требуется`;
}
else if (isNaN(deliveryResult)) {
  msgDeliveryCost = `Ошибка при расчете стоимости доставки`;
}
else if (typeof deliveryResult === 'number') {
  msgDeliveryCost = locationMessage + `${deliveryResult} ${quid}`;
}
else {
  msgDeliveryCost = locationMessage + `${deliveryResult}`;
}

console.log(msgDeliveryCost);

