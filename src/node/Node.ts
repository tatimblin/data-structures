class Completable {
  #isComplete: boolean;

  constructor(isComplete = false) {
    this.#isComplete = isComplete;
  }

  set isComplete(state: boolean) {
    this.#isComplete = state;
  }

  get isComplete() {
    return this.#isComplete;
  }
}

class Nextable {
  #next: Node | null;

  constructor(next: Node | null = null) {
    this.#next = next;
  }

  set next(next: Node) {
    this.#next = next;
  }

  get next(): Node | null {
    return this.#next;
  }
}

export class Node {
  element: any;
  next: Node | null;

  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}
