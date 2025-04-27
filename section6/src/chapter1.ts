/**
 * 타입스크립트의 클래스
 */
const employee = {
  name: "서원빈",
  age: 30,
  position: "developer",
  work() {
    console.log("일함");
  }
}

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("김성찬", 26, "singer");
console.log(employeeB);

// 타입스크립트의 클래스는 타입으로도 활용할 수 있다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
}
