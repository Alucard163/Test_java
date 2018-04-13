'use strict';
var positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ];
      
//Задание 1

var positionsNumber = positions.length;
console.log('Список наименований:');
for (var cnt = 0; cnt < positionsNumber; cnt++) {
  console.log(cnt+1, positions[cnt]);
}
console.log(`\n`);

//Задание 2

positions.push(`Экзоскелет Trooper-111`, `Нейроинтерфейс игровой SEGUN`, `Семена дерева Эйва`);
positionsNumber = positions.length;

console.log(`Окончательный список наименований:`);

for (var cnt = 0; cnt < positionsNumber; cnt++) {
  console.log(cnt+1, positions[cnt]);
}

console.log(`\n`);

//Задание 3

var firstPreOrder = 'Машина времени DeLorean';
var preOrderIndex = positions.indexOf(firstPreOrder);
var movedOrder = positions.splice(preOrderIndex, 1);
positions.unshift(movedOrder[0]);

console.log(`Принять в первую очередь:`);

for (var cnt = 0; cnt < 3; cnt++) {
  console.log(positions[cnt]);
}
console.log(`\n`);

//Задание 4

var [firstItem, secondItem, thirdItem, fourthItem, fifthItem, ...restItems] = positions;
var storeGoods = [firstItem, secondItem, thirdItem, fourthItem, fifthItem];
console.log(`В магазине:`);
for (var item of storeGoods) {
  console.log(item);
}
console.log(`\n`);
console.log(`Остальные товары:`);
for (var item of restItems) {
  console.log(item);
}