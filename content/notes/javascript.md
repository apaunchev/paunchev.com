---
title: 'JavaScript'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# JavaScript

## Arrays

### Remove array duplicates

```javascript
const arr = [1, 1, 2, 3, 5, 8];

[...new Set(arr)]; // [1, 2, 3, 5, 8]
```

### Shuffle array

```javascript
const shuffle = array =>
  array
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
```

## Strings

### Hyphenize a string (slug)

```javascript
const hyphenize = string => string.replace(/\s+/g, '-').toLowerCase();
```

### Capitalize a string

```javascript
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
```

## Objects

### Remove object property using the rest operator

```javascript
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

## General

### Swap two variables

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

### Format a date

```javascript
const formatDate = (
  date,
  locale = 'en-GB',
  options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
) => date.toLocaleDateString(locale, options);
```
