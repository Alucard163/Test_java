
'use strict';

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

//Задание 1

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  unhold(amount = this.holded) {
    if (amount > this.holded) {
      return false;
    }
    this.available += amount;
    this.holded -= amount;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

for (let item of items) {
  console.log(`Товар ${item}`);
}

console.log(`\nЗадание 1`);
console.log(`Товар ${items[0]}`); 
items[0].unhold(1);
console.log(`Товар ${items[0]}`); 
console.log(`Товар ${items[1]}`); 
items[1].unhold();
console.log(`Товар ${items[1]}`); 


// Задание 2

for (let item of positions) {
  const resultPrice = {
    get() {
      return item.price - (item.price * item.discount / 100);
    },
    set(newPrice) {
      if (newPrice > this.price) {
        console.log(`Ошибка! Цена со скидкой должна быть меньше цены без скидок!`);
      }else {
        this.discount = 100 * (1 - newPrice/this.price);
      }
    }
  };
  Object.defineProperty(item, 'finalPrice', resultPrice);
}

console.log(`\nЗадание 2`);
console.log(positions[0].finalPrice); // 9300
positions[2].finalPrice = 28500;
console.log(positions[2].discount); // 50
positions[0].price = 12000;
console.log(positions[0].finalPrice); // 11160


// Задание 3

function isValidPosition(goodsItem, requiredFields) {
  for (let field of requiredFields) {
    if (!goodsItem.hasOwnProperty(field)) {
      return false;
    }
  }
  return true;
}

const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
};

console.log(`\nЗадание 3`);

if ( isValidPosition(form1, requiredFields) ) {
  console.log('Форма №1 заполнена верно');
} else {
  console.log('В форме №1 не заполнены необходимые поля');
}

if ( isValidPosition(form2, requiredFields) ) {
  console.log('Форма №2 заполнена верно');
} else {
  console.log('В форме №2 не заполнены необходимые поля');
}
