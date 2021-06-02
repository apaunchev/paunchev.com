---
title: 'npm'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# npm

## Snippets

### Draw a dependency tree in npm

```bash
npm list # draw tree for entire project
npm list [dependency] # for a specific dependency
npm list --depth=[depth] # specify depth
```

### Move dependencies

```bash
npm install [dependency] --save-prod
npm install [dependency] --save-dev
```

### Find and remove unneeded node_modules directories

```bash
npx npkill
```

### Resolve conflicts in package-lock.json

Fix the conflicts inside package.json, then:

```bash
npm install --package-lock-only
```
