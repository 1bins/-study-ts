/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 인터페이스로 정의한 필드들은 무조건 public 으로만 정의 가능
  constructor(public name: string, public moveSpeed: number) {}

  move() {
    console.log(`${this.name}의 이동속도는 ${this.moveSpeed}입니다!`)
  }
}