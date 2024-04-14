// Задание 5.
// Перепишите консольное приложение из предыдущего юнита на классы.


// Родительский класс
class ElectricDevice {
  constructor(name, power) {
    this.name = name;
    this.powering = 'electricity';
    this.power = power; // мощность прибора
    this.isOn = false; // состояние прибора: false - выключен, true - включен
  }

// Метод родительского класса, который включает/выключает прибор.
  checkPower() {
    if (this.isOn) {
      return `${this.name} включен в розетку`;
    } else {
      return `${this.name} выключен из розетки`;
    }
  }
}

// Конкретный прибор
class Lamp extends ElectricDevice {
  constructor(name, power, color) {
    super(name, power);
    this.color = color;
  }

  
// Собственный метод
  getPower() {
    return `Мощность светильника: ${this.power} Вт`;
  }
}

// Конкретный прибор
class Computer extends ElectricDevice {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

// Собственный метод
  getPower() {
    return `Мощность компьютера: ${this.power} Вт`;
  }
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

