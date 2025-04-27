/**
 * 제네릭
 */

// 제네릭 함수 -> 상황에 따라 다른 타입을 담는다
function func<T>(value: T): T {  // T는 타입 변수
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func<[number, number, number]>([1, 2, 3]);