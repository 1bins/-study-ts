/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
}

// value => number -> toFixed
// value => string -> toUpperCase
// value => Date -> getTime
// value => Person: name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {  // typeof 안 쓰는 이유 -> typeof value === "object"로 하게 되면 Date와 null이 다 포함이 되어버림
    console.log(value.getTime());
  } else if (value && "age" in value) {  // value && 을 넣어야 null이 안 들어옴
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
};