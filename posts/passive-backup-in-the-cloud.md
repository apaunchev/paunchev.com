---
title: "Passive backup in the cloud"
date: "2020-05-24T12:00:00.000Z"
---
For a long time I have been looking for a workflow that would enable me to:

1. Have a fresh backup of my project files at all times
2. Be able to interact with this backup on any machine I use
3. Not include unnecessary and potentially large directories such as `node_modules`, `build`, `.next`, etc.

1 and 2 are simple; Dropbox (or any other cloud storage service) allows that easily. 3 is where things get tricky.

(No, `git` is not what I need. Version control ≠ passive backup.)

## Dropbox

Dropbox has a [selective sync](https://help.dropbox.com/installs-integrations/sync-uploads/selective-sync-overview) feature which technically does the job of excluding unwanted directories, but I’d need to manually toggle it for each one.

There are workarounds such as using a file synchronization tool ([FreeFileSync](https://freefilesync.org/)) that constantly monitors for changes and copies files from the local system to a cloud storage. I found it clunky and error-prone when making changes to the same file quickly. (If you are interested in trying this method anyway, check out [the article where I got the idea](https://medium.com/@sherwino/how-do-you-ignore-specific-folders-like-node-modules-recursively-on-dropbox-c74ba9f2abce).)

## pCloud

Finally, I discovered [pCloud](https://www.pcloud.com/). It is a Dropbox competitor and a yet-another-subscription-service, but: it is quick, reliable, and most importantly – has a feature to sync a local folder with the cloud while ignoring specific file/directory patterns.

<figure>
  <img
    src="/images/posts/pcloud_ignore_patterns.png"
    alt="pCloud’s interface to ignore patterns"
  />
  <figcaption>pCloud’s interface to ignore patterns</figcaption>
</figure>

## Workflow

My workflow now is:

1. Work in a local directory on my main machine
2. Have pCloud sync that local directory with the cloud
3. On another machine, have access to the same directory via pCloud

## Conclusion

This workflow relies on an external service that might go away at some point. There may be other issues with it that I have not discovered yet. And it likely is not a secure way to hold sensitive data. But I’m not using it for sensitive data, and more than anything I just need convenience and reliability. So far it seems to get the job done.
