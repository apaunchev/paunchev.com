---
title: 'JavaScript'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# JavaScript

## Snippets

### Remove array duplicates

```javascript
const arr = [1, 1, 2, 3, 5, 8];

[...new Set(arr)]; // [1, 2, 3, 5, 8]
```

### Remove object property using the rest operator

```javascript
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

### Swap two variables

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

### Toggle design mode to edit the current page

```javascript
document.designMode = 'on'; // edit, then set to 'off'
```

### Hypehnize a string (slug)

```javascript
export function hyphenize(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}
```

### Capitalize a string

```javascript
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

### Date formatter

```javascript
export function dateFormatter(
  date,
  locale = 'en-GB',
  options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
) {
  return date.toLocaleDateString(locale, options);
}
```

### Shuffle array

```javascript
export function shuffle(array) {
  return array
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
}
```
