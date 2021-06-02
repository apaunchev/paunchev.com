---
title: 'Windows'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# Windows

## Automate npm tasks using Windows Task Scheduler

1. Open Task Scheduler (`Win + R, taskschd.msc`)
1. Go to Actions > Create Basic Task...
1. Enter a name and description
1. Select trigger, e.g. Daily, One time, When I log on...
1. Configure action:
   - Type: Start a program
   - Program/script: `npm`
   - Arguments: `run <script-name>`, e.g. `run scrape`
   - Start in: directory where package.json is located, e.g. `C:\projects\hello`
1. Click Finish and test your action

Additionally, if you want the task to run in the background, make sure to select "Run whether user is logged on or not" under General properties for the task.

## Quick entry for phrases or special characters on Windows

Using [AutoHotkey](https://www.autohotkey.com/) and the following script:

```autohotkey
; expand @@ to email address, for quick entry
::@@::example@mail.com

; en dash
!-::
Send, {ASC 0150}
return

; em dash
!+-::
Send, {ASC 0151}
return

; smart quotes
![::
Send, “
return

!]::
Send, ”
return

!+[::
Send, ‘
return

!+]::
Send, ’
return
```
