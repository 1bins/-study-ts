/**
 * 제네릭 클래스
 */
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}


// 제네릭 클래스는 생성자 호출할 때 타입 변수에 타입 명시안해줘도 됨 -> 스스로 추론함 new List<nubmer> <- 생략 가능
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.pop();
stringList.push("hello");
stringList.print();