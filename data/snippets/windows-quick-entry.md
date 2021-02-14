---
title: Quick entry for phrases or special characters on Windows
tags:
  - windows
---

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
