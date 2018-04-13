'use strict';

console.log(`Задание 1\n`);
const particle = Symbol();
class BarcodeGenerator {
  constructor(size = 1) {
    this.size = size;
    this[this.particle] = undefined;
  }
  create() {
    let expression = Math.floor(Math.random()*Math.pow(10,this.size));
    if  (this[this.particle] === undefined) {
      return expression;
    }else return `${this[this.particle]} - ${expression}`;
  }
}
const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.particle] = 'AA';
console.log(generator.create());
generator[BarcodeGenerator.particle] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.particle];
console.log(generator.create());


console.log(`\nЗадание 2\n`);
class HexRange {
  constructor(from,to) {
    let range = [];
    for (let i = from; i <= to; i++) {
      range.push(Number(i).toString(16));
    }
    return range;
  }
}
let queue = new HexRange(247, 253);
console.log(...queue);


console.log(`\nЗадание 3\n`);
class DateRange {
  constructor(from,to) {
    from.setTime(from.getTime());
    from.setHours(0);
    from.setMinutes(0);
    let weekdays = [];
    while (from < to) {
      if (from.getDay() !== 6 && from.getDay() !== 0) {
        weekdays.push(from.getTime());
      }
      from.setDate(from.getDate() + 1);
    }
    let weekdaysResult = [];
    for (let i = 0; i < weekdays.length; i++) {
      weekdaysResult.push(new Date(weekdays[i]));
    }  
    return weekdaysResult;
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}





