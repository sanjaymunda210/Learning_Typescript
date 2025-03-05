## Setup Typescript

### Key points(steps included)

- tsc --init to initialise and create tsconfig.json file
- npm init -y to initialise the project and create package.json file
- create index.html file with script src to ./dist/index.js
- also make two directories src & dist, src for ts files and dist for js files
- tsc -w for continously watching over ts file updates and to implement it to dist/index.js which will be the outfile file after compilation, ** Note- In tsconfig.json file uncomment output dir and set it to "./dist" **
- _ Optional _ :- npm i lite-server, set "start": "lite-server" in package.json, npm start
