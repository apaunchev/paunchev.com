---
title: "Schedule npm tasks to run automatically on Windows"
---

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
