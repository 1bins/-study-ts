/**
 * 클래스
 */
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 매서드
  study() {
    console.log("열심히 공부 함");
  }

  get personName() {
    return `안녕하세요, 제 이름은 ${this.name}입니다`;
  }

  set personName(setName) {
    this.name = setName;
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentA = new Student("서원빈", "S+", 30);
console.log(studentA);
console.log(studentA.personName);

studentA.personName = "홍길동";
console.log(studentA);
console.log(studentA.personName);

class StudentDeveloper extends Student{
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  study() {
    console.log(`열심히 ${this.favoriteSkill} 공부 함`);
  }
}

let studentB = new StudentDeveloper("서원빈", "S0", 30, "프론트엔드");
studentB.study();