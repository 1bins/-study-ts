/**
 * 분산적인 조건부 타입 
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string

// 분산적인 조건부 타입
// 유니온 타입을 넣게 될 경우 두개가 들어가는 게 아니라, 한 번은 number, 한 번은 string 타입이 따로 들어간다.
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number
let b: StringNumberSwitch<number | string>;

let c: StringNumberSwitch<boolean | number | string>;


/**
 * 실용적인 예제
 */
// 유니온 타입에서 특정 타입만 제거
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | never | boolean -> never 는 결국 사라짐 (공집합에 다른 합집합을 더하면 공집합 존재X)

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;