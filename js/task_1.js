const cat = {
    legs: 'four'
}

const dog = Object.create(cat)//ств. нов. об'єкт dog і зв'язує його з об'єктом cat
dog.name = 'Sharik'

console.log(Object.keys(dog))
console.log(dog)
console.log(dog.legs)//тепер можна знайти властивість з cat в об'єкті dog
console.log(cat.isPrototypeOf(dog))//метод перевіряє чи один об'єкт є прототипом іншого

console.log('метод перевіряє чи це властивість обєкту',dog.hasOwnProperty('name'))
console.log('метод перевіряє чи це властивість обєкту', dog.hasOwnProperty('legs'))



