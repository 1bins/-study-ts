/**
 * 접근 제어자 (Access modifier)
 * public: 아무 제약이 없는 상태 (기본 상태)
 * private: 프로퍼티에 접근 불가 / 읽을수 조차 없다 != readonly
 * protected: 프로퍼티에 접근 불가 / 단, 파생클래스 매서드에서는 접근 가능
 */
class Employee {
  
  // 💡 생성자에서 접근 제어자를 달게 될 경우
  // 필드 정의 생략 가능
  // this.name = name; 과 같은 초기화 안 해줘도 됨!
  constructor(public name: string, private age: number, protected position: string) {}

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

  func() {
    // this.age ❌ private 오류
    console.log(this.position); // ✅ protected 는 파생 클래스에서 접근 가능
  }
}

const employee = new Employee("서원빈", 30, "Frontend Developer");
employee.name = "홍길동";
// employee.age = 29; console.log(employee.age); ❌ private 오류
// employee.position = "designer"; ❌ protected 오류