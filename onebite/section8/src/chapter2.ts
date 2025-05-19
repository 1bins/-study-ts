/**
 * keyof 연산자
 * 객체타입의 프로퍼티 키 추출가능
 * keyof 뒤에 항상 타입이 들어와야함
 */

interface Person {
  name: string;
  age: number;
}


function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "서원빈",
  age: 30,
};

getPropertyKey(person, "name"); // 서원빈


// person2를 추론해서 type 별칭 Person2에 정의
type Person2 = typeof person2;

function getPropertyKey2(person: Person, key: keyof typeof person2) { // 💡 keyof (typeof person2 => person2 변수 추론한 Type)
  return person[key];
}

const person2 = {
  name: "서원빈",
  age: 30,
};