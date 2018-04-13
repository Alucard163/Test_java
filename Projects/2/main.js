//Задание 1
'use strict';

var stockQuantity;
var orderQuantity;

/*stockQuantity = 10;
 orderQuantity = 20;*/

/*stockQuantity = 100;
 orderQuantity = 100;*/

stockQuantity = 150;
orderQuantity = 50;


if (orderQuantity > stockQuantity) {
    console.log(`На складе нет такого количества товаров`);
}
else if (orderQuantity === stockQuantity) {
    console.log(`Вы забираете весь товар c нашего склада!`);
}
else {
    console.log(`Заказ оформлен`);
}

//Задание 2

var destination = "Туманность Ориона";
var deliveryCost;
var destinationMessage = `Стоимость доставки для "${destination}": `;
var quid = 'Q';

switch (destination) {
  case 'Луна':
    deliveryCost = destinationMessage + `150 `+quid;
    break;
  case 'Крабовидная туманность':
    deliveryCost = destinationMessage + `250 `+quid;
    break;
  case 'Галактика Туманность Андромеды':
    deliveryCost = destinationMessage + `550 `+quid;
    break;
  case 'Туманность Ориона':
    deliveryCost = destinationMessage + `600 `+quid;
    break;
  case 'Звезда смерти':
    deliveryCost = destinationMessage + 'договорная цена';
    break;
  default:
    deliveryCost = 'В ваш квадрант доставка не осуществляется';
}

console.log(deliveryCost);


// Задание 3

var productCost = 'три';

try {
  if (typeof(productCost) !== 'number') {
    throw `Вы допустили ошибку: ${productCost} не является числом`;
  }
  console.log(`Цена товара введена корректно`);

}
catch (e) {
  console.log(e);
}


// Задание 4

var personPlanet;
var personAge;


personPlanet = 'Земля';
personAge = 14;

switch (personPlanet) {
  case 'Земля':
    if (personAge < 18) {
      console.log(`Вы не достигли совершеннолетия`);
    }
    else {
      console.log(`Приятных покупок`);
    }
    break;
  case 'Юпитер':
    if (personAge < 120) {
      console.log(`Сожалеем. Вернитесь на 120й день рождения!`);
    }
    else {
      console.log(`Чистого неба и удачных покупок!`);
    }
    break;
  default:
    console.log(`Спасибо что пользуетесь услугами нашего магазина!`);
}


