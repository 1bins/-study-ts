/**
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 50,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};


/**
 * 인덱스 시그니처
 */
interface IMap<V> {
  [key: string]: V;
}

let stringMap: IMap<string> = {
  key: "value",
  myKey: "hello",
};

let booleanMap: IMap<boolean> = {
  key: true,
  test: false,
};


/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};


/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * 유저 구분: 학생 유저 / 개발자 유저
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "서원빈",
  profile: {
    type: "developer",
    skill: "TypeScript"
  }
}

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교"
  }
}