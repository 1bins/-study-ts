/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// TS => 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
};


/**
 * 화살표 함수의 타입을 정의
 */
const add = (a: number, b: number) => a + b;


/**
 * 함수의 매개변수
 */
function introduce(name = "서원빈", tall?: number) {
  console.log(`name: ${name}`);
  // tall이 옵셔널 매개변수라서 타입가드(타입좁히기) 해야 숫자형 계산 가능 - 옵셔널은 undefined로도 반환이 될수 있어서
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
};

introduce("서원빈", 174);
introduce("김성찬");


/**
 * rest 매개변수 (...)
 */
function getSum(...rest: number[]) { // tuple로 전달할 경우 [number, number, number]
  return rest.reduce((acc, cur) => acc + cur, 0);
};

console.log(getSum(1, 2, 3)); // 6
console.log(getSum(1, 2, 3, 4, 5)); // 15