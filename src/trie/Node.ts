import { Completable } from "..";

export class Node {
  element: string;
  children: { [key:string]: Node };
  complete: Completable;

  constructor(element: string) {
    this.element = element;
    this.children = {};
    this.complete = new Completable();
  }
}