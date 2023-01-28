---
title: "Backup data automatically on Windows"
---

I wanted to backup my projects directory to an external drive. Every time I run the backup operation it should automatically sync the source and the destination, including deleting any files at the destination that are no longer present at the source. Here’s how I did it on Windows:

1. Create a batch file (\*.bat) with the following inside:

```bash
robocopy C:\projects D:\projects /mir /xd node_modules .git
```

`/mir` is for mirroring.

`/xd node_modules .git` is to exclude specific directories.

2. Using Task Scheduler, set up a recurring task with the action "Start a program", pointing to the .bat file
