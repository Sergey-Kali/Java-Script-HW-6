/* 1. Створити конструктор Accumulator.
  Даний конструктор має приймати число, яке буде початковим значенням.
  Клас має реалізувати методи increment, при виклику якого передане
  значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
*/
function Acumullator(number) {
  this.value = number;
}

Acumullator.prototype.increment = function () {
  this.value += 1;
  console.log("Acumullator +1 =", this.value);
};

Acumullator.prototype.decrement = function () {
  this.value -= 1;
  console.log("Acumullator -1 =", this.value);
};

const newAcc = new Acumullator(10);

newAcc.increment();
newAcc.increment();

newAcc.decrement();

/*2. Створити конструктор CancelableAccumulator,
 який буде наслідувати Accumulator та додатково буде реалізовувати метод clear,
 при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
*/
function CancelableAccumulator(number) {
  Acumullator.call(this, number);
  this.originalValue = number;
}

CancelableAccumulator.prototype = Object.create(Acumullator.prototype);

CancelableAccumulator.prototype.clear = function () {
  this.value = this.originalValue;
  console.log("The base value:", this.value);
};

const newAcc2 = new CancelableAccumulator(33);
newAcc2.increment();
newAcc2.increment();
newAcc2.increment();

newAcc2.decrement();

newAcc2.clear();
