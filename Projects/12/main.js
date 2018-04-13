'use strict';
// Задание 1
  
function checkCoupon(couponData) {
  couponData = couponData.toLowerCase().replace(/[^0-9a-z]/gm,'');
  let reverseCouponData = couponData.split("").reverse().join("");
  return couponData === reverseCouponData && couponData.length >= 10;
}
console.log(`Задание 1\n`);
let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

// Задание 2

function stripTags(markupString) {

  return markupString.replace(/<\/?[a-z][a-z0-9]*\s?\/?>/gim, '');
}

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой мечь</EM> в <strong>каждый</strong> дом!',
  'Картинка: <img />',
  'Заголовок: <h1>Заголовок</h1>',
  'whenever B < A and B > C, then also A > C'
];

console.log(`\nЗадание 2\n`);
for (let text of texts) {
  console.log(stripTags(text));
}

// Задание 3

function validate(formData, fieldConditions) {
  for (let fieldRequest of fieldConditions) {
    let fieldValue = formData[fieldRequest.name];
    let fieldName;
    if (typeof fieldRequest.rule === 'string') {
      if (fieldRequest.rule === 'email') {
        fieldName = /\w+@\w+\.\w{2,6}$/;
      }else if (fieldRequest.rule === 'phone') {
        fieldName = /\+7\d{10}$/;
      }
    }else fieldName = fieldRequest.rule;
    if (!fieldName.test(fieldValue)) {
      return false;
    }
  }
  return true;
}

const fields = [
  {name: 'name', rule: /^[a-z ]{5,}$/i},
  {name: 'email', rule: 'email'},
  {name: 'phone', rule: 'phone'},
];

const forms = [
  {name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79277732238'},
  {name: 'III', email: 'ivan@test', phone: '11111'},
  {name: 'Ivan Ivanov', email: 'ivan@test', phone: '+79277732238' }
];

console.log(`\nЗадание 3\n`);

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет\n');
  } else {
    console.log('Форма заполнена не верно\n');
  }

}