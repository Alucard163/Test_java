'use strict';
function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];


console.log(`Задание 1`);
function OrdersTeleportationPoint(title,x,y,z) {
  this.title = title;
  this.coords = [x,y,z];
}
OrdersTeleportationPoint.prototype.getDistance = function (x,y,z) {
    return Math.sqrt(Math.pow(this.coords[0]-x,2)+Math.pow(this.coords[1]-y,2)+Math.pow(this.coords[2]-z,2));
  }
const item = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let len = item.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${item.title}» составит ${len.toFixed(0)} единиц`);


console.log(`\nЗадание 2`);
function OrdersTeleportationPointLocator(points) {
  try {
    points.forEach(function(point) {
      if (!OrdersTeleportationPoint.prototype.isPrototypeOf(point)) {
        console.log(`${point} - не экземпляр OrdersTeleportationPoint`);
      }
    })
  }
  catch (e) {
    console.log(e.name,e.message);
    console.log(`${points} - не является массивом`);
  }
}
OrdersTeleportationPointLocator.prototype.getClosest = function (x,y,z) {
  let lgth;
  let score;
  points.forEach(function(point){
    if (lgth > point.getDistance(x,y,z) || lgth === undefined) {
      lgth = point.getDistance(x,y,z);
      score = point;
    }
  });
  return score;
}

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
const marker = new OrdersTeleportationPointLocator(points);
const score = marker.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${score.title}»`);


console.log(`\nЗадание 3`);

function LoyaltyCard(name,sum) {
  this.owner = name;
  this.id = generateId();
  this.balance = sum;
  Object.defineProperties(this, {
    "discount": {
      'get': function() {
        if (this.balance <= 3000) {
          return 0;
        }else if (3000 < this.balance && this.balance <=5000 ) {
          return 3;
        }else if (5000 < this.balance && this.balance <= 10000) {
          return 5;
        }else if (this.balance > 10000) {
          return 7;
        } 
      }
    }
  });
  this.getFinalSum = function(sum) {
    return sum-sum*this.discount/100;
  }
  this.append = function(sum) {
    Object.defineProperty(this, 'balance', {
      writable: true,
    });
    this.balance += sum;
    this.purchases.push(sum);
    Object.defineProperty(this, 'balance', {
      writable: false,
    });
  }
  this.show = function () {
    console.log(`\nКарта ${this.id}:\nВладелец: ${this.owner}\n  Баланс: ${this.balance} Q\n  Текущая скидка: ${this.discount} %\n  Заказы:`);
    for (let i = 0; i < this.purchases.length; i++) {
      console.log(`\t#${i+1} на сумму ${this.purchases[i]} Q`);      
    }
  }

  this.purchases = [sum];
  
  Object.defineProperty(this, 'id', {
    writable: false,
  });
  Object.defineProperty(this, 'balance', {
    writable: false,
  });
}


const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте
  составит ${finalSum} Q. Скидка ${card.discount} %.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();








