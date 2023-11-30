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

### pop(): T

Remove and return the tail of the cache.

### get(index: number): T

Returns the element at the specified index in the cache. Default = 0.

### has(element: T): boolean

Returns true if the element is present in the cache.

### list(): T[]

Return an array of each element in the cache.

### delete(element: T): T

Remove a specific node in the cache

### clear(): void

Remove all nodes in cache.
