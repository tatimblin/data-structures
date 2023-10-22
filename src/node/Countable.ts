export class Countable {
    #count: number;
  
    constructor(count = 0) {
      this.#count = count;
    }
  
    increment(relative = 1): number {
      this.#count += relative;
      return this.#count;
    }
  
    decrement(relative = 1): number {
      this.#count -= relative;
      return this.#count;
    }
  
    get() {
      return this.#count;
    }
}