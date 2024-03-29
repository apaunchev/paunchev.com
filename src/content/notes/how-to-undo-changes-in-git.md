---
title: "How to undo changes in git"
---

## Undo unstaged local changes

To overwrite local changes:

```bash
git checkout -- [file]
```

To save local changes so you can re-use them later:

```bash
git stash
```

To discard local changes to all files, permanently:

```bash
git reset --hard
```

## Undo staged local changes

To unstage the file but keep your changes:

```bash
git restore --staged [file]
```

To unstage everything but keep your changes:

```bash
git reset
```

To unstage the file to current commit (HEAD):

```bash
git reset HEAD [file]
```

To discard all local changes, but save them for later:

```bash
git stash
```

To discard everything permanently:

```bash
git reset --hard
```

## Undo committed local changes

To swap additions and deletions changes introduced by a commit:

```bash
git revert [hash]
```

To undo changes on a single file or directory from a commit, but retain them in the staged state:

```bash
git checkout [hash] [file]
```

To undo changes on a single file or directory from a commit, but retain them in the unstaged state:

```bash
git reset [hash] [file]
```

## Undo remote changes without changing history

```bash
git revert [hash]
```
