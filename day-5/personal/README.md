# Day 4
A brief description of day-3 project

## Progress Log
### Folder "third-party-modules"
- type npm init in terminal to create package.json
    * fill the package.json metadata list
    * create a script called dev and start  <br>
        "scripts": {                        <br>
        "dev": "node --watch index.js",     <br>
        "start": "node index.js"            <br>
        },
    * later type in terminal             
        - npm run dev or npm start

- install random-words package 
    * search the npm at https://www.npmjs.com/
    * check if the package is legit based on
        - number of downloaded package
    * type npm install random-words or npm i random-words in terminal
    * it will create a node_modules folder and a package-lock.json file
    * use .gitignore to ignore node_modules folder
    * keep the package.json file and the package-lock.json file because its a record of the project.

- create index.js
    * import the modules. Modules will use either 2 common types of syntax
        - ECMAScript (ES) Modules Syntax    <br>
            import { generate, count } from "random-words";                 <br>
            need to use ".mjs" file type or add   "type": "module",
        - CommonJS Syntax                   <br>
            const { generate, count } = require("random-words");                <br>
            need to use ".js" file type
            
### Folder "express-js"
- type npm init in terminal to create package.json
    * fill the package.json metadata list
    * create a script called dev and start  <br>
        "scripts": {                        <br>
        "dev": "node --watch index.js",     <br>
        "start": "node index.js"            <br>
        },
    * later type in terminal             
        - npm run dev or npm start

- install express package
    * search the npm at https://www.npmjs.com/
    * check if the package is legit based on
        - number of downloaded package
    * type npm install expresss or npm i express in terminal
    * it will create a node_modules folder and a package-lock.json file
    * use .gitignore to ignore node_modules folder
    * keep the package.json file and the package-lock.json file because its a record of the project.

- create index.js
    * import the modules. Modules will use either 2 common types of syntax
        - ECMAScript (ES) Modules Syntax    <br>
            import { generate, count } from "random-words";                 <br>
            need to use ".mjs" file type
        - CommonJS Syntax                   <br>
            const { generate, count } = require("random-words");                <br>
            need to use ".js" file type

- express.js 
    * is a framework that we use to simplify the process in creating our own servey
    * in day-3 we learn how to it as a native by using its own core module
    * now we use third party modules which express.js


