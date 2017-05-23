# DISCLAIMER:  This is a prototype!

## Travis CI Electron

Toying around with Electron and Travis CI API v3.

## Waht?

This is an attempt to write a desktop client for Travis CI.
You can click on an account (those are hardcoded organizations with lots of open source repos because I was too lazy to deal with authentication) and it will fetch the currently running builds (`/active` endpoint) and an overview of repositories with the lastest build status on the default branch (`/repos` endpoint with `current_build` included).

And that is it.


## Packaging

You need to have `electron-packager` installed.

I pretty much followed this tutorial
https://www.christianengvall.se/electron-packager-tutorial/
