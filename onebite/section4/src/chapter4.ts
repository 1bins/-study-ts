/**
 * 사용자 정의 타입가드
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog { // true를 반환하면 animal은 Dog타입이다.
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}
function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal);
  } else if (isCat(animal)) {
    console.log(animal);
  }
}