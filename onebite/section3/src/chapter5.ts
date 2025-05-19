/**
 * 타입 추론
 */
// 자동으로 변수의 타입을 추론 -> 변수의 초기값을 가지고 추론한다.
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "서원빈",
  profile: {
    nickname: "1bean",
  },
  urls: ["github.com/1bins"]
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
};


// Any 타입의 진화
// 아무것도 할당 안 하게 되면 any 타입으로 추론
let d;
d = 10; // number로 추론
d.toFixed();
// d.toUpperCase(); ❌ 오류

d = "hello"; // string으로 추론
d.toUpperCase();


// const로 선언할 경우
const num = 10; // 이 값을 갖는 넘버 리터럴 타입으로 추론 -> const는 상수이기 때문에


let arr = [1, "string"];