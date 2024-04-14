// Задание 4.
// 1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// 2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// 4. Создайте экземпляры каждого прибора.
// 5. Вывести результаты в консоль.


// Родительская функция
function ElectricDevice(name, power) {
  this.name = name;
  this.powering = 'electricity';
  this.power = power; // мощность прибора
  this.isOn = false; // состояние прибора: false - выключен, true - включен
}

// Метод родительской функции, который включает/выключает прибор.
ElectricDevice.prototype.checkPower = function () {
  if (this.isOn) {
    return `${this.name} включен в розетку`;
  } else {
    return `${this.name} выключен из розетки`;
  }
}

// Конкретные приборы
function Lamp(name, power, color) {
  ElectricDevice.call(this, name, power);
  this.color = color;
}

function Computer(name, power, brand) {
  ElectricDevice.call(this, name, power);
  this.brand = brand;
}

// Делегирующая связь
Lamp.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype = Object.create(ElectricDevice.prototype);

// Собственные методы
Lamp.prototype.getPower = function () {
  return `Мощность светильника: ${this.power} Вт`;
}

Computer.prototype.getPower = function () {
  return `Мощность компьютера: ${this.power} Вт`;
}

// Создание экземпляров каждого прибора
const lamp = new Lamp('Светильник', 60, 'Белый');
const computer = new Computer('Компьютер', 500, 'Apple');

// Включаем лампу
lamp.isOn = true;

// Проверка работы и мощности приборов
console.log(lamp.checkPower());
console.log(lamp.getPower());

console.log(computer.checkPower());
console.log(computer.getPower());
