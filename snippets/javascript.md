---
updatedAt: '2021-05-09 19:39:02'
published: true
---

# JavaScript

## Remove array duplicates

```javascript
const arr = [1, 1, 2, 3, 5, 8];

[...new Set(arr)]; // [1, 2, 3, 5, 8]
```

## Remove object property using the rest operator

```javascript
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

## Swap two variables

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

## Toggle design mode to edit the current page

```javascript
document.designMode = 'on'; // edit, then set to 'off'
```

## Recursion examples

Authored by Leigh Halliday ([source](https://gist.github.com/leighhalliday/7ab9234c9106cda84ce284fc34ebeacd)).

```javascript
// Recursion fundamentals: Counting down.

function countDown(num) {
  console.log(num);
  if (num > 1) {
    countDown(num - 1);
  }
}

countDown(5);

// Summing array elements

function sum(elems) {
  if (elems.length === 0) {
    return 0;
  } else {
    const [head, ...rest] = elems;
    return head + sum(rest);
  }
}

console.log(sum([1, 2, 3, 4, 5]));

// Calculating the power: 4^4

function power(num, pow) {
  if (pow == 1) {
    return num;
  } else {
    return num * power(num, pow - 1);
  }
}

console.log(power(4, 4));

// Calculating factorial: 5! (5 * 4 * 3 * 2 * 1)

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

// Ughhhh fibonacci kill me now
// 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacci(rem, acc = [0, 1]) {
  if (rem <= 2) {
    return acc;
  } else {
    const [second, last] = acc.slice(-2);
    return fibonacci(rem - 1, [...acc, second + last]);
  }
}

console.log(fibonacci(15));

// Trees! ☕️

const root = {
  node: 'arabica',
  children: [
    { node: 'heirloom', children: [] },
    {
      node: 'bourbon',
      children: [
        { node: 'caturra', children: [] },
        { node: 'mokka', children: [] },
      ],
    },
    {
      node: 'typica',
      children: [
        { node: 'kona', children: [] },
        { node: 'java', children: [] },
      ],
    },
  ],
};

function print({ node, children }) {
  console.group(node);
  children.forEach(child => print(child));
  console.groupEnd(node);
}

print(root);
```
