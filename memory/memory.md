# JavaScript Memory Visualized

Two regions. One runtime. Every value you create lands in either the Stack or the Heap, and knowing which one explains almost every "weird" JavaScript behavior.

---

## 1. The Stack vs. The Heap

The Stack handles function calls and references. The Heap handles the bulk data.

```
       STACK (Fast & Organized)                HEAP (Large & Unordered)
    +--------------------------+            +--------------------------+
    |                          |            |                          |
    |  let age = 25            |            |    {                     |
    +---------------------------+           |      name: "Savage",     |
    |  let name = "Ace"        |            |      skills: [...]       |
    +--------------------------+            |    }                     |
    |  let user ---+           |            |    addr: 0x001           |
    +--------------|-----------+            +--------------------------+
                   |                               ^
                   +------- Reference/Pointer -----+

  Primitives  ->  value lives directly in Stack
  Objects     ->  Stack holds a pointer; data lives in Heap
```

---

## 2. Primitive Copy (Independent)

Copying a primitive creates a completely new box on the Stack. The two variables have zero connection after the copy.

```
    1. let x = 10;          2. let y = x;           3. y = 20;

    +-----------+           +-----------+           +-----------+
    |   x: 10   |           |   x: 10   |           |   x: 10   |  <- Unchanged
    +-----------+           +-----------+           +-----------+
    |           |           |   y: 10   |           |   y: 20   |  <- Independent
    +-----------+           +-----------+           +-----------+
        STACK                   STACK                   STACK

  x and y are separate boxes. Changing one never affects the other.
```

```js
let x = 10;
let y = x;  // value is copied
y = 20;

console.log(x); // 10 -- unchanged
console.log(y); // 20 -- independent
```

---

## 3. Reference Copy (Shared Pointer)

Copying an object does not copy the data. It copies the address (pointer) to that data. Both variables end up pointing at the same object in the Heap.

```
    let obj1 = { n: 1 };
    let obj2 = obj1;

       STACK (Pointers)                        HEAP (Actual Data)
    +-------------------+               +-----------------------+
    |  obj1: 0x442  ----+--------+      |                       |
    +-------------------+        |      |   { n: 1 }            |
    |  obj2: 0x442  ----+--------+----->|   addr: 0x442         |
    +-------------------+               |                       |
                                        +-----------------------+

  Both variables point to the same object.
  Mutating via obj2 also changes what obj1 sees -- it is the same data.
```

```js
let obj1 = { n: 1 };
let obj2 = obj1;  // pointer is copied, NOT the object

obj2.n = 99;

console.log(obj1.n); // 99 -- affected because they share the same object
console.log(obj2.n); // 99
```

Note: To get a true independent copy, use `{ ...obj1 }` (spread) or `structuredClone(obj1)`.

---

## 3b. Arrays Work the Same Way

Arrays are objects too. They live in the Heap and are passed by reference.

```
    let arr  = [1, 2, 3];
    let arr2 = arr;

       STACK                                  HEAP
    +--------------------+            +---------------------+
    |  arr:  0xF10  -----+-------+    |                     |
    +--------------------+       |    |   [ 1, 2, 3 ]       |
    |  arr2: 0xF10  -----+-------+--->|   addr: 0xF10       |
    +--------------------+            |                     |
                                      +---------------------+

  arr2.push(4) also changes arr -- same address, same array.
```

```js
let arr  = [1, 2, 3];
let arr2 = arr;
arr2.push(4);

console.log(arr);  // [1, 2, 3, 4] -- changed
console.log(arr2); // [1, 2, 3, 4]
```

---

## 4. Function Call Stack (LIFO)

Every function call pushes a frame onto the Stack. Each frame holds the function's arguments and local variables. When a function finishes, its frame is popped and memory is freed instantly.

```
    Calling:  a()  ->  b()  ->  c()

    -- PUSH PHASE --------------------------------------------------

    Step 1          Step 2          Step 3
    +----------+    +----------+    +----------+
    |          |    |  b()     |    |  c()     |  <- executing
    |          |    +----------+    +----------+
    |  a()     |    |  a()     |    |  b()     |
    +----------+    +----------+    +----------+
    |  Global  |    |  Global  |    |  a()     |
    +----------+    +----------+    +----------+
                                    |  Global  |
                                    +----------+

    -- POP PHASE (c returns, then b, then a) -----------------------

    Step 4          Step 5          Step 6
    +----------+    +----------+    +----------+
    |  c() x   |    |          |    |          |
    +----------+    |  b() x   |    |  a() x   |
    |  b()     |    +----------+    +----------+
    +----------+    |  a()     |    |  Global  |
    |  a()     |    +----------+    +----------+
    +----------+    |  Global  |
    |  Global  |    +----------+    All local vars gone.
    +----------+                    Memory freed instantly.
```

```js
function a() { b(); }
function b() { c(); }
function c() {
    let msg = "top of stack"; // lives here only while c() runs
    return msg;
}

a(); // push a -> push b -> push c -> pop c -> pop b -> pop a
```

---

## 5. const with References -- A Common Gotcha

`const` prevents reassigning the variable (the pointer), but it does not prevent mutating the object the pointer points to.

```
    const user = { name: "Savage" };

       STACK                              HEAP
    +------------------+           +----------------------+
    | user: 0xC01 [L]  |---------->|  { name: "Savage" } |
    +------------------+           +----------------------+
         ^
         [L] = const locks the pointer (the arrow).
              The object in the Heap is still mutable.
```

```js
const user = { name: "Savage" };

user.name = "Ace";       // allowed -- mutating the object
console.log(user.name);  // "Ace"

user = { name: "Ace" };  // TypeError -- reassigning the pointer
```

---

## 6. Garbage Collection

When the Stack no longer holds a pointer to a Heap address, the Garbage Collector marks that memory as unreachable and frees it.

```
    let user = { id: 1 };
    user = null;

    -- BEFORE ------------------------------------------------------

       STACK                              HEAP
    +------------------+           +------------------+
    |  user: 0xB22 ----+---------->|  { id: 1 }       |
    +------------------+           |  addr: 0xB22     |
                                   +------------------+
    Pointer exists -> object is safe.

    -- AFTER user = null -------------------------------------------

       STACK                              HEAP
    +------------------+           +------------------+
    |  user: null      |           |  { id: 1 }       |
    +------------------+           |  (Unreachable)   |
                                   +------------------+
                                            |
                                            v
                                   GARBAGE COLLECTOR
                                   "No pointer -> deleting..."
                                            |
                                            v
                                       Memory freed
```

```js
let user = { id: 1 };
user = null; // pointer removed -> GC will free the heap object
```

---

## 7. Summary

```
+-------------+----------------------+--------------------------------+
|             |       STACK          |            HEAP                |
+-------------+----------------------+--------------------------------+
| Stores      | Primitives, pointers | Objects, arrays, functions     |
| Speed       | Fast                 | Slower                         |
| Size        | Small, fixed         | Large, flexible                |
| Freed by    | Auto (on return)     | Garbage Collector              |
| Copy gives  | Independent value    | Shared reference               |
+-------------+----------------------+--------------------------------+
```

### One-liner recap

```
Primitive  ->  Stack  ->  value copied   ->  independent  ->  no surprises
Reference  ->  Heap   ->  pointer copied ->  shared       ->  mutations visible everywhere
```