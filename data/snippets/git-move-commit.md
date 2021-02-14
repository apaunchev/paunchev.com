---
title: Move a commit to a different branch
tags:
  - git
---

```bash
$ git checkout feature/name
$ git cherry-pick [hash]
$ git checkout master
$ git reset --hard HEAD~1
```
