# PClassic.org
This is the website for the [PClassic](https://pclassic.org) High School Programming Contest.

## Installation

Do once:
```
$ git clone https://github.com/pclassic/pclassic.org
$ brew install node # if you for whatever reason don't have it
$ cd pclassic.org
$ npm install
```

Then to run it:
```
$ node index.js
```

Note that when running locally, stuff in the `/files/` directory won't be served by the node server, and so the site will be missing its CSS, images, etc. They get updated when deploying to the live site, though.

## Editing workflow

1. Make some changes
2. Commit them
3. Either open a pull request and get it merged, or push straight to master
4. Wait for GitHub hooks to Now.sh to make your changes deploy automatically! It should take under a minute.
