//оголошуємо ф-цію конструктор. Назва ф-ції з великої букви.
const Car = function ({brand, model, price} = {}) { //ф-ція конструктор/в параметри передаємо об'єкт настройок і одразу робимо деструктуризацію/також по замовчуванню ставимо порожній {}, щоб не було помилки
    // console.log(this) //this посилається на новостворений об'єкт Car
    
    this.brand = brand; //щойно добавили в об'єкт Car властивість a
    this.model = model;
    this.price = price;
}
Car.prototype.changePrice = function (newPrice) { //метод для екземпляру/
    this.price = newPrice    
}

const myCar = new Car({ //екземпляр //якщо ф-ція викликається через new(new це оператор, ставиться перед викликом ф-ції Car)- тому створюється новий об'єкт Car
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
}) 
console.log('Це Car', myCar) 
myCar.changePrice(36000) //міняємо ціну за допомогою методу в строці 9

const myCar2 = new Car({ //екзепляр №2
    brand: 'BMW',
    model: 'X6',
    price: 50000,
}) 
console.log('Це Car2', myCar2) 

const myCar3 = new Car({ //екзепляр №3
    brand: 'Audi',
    model: 'A6',
    price: 65000,
}) 
console.log('Це Car3', myCar3) 
