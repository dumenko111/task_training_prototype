// спадкування EXTENDS / SUPER()
//створюємо базовий клас Hero з якого будуть успадковувати в-сті. інші класи
class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {//ко-тор отримує об'єкт від екземпляру класу
        this.name = name
        this.xp = xp
    }
    gainXp(amonth) { //метод класу
        console.log(`${this.name} отримує ${amonth} мани`)
        this.xp += amonth //буде добавляти очки досвіду до хр
    }
    
}
const mango = new Hero({ name: 'Mango', xp: 1000 }) //екземпляр класу


class Warrior extends Hero{ //новий клас, спадкує вл-сті. класу Hero
    constructor(config) {
        super(config)
        this.weapon = config.weapon
    }
    attack() { //метод класу
        console.log(`${this.name} attack use ${this.weapon} `)
    }
    changeWeapon(newWeapon) {
        console.log(`${this.name} change weapon to ${newWeapon}`)
        this.weapon = newWeapon
    }
}
const ajax = new Warrior({ name: 'Ajax', xp: 1500, weapon: 'gun' }) //екземпляр класу Warrior



class Mage extends Hero {
    constructor(name, xp, spells = []) {
        super(name, xp)

        this.spells = spells
    }
}
const poly = new Mage({ name: 'Poly', xp: 500, spells: ['fireball']})

console.log(poly.spells)



// console.log(ajax)
// ajax.attack()
// ajax.gainXp(100)
// ajax.changeWeapon('arbalet')
// ajax.attack()
// ajax.gainXp(200)
// console.log(ajax)


