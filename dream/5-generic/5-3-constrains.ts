interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

ellieAfterPay.workFullTime();


// 예제
const obj = {
  name: 'wonbin',
  age: 30
};

const obj2 = {
  animal: 'dog',
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getValue(obj, 'name'));  // wonbin
console.log(getValue(obj, 'age'));  // 30
console.log(getValue(obj2, 'animal'));  // dog