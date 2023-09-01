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

export class Node<T> {
  element: T | null;
  next: Node<T> | null;

  constructor(element: T | null = null) {
    this.element = element;
    this.next = null;
  }
}
