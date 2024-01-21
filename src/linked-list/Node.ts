export class Node<T> {
  element: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(element: T | null = null) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}