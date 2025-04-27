/**
 * 맵드 타입
 */
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // key 값으로 뒤에 오는 리터럴 타입이 올 수 있다.
  // Value 타입으로 User[key]가 올 수 있다.
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "서원빈",
    age: 30
  }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "서원빈",
  age: 25
})