/**
 * 조건부 타입
 * 삼항연산자 이용
 */
// A extends B -> A가 (B의)서브타입이냐 ? true : false;
type A = number extends string? string: number;

type ObjA = {
  a: number;
}

type objB = {
  a: number;
  b: number;
}

type B = objB extends ObjA ? number : string; // number


/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string: number;

let varA: StringNumberSwitch<number>; // string

let varB: StringNumberSwitch<string>; // number

// 함수 내부에서는 T 타입변수를 unknown 취급함
// => overload 시그니처 사용
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any){
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im 1bins");
result.toUpperCase();

let result2 = removeSpaces(undefined);