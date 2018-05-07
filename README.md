# PClassic.org
This is the website for the [PClassic](http://pclassic.org) High School Programming Contest.

For now, this is a bit overengineered, in that a static site generator would do just fine. Dynamic stuff might happen someday, though, possibly related to changes to how the submission system is tied in.

At the moment, we're following industry standard best practices by having big photos live in the repo and not minifying/concatting the CSS.

## Installation

Do once:
```
$ git clone https://github.com/pclassic/pclassic.org
$ brew install node # if you for whatever reason don't have it
$ npm install -g grunt-cli
$ cd pclassic.org
$ npm install
$ grunt githooks
$ git remote add dokku dokku@pclassic.org:pclassic.org
```
Then to run it:
```
$ grunt
```
Or just:
```
$ node server.js
```

## Editing workflow

0. Make sure you have deploy powers to the dokku box
1. Make some changes
2. Commit them
3. `git push dokku master`

Alternatively, use the standard GitHub workflow and send a pull request.
