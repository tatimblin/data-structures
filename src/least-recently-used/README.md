# LeastRecentlyUsed

An implementation of a `LinkedList` that has a set size and adds new nodes or moves existing nodes to the front of the list while drpping old nodes. It is useful for caching data that will probably be needed more than once somewhat consecutively.

## Usage

```
new LeastRecentlyUsed<T>(size: number);
```

## Methods

### push(element: T): void

Adds a new element or moves an existing element to the head of the cache.

### shift(): T

Remove and return the head of the cache.

### list(): T[]

Return an array of each element in the cache.

### clear(): void

Remove all nodes in cache.

### removeFrom(index: number): T | null

Removes an element from the cache, and returns the element.

### removeElement(element: T): number

Removes whatever element is at a particular index, and returns the index.

### indexOf(): number

Returns the index of an element in the cache.
