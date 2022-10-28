// класи і конструктори одне і теж в принципі
class Car1 {
    static description = 'це опис / статична в-сть'; //статична в-сть. В класі спочатку записуються статичні в-сті потім конструктор, а тоді методи класу/Статичні методи не йдуть на екземпляр
    static logInfo(carObj) { //це статичний метод - доступний тільки на класі
        console.log('Car.logInfo -> carObj', carObj)
    }
    #test = 'test' //приватна в-сть/вона оголошується тільки в класі і доступна в ньому
    constructor({ brand, model, price } = {}) {
        this._brand = brand
        this.model = model
        this.price = price
    }
    // changePrice(newPrice) { //метод класу
    //     this.price = newPrice
    // } використовуємо GET для читання вл-сті класу і SET для перезапису в-сті класу
    get brand() { //getter
        return this._brand
    }
    set brand(newBrand) { //setter
        this._brand = newBrand
    }
    // updateModel(newModel) { //метод класу
    //     this.model = newModel
    // }
    get model() { //getter
        return this._model
    }
    set model(newModel) { //setter
        this._model = newModel
    }
}


const carInstance = new Car1({ //екземпляр класу
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
})

Car1.logInfo(carInstance)
carInstance.brand = 'Audi))))' //виклик сетера
console.log(carInstance)
console.log(carInstance.brand) //виклик гетера
carInstance.model = 'A6'  //виклик сетера
console.log(carInstance)


