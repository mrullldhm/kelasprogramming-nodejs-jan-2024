# Day 3
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
    * can just type in terminal             <br>
        npm run dev or npm start

- install random-words package 
    * search the npm at https://www.npmjs.com/
    * type npm install random-words or npm i random-words in terminal
    * it will create a node_modules folder and a package-lock.json file
    * use .gitignore to ignore node_modules folder
    * keep the package.json file and the package-lock.json file because its a record of the project.

- create index.js
    * import the modules. Choose between 2 common types of syntax
        - ECMAScript (ES) Modules Syntax    <br>
            import { generate, count } from "random-words";                 <br>
            .mjs file
        - CommonJS Syntax                   <br>
            const { generate, count } = require("random-words");                <br>
            .js file


