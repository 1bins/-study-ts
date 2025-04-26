/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}
const dog: Dog = {
  name: "별이",
  age: 10,
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  name: "꼬꼬"; // 원본 타입의 서브 타입으로만 재정의 가능
  isFly: boolean;
}

// 다중확장
interface DogCat extends Dog, Cat {

}
const dogCat: DogCat = {
  name: "",
  age: 15,
  isBark: true,
  isScratch: true
}