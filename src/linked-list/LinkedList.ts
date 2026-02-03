import { Node } from "./Node.js";
import { deepEquals } from "../utils/index.js";

export type ReturnMode = "node" | "element";

type ListReturn<V, M extends ReturnMode> = M extends "node" ? Node<V> : V;
type ListReturnNullable<V, M extends ReturnMode> = M extends "node"
  ? Node<V> | null
  : V | null;

export class LinkedList<
  Value,
  Mode extends ReturnMode = "element",
  Key = Value,
> {
  #head: Node<Value>;
  #tail: Node<Value>;
  #size: number;
  #matcher: (element: Value) => Key;
  #nodes: WeakSet<Node<Value>>;
  #mode: Mode;

  private constructor(mode: Mode) {
    this.#head = new Node();
    this.#tail = this.#head;
    this.#size = 0;
    this.#matcher = (element: Value) => element as unknown as Key;
    this.#nodes = new WeakSet();
    this.#mode = mode;
  }

  static nodes<V, K = V>(): LinkedList<V, "node", K> {
    return new LinkedList<V, "node", K>("node");
  }

  static elements<V, K = V>(): LinkedList<V, "element", K> {
    return new LinkedList<V, "element", K>("element");
  }

  withMatcher(matcher: (element: Value) => Key): this {
    this.#matcher = matcher;
    return this;
  }

  get size(): number {
    return this.#size;
  }

  /**
   * Returns the tail element/node, or null if the list is empty.
   */
  get tail(): ListReturnNullable<Value, Mode> {
    if (this.#tail === this.#head) {
      return null as ListReturnNullable<Value, Mode>;
    }
    return this.#returnNullable(this.#tail) as ListReturnNullable<Value, Mode>;
  }

  /**
   * Inserts an element at the specified index.
   * Use insert(0, value) for unshift, insert(size, value) for push.
   */
  insert(index: number, element: Value): ListReturn<Value, Mode> {
    this.#validateIndex(index, true);

    const node = new Node(element);
    let pointer = this.#head;

    for (let i = 0; i < index; i++) {
      if (!pointer.next) {
        throw new Error(`Missing node in position ${i}`);
      }
      pointer = pointer.next;
    }

    node.next = pointer.next;
    node.prev = pointer;
    if (node.next) {
      node.next.prev = node;
    } else {
      this.#tail = node;
    }
    pointer.next = node;
    this.#size += 1;
    this.#nodes.add(node);

    return this.#return(node) as ListReturn<Value, Mode>;
  }

  /**
   * Removes and returns the element/node at the specified index.
   * Use remove(0) for shift, remove(size-1) for pop.
   */
  remove(index: number): ListReturnNullable<Value, Mode> {
    this.#validateIndex(index);

    let pointer: Node<Value> = this.#head;

    for (let i = 0; i <= index; i++) {
      if (!pointer.next) {
        throw new Error(`Missing node in position ${i}`);
      }
      pointer = pointer.next;
    }

    if (pointer.prev) {
      pointer.prev.next = pointer.next;
    }
    if (pointer.next) {
      pointer.next.prev = pointer.prev;
    } else if (pointer.prev) {
      this.#tail = pointer.prev;
    }

    this.#size -= 1;
    this.#nodes.delete(pointer);

    return this.#returnNullable(pointer) as ListReturnNullable<Value, Mode>;
  }

  /**
   * Gets the element/node at the specified index.
   */
  get(index: number): ListReturnNullable<Value, Mode> {
    this.#validateIndex(index);

    let pointer: Node<Value> | null = this.#head;

    for (let i = 0; i <= index; i++) {
      if (!pointer) {
        throw new Error(`Missing node in position ${i}`);
      }
      pointer = pointer.next;
    }

    if (!pointer) {
      throw new Error(`Missing node in position ${index}`);
    }

    return this.#returnNullable(pointer) as ListReturnNullable<Value, Mode>;
  }

  /**
   * Finds and returns the element/node matching the key.
   */
  find(key: Key): ListReturnNullable<Value, Mode> {
    let pointer: Node<Value> | null = this.#head.next;

    while (pointer) {
      if (pointer.element && this.#compare(key, pointer.element)) {
        return this.#returnNullable(pointer) as ListReturnNullable<Value, Mode>;
      }
      pointer = pointer.next;
    }

    return null as ListReturnNullable<Value, Mode>;
  }

  /**
   * Returns the index of the element matching the key, or -1 if not found.
   */
  findIndex(key: Key): number {
    let pointer: Node<Value> | null = this.#head.next;
    let index = 0;

    while (pointer) {
      if (pointer.element && this.#compare(key, pointer.element)) {
        return index;
      }
      pointer = pointer.next;
      index += 1;
    }

    return -1;
  }

  /**
   * Returns true if an element matching the key exists.
   */
  has(key: Key): boolean {
    return this.findIndex(key) >= 0;
  }

  /**
   * Finds and removes the element matching the key in one pass.
   */
  removeBy(key: Key): ListReturnNullable<Value, Mode> {
    let pointer: Node<Value> | null = this.#head.next;

    while (pointer) {
      if (pointer.element && this.#compare(key, pointer.element)) {
        if (pointer.next) {
          pointer.next.prev = pointer.prev;
        } else if (pointer.prev) {
          this.#tail = pointer.prev;
        }
        if (pointer.prev) {
          pointer.prev.next = pointer.next;
        }
        this.#size -= 1;
        this.#nodes.delete(pointer);

        return this.#returnNullable(pointer) as ListReturnNullable<Value, Mode>;
      }
      pointer = pointer.next;
    }

    return null as ListReturnNullable<Value, Mode>;
  }

  /**
   * Removes a node directly (O(1) when you have the node reference).
   */
  removeNode(node: Node<Value>): void {
    if (!this.#nodes.has(node)) {
      throw new Error(`Node of ${node.element} is not part of this list`);
    }

    const former = node.prev;
    const latter = node.next;

    if (former && latter) {
      former.next = latter;
      latter.prev = former;
    } else if (former) {
      former.next = null;
      this.#tail = former;
    } else if (latter) {
      latter.prev = null;
    }

    this.#size -= 1;
    this.#nodes.delete(node);
  }

  /**
   * Converts the list to an array.
   */
  toArray(start = 0, end = this.#size): Array<ListReturn<Value, Mode>> {
    const list: Array<ListReturn<Value, Mode>> = [];

    let pointer: Node<Value> = this.#head;
    let index = 0;

    while (pointer.next) {
      pointer = pointer.next;
      if (!pointer || !pointer.element) {
        break;
      }

      if (index >= start) {
        list.push(this.#return(pointer) as ListReturn<Value, Mode>);
      }

      if (index >= end) {
        break;
      }

      index += 1;
    }

    return list;
  }

  #validateIndex(index: number, allowTail?: boolean): void {
    const size = allowTail ? this.size : this.size - 1;
    if (index < 0 || index > size) {
      throw new Error("Index is out of bounds");
    }
  }

  #compare(key: Key, element: Value): boolean {
    return deepEquals(key, this.#matcher(element));
  }

  #return(node: Node<Value>): Node<Value> | Value {
    return this.#mode === "node" ? node : (node.element as Value);
  }

  #returnNullable(node: Node<Value> | null): Node<Value> | Value | null {
    if (!node) return null;
    return this.#mode === "node" ? node : node.element;
  }
}
