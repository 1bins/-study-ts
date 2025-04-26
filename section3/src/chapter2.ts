/**
 *  Unknown 타입
 */
function unknownExam() {
  // ✅ 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // ❌ 다운 캐스팅
  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
};

/**
 *  Never 타입
 *  어떤 값도 저장하면 안 되는 변수에 활용하면 좋음.
 *  전부 다 다운캐스팅이 안 되기 때문에
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {

    }
  }

  // ✅ 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // ❌ 다운 캐스팅
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 * undefined의 슈퍼타입이다.
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
 * any 타임
 * 모든 타입의 슈퍼타입이기도 하고 never를 제외한 모든 타입의 서브타입이다.
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  // 어떠한 타입이든 업/다운 캐스팅이 다 됨
  // ⛔ 사용하기 조금 위험함
  anyVar = unknownVar;
  undefinedVar = anyVar;
  
  // ❌ never는 안됨
  // neverVar = anyVar;
}