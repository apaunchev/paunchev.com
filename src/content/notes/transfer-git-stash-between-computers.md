---
title: "Transfer git stash between computers"
---

On computer 1:

```bash
git stash -u
git stash show "stash@{0}" -p > changes.patch
```

On computer 2:

```bash
git apply changes.patch
```
