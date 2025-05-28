// either: a or b
interface Either<T, U> {
  left: () => T;
  right: () => U;
}

class SimpleEither<T, U> implements Either<T, U> {
  constructor(private leftValue: T, private rightValue: U) {}

  left(): T {
    return this.leftValue;
  }

  right(): U {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();

const best = new SimpleEither(4, 'hello');