/*1) У кожного об'єкту є властивість __proto__
  2) В цій вл-сті лежить посилання на його PROTOTYPE, тобто інший об'єкт
  3) При створені літералу об'єкту, в вл-сть __proto__ записується посилання на 
     функція.prototype
  4) всю магія завдяки оператору new
  5) якщо ф-ція викликається ч/з new, створюється порожній об'єкт 
  6) ф-ція викликається в контексті створеного об'єкту
  7) у вл-сть this.__proto__ записується посилання на об'єкт Функція.prototype
  8) Посилання на повертається в місце виклику new функція()*/

const User = function ({ email, password } = {}) {
    this.email = email
    this.password = password
};

User.prototype.changeEmail = function (newEmail) { //метод для екземпляру
    this.email = newEmail
}

User.logInfo = function (objMango) { //СТАТИЧНА ВЛ-СТЬ, ДОСТУПНА ТІЛЬКИ У Ф-ЦІЇ КОНСТРУКТОРІ І НЕ ДОСТУПНА В ЕКЗЕМПЛЯРІ
    console.log('Mail', objMango.email) //в статичних методах не використовується this
    console.log('pwd', objMango.password)
}



const mango = new User({ email: 'mango@mail.com', password: 111111 });

mango.changeEmail('newmailmango@mail.com')
User.logInfo(mango)
console.log(mango)

