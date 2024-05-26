# LeastRecentlyUsed

An implementation of a `LinkedList` that has a set size and adds new nodes or moves existing nodes to the front of the list while drpping old nodes. It is useful for caching data that will probably be needed more than once somewhat consecutively.

## Usage

```
new LeastRecentlyUsed<Value, Key?>(size: number);
```

## Properties

### size

The number of items in the cache.

## Methods

### withLimit(limit: number): this

Update the limit of an existing cache.

### get(key: Key): Value

Get the element for a particular node and move it to the head of the cache.

### post(value: Value): void

Adds an element to the head of the cache, removes duplicate.

### put(value: Value, key?: Key): void

Updates a value in the cache in-place if found, otherwise adds to the head of the cache.

### delete(key: Key): Value

Removes an element from the cache.

### pop(): Value

Removes and returns the head of the cache.

### has(key: Key): boolean

Returns true if element exists in cache.

### toArray(): Value[]

Return an array of each element in the cache.

### clear(): void

Remove all nodes in cache.
