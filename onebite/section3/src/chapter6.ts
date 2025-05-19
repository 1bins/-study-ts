/**
 * 타입 단언 (as 키워드)
 */
type Person = {
  name: string;
  age: number;
}

/* person에 우선 빈 객체를 만들고, 나중에 Person 타입에 맞는 값을 넣어주고 싶을 때
  let person: Person = {};
  person.name = "서원빈";
  person.age = 30;
*/
// -> 타입 단언을 사용함
let person = {} as Person;
person.name = "서원빈";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "white",
  breed: "말티즈"
} as Dog;


/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다
 */
let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입

// let num3 = 10 as string; ❌ 오류
// -> 다중단언 (💩 좋은 방법 절대 아님)
let num3 = 10 as unknown as string;


/**
 * const 단언
 * 변수를 선언했을 때 const(상수)로 선언한 것과 동일한 효과로 만듦
 * 객체 타입과 사용했을 때 활용도 높음 -> 모든 프로퍼티가 readonly로 초기화 되버림
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow"
} as const;
// cat.name = "변경안된다" ❌ 오류


/**
 * Non null 단언 (! 키워드)
 * 어떤 값이 null, undefined 아니라고 알려줌
 */
type Post = {
  title: string;
  author?: string;
};

let post:Post = {
  title: "게시글1",
  author: "서원빈"
};

// const len: number = post.author?.length; // ❌ 옵셔널 체이닝을 사용하면 값이 undefined가 될 수 있음
const len: number = post.author!.length; // !를 사용하여 non null 단언 사용함