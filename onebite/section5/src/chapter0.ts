/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법 => 상속, 합침 등의 특수한 기능을 제공
 */
interface Person {
  readonly name: string;
  age?: number;

  // 오버로드 시그니처 => 호출 시그니처 사용
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // 함수 타입 표현식으로는 오버로드 시그니처 안됨
  sayHi2?: () => void;
}

let person: Person = {
  name: "서원빈",
  age: 30,
  sayHi: function () {
    console.log("Hi");
  }
};

// person.name = "홍길동"; ❌ readonly 프로퍼티
person.sayHi();
person.sayHi(1, 2);