/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

// 합집합 타입 - Union 타입
let a: string | number | boolean;
a = "string";
a = 20;
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  language: ""
};

let union2: Union1 = {
  name: "",
  color: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: ""
};

// 교차 타입 = Intersection 타입
let neverMake: string & number; // never타입

type Intersection = Dog & Person; // Dog과 Person 속성 둘 다 만족해야 한다. -> 객체 타입만 해당

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}