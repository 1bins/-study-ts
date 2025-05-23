/**
 * 함수 오버로딩 (TS에서만 지원됨)
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개: 매개변수 * 20 출력
 * -> Ver2. 매개변수가 3개: 매개변수들을 다 더한 값을 출력
 */

// 오버로드 시그니처: 함수에 어떤 버전들이 있는지 알려줘야함
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처: 함수의 실제 구현부
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  }else {
    console.log(a * 20);
  }
};

func(1);
func(1, 2, 3);