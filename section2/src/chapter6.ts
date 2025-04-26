// any
// 특정 변수의 타입을 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

// ⚠ 타입 에러가 런타임에 일어남
// anyVar.toUpperCase();
// anyVar.toFixed();


// unknown
let unknownVar: unknown;
unknownVar = 1;
unknownVar = () => {};

// 모든 타입에서 사용할 수 없음
// unknownVar.toFixed();

// 타입 정제를 통해 사용가능
if (typeof unknownVar === "number") {
    unknownVar.toFixed();
}