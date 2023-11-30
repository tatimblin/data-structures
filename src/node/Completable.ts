export class Completable {
  #isComplete: boolean;

  constructor() {
    this.#isComplete = false;
  }

  set(state: boolean) {
    this.#isComplete = state;
  }

  get() {
      return this.#isComplete;
  }
}
