'use strict';

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [11700, 1980, 450, 5500]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [440, 226, 7650, 2990, 70]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [720]
}];

// Задание 1

clients.findByName = function (name) {
  return this.find(function (item) {
    return item.name === name;
  })
};

console.log(`Задание 1\n`);
const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email);

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); 

// Задание 2

const orderAmt = (data, item) => data + item;
function compareByTotalSumm(left, right) {
  const leftAmt = left.orders.reduce(orderAmt, 0);
  const rightAmt = right.orders.reduce(orderAmt, 0);
  return rightAmt - leftAmt;
}

console.log(`\nЗадание 2\n`);
clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));


// Задание 3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list) {
  return list.filter(function (item) {
    return item.isSubscribed === true;
  }).map(function(value) {
    return value.email;
  });
}

console.log(`\nЗадание 3\n`);

getSubscribedEmails(clients).forEach(sendMail);