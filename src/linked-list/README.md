# Linked List

## Properties

### size

Returns the number of nodes present in the linked list.

## Methods

### push(element: T): void

Adds an element to the tail of the linked list.

### pop(): T

Removes and returns the element at the tail of the linked list.

### has(element: T): boolean

Returns true if an element exists in the linked list.

### insertAt(element: T, index: number): boolean

Adds an element at a specific index.

### getByIndex(index: number): T

Returns the element at the given index in the linked list.

### getByElement(element: T): number

Returns the index of the element in the linked list (-1 if not present).

### removeByIndex(index: number): <element, number>

Removes an element at a specific index.

### removeByElement(element: T): <element, number>

Find and removes a specific element if present (-1 if not present).

### toArray(start: number, end: number): T[]

Returns the linked-list as an array, can optionally accept a range.
