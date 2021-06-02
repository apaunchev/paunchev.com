---
title: 'Git'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# Git

## Snippets

### Amend a commit

```bash
git commit --amend
git commit --amend -m "correct" # fix a typo
```

### Inspect differences

```bash
git diff # changed but not staged
git diff --staged # staged but not committed
```

### Check the log

```bash
git log -n 10 # last 10 commits
git log --oneline --graph --decorate # pretty print log
```

### Move a commit to a different branch

```bash
git checkout feature/name
git cherry-pick [hash]
git checkout master
git reset --hard HEAD~1
```

### Move files in a repo

```bash
git mv [old-path] [new-path]
```

### Fetch from remote

```bash
git pull # git fetch; git merge
git pull --rebase # git fetch; git rebase (useful when branches have diverged)
```

### Interactive rebase

```bash
git rebase -i
git rebase -i HEAD~3 # last 3 commits
```

### Rename a branch

```bash
git branch -m [new-name] # creates a new bnrach
git push origin -u [new-name] # pushes new branch to remote
git push origin --delete [old-name] # deletes old branch on remote
```

### Reset HEAD to a specific commit

```bash
git reset --mixed [hash] # move changes to unstaged area
git reset --hard [hash] # gets rid of changes
```

### Restore a file from the index or another branch

```bash
git restore [path]
git restore -p [path] # discard specific chunks
git restore . # discard all local changes
```

### Revert changes from a specific commit

```bash
git revert [hash] # will create a new commit
```

### Remove a file from a repo

```bash
git rm [path]
```

### Stash changes for later

```bash
git stash
git stash list
git stash apply # applies first stash in the stack
git stash apply stash@{1}
git stash drop stash@{1} # delete stash
```
