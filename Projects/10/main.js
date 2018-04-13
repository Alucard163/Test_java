'use strict';
const items = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
];

const itemPrototype = {
  sell(field, amount = 1) {
    if (this[field] < amount) {
      throw `Недостаточно товара для продажи (${this[field]} из ${amount})`
    }
    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    return itemPrototype.sell.call(this, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    return itemPrototype.sell.call(this, 'available', amount);
  }
};


//Задание 1

console.log(`Задание 1\n`);
function sellItem(item,amount,isHolded=false) {
  if(typeof(amount) === 'number' && amount > 0) {
    if(isHolded) {
      try {
        itemPrototype.sellHolded.call(item,amount);
      }catch(e){
        console.log(`"${item.title}" - в наличии нет запрашиваемого количества - ${amount}. Остаток ${item.holded} шт.`);
      }
    }else {
      try {
        itemPrototype.sellAvailable.call(item,amount);
      }catch(e){
        console.log(`На складе нет товара "${item.title}" в количестве ${amount}шт. В наличии только   ${item.available}шт.`);
      }
    }
  }else console.log(`Вы допустили при вводе количества товара, ${amount} - недопустимое значение!`);
}

sellItem(items[2], 1);
console.log(items[2].available); // 0
console.log(items[2].holded); // 1

sellItem(items[1], 6, true);
console.log(items[1].available); // 4
console.log(items[1].holded); // 1

const item = { available: 0, holded: 1 };
sellItem(item, 1, true);
console.log(item.available); // 0
console.log(item.holded); // 0


//Задание 2

function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

function show(format) {
  console.log(format());
}

function showItems(list, formatter) {
  list.forEach(function (item) {

    show(formatter.bind(item));
  });
}

console.log('\n-------------------------------------')
console.log(`\nЗадание 2\n`);
console.log(`Пример использования функции`);

showItems(items, formatFull);
console.log('\n');
showItems(items, formatLite);


//Задание 3

console.log('\n-------------------------------------')
console.log(`\nЗадание 3\n`);

function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

function basketInfo() {
  console.log(`${this.title} добавлен в корзину`);
}

function createBuyButtons(items) {
  let servicesButtons = [];
  items.forEach(function (item) {
    let innerOnClick = basketInfo;
    servicesButtons.push(
      createButton('Купить', innerOnClick.bind(item))
    );
  });

  return servicesButtons;

}
const buttons = createBuyButtons(items);

buttons[0].click();
buttons[2].click();
buttons[1].click();