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


class Warrior extends Hero{ //новий клас Warrior спадкує вл-сті. класу Hero
    constructor({ weapon, ...restProps }) { //обов'язково має бути ко-тор
        super(restProps) // обов'язково має бути/дає доступ до к-тора батьківського класу/в супер передаємо об'єкт, який зібрали рестом глибше, до к-тора Hero
        this.weapon = weapon
    }
    attack() { //метод класу Warrior
        console.log(`${this.name} attack use ${this.weapon} `)
    }
    changeWeapon(newWeapon) { //метод класу Warrior/доступний для екземпляру ajax/не доступний для mango
        console.log(`${this.name} change weapon to ${newWeapon}`)
        this.weapon = newWeapon
    }
}
const ajax = new Warrior({ name: 'Ajax', xp: 1500, weapon: 'gun' }) //екземпляр класу Warrior



class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps) //в супер передаємо об'єкт, який зібрали рестом глибше, до к-тора Hero
        
        this.spells = spells
    }
}
const poly = new Mage({ name: 'Poly', xp: 500, spells: ['fireball']})


class Berserk extends Warrior{
    constructor({warcry, ...restProps }) {
        super(restProps)

        this.warcry = warcry
    }
    babyRage() {
        console.log(this.warcry)
    }
}
const kiwi = new Berserk({name: 'Kiwi', xp: 600, weapon: 'axe', warcry: 'waaaaa'})





console.log(ajax)
ajax.attack()
ajax.gainXp(100)
ajax.changeWeapon('arbalet')
ajax.attack()
ajax.gainXp(200)
console.log(ajax)
console.log(mango)
mango.gainXp(200)
console.log(mango)

console.log(poly)
poly.gainXp(100)
console.log(poly)

console.log(kiwi)
kiwi.babyRage()
kiwi.changeWeapon('knife')
kiwi.attack()
kiwi.gainXp(1234)
console.log(kiwi)




