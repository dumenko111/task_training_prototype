class User {
  // Синтаксис объявления метода класса
  constructor(name, email) { //конструктор в якого клас User
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User("Поли", "poly@mail.com");
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

////////////////////////////////////////////////////////////
//перезаписувати властивості об'єктів через __proto__  не можна

const objC = {
  x: 1
}

const objB = Object.create(objC)
objB.y = 2

console.log(objB.hasOwnProperty('y')) //метод перевіряє чи це власна властивість об'єкту

console.log(objB.x)

const objA = Object.create(objB)
console.log(objA.x)

/////////////////////////////////////////////////////////////
console.log('-----------це щоб в консолі відділити)))----------------------------------')

const dummyObj = Object.create({ message: 'це властивість обєкту прототипа' })
dummyObj.message = 'це власна властивість обєкту dummyObj'

console.log('dummyObj', dummyObj)
console.log(dummyObj.message)



