{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 10;

    constructor(public coffeeBeans: number = 0) {}

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }

      this.coffeeBeans-= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false
      }
    }
  }

  const maker = new CoffeeMaker(30);
  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3);
  console.log(maker2);
}