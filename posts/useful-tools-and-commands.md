---
title: "Useful tools and commands"
postedAt: "2020-06-02"
summary: "A collection of tools and commands that helped solve a problem."
---

## `prettier --check "src/**/*.js"`

Using [Prettier](https://prettier.io/) to format your code? Run this command to scan your project for unformatted JS files. If it finds any, you can run `prettier --write "src/**/*.js"` to automatically format them.

## `npx npm-check-updates -u`

You know that project you created months ago? It probably has a bunch of outdated packages by now. Run this command to check for new versions and update your `package.json` file. Then make sure to run `npm install` to actually install the updates. (And don’t forget to fix all the bugs you now introduced. 🙃)
