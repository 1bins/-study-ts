/**
 * 선언 합침
 * 대부분 모듈 보강 작업 할때 사용
 */

// type으로 선언할 경우 오류 나지만 interface로 선언할 경우 '선언 합침'
interface Person {
  name: string;
}

interface Person {
  // name: number; ❌ 충돌: 똑같은 프로퍼티 중복 정의 할 경우 타입도 똑같이 정의해야함 (!!서브타입도 안됨)
  age: number;
}

const person: Person = {
  name: "",
  age: 28
}


/**
 * 모듈 보강 
 */
// 원본 Lib
interface Lib {
  a: number;
  b: number;
}

// Lib 보강
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello" // 추가
};