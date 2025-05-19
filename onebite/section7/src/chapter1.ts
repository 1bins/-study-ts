/**
 * 첫번째 사례
 * 타입 변수 여러 개 선언하기
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);


/**
 * 두번째 사례
 * 배열 타입과 함께 사용
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0

let str = returnFirstValue(["hello", "myNameIs", 1]); // "hello"


/**
 * 세번째 사례
 */
interface InterfaceA {
  length: number;
}
interface InterfaceB extends InterfaceA {}

// 위에랑 같은 문법, T는 length: number 를 포함한다
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10); 에러