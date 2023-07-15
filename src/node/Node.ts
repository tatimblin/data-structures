export class Node {
  element: any;
  next: Node | null;

  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}