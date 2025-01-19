# Day 4
A brief description about Third-party Modules

### Third-party Modules
    Third-party modules are packages or libraries that are not part of the core Node.js distribution but are created by other developers that you can use in your Node.js applications to simplify or enhance your development process. These modules provide pre-built functionalities, saving you the effort of creating everything from scratch. They are typically distributed via npm (Node Package Manager), the default package manager for Node.js.

### package.json
    The package.json file is a critical part of a Node.js project. It contains metadata about the project, including its name, version, description, and dependencies. It also defines project scripts (e.g., for testing or running the app) and the versions of Node.js or npm used. This file helps manage dependencies, versioning, and collaboration, ensuring consistency across different environments.

    Command Line
    npm init

### package-lock.json
    package-lock.json is automatically created (or updated) by npm when you install a third-party module

### Node Package Manager (npm)
    npm is the default package manager for Node.js. It allows you to discover, install, and manage third-party modules. With npm, you can easily find and use a wide range of packages to enhance your Node.js applications.

    Website 
    - https://www.npmjs.com/

    Install Package
    - npm i <package-name>
    - Install the package in the node_modules directory 

    Install Dependency
    - npm i
    - Installs all dependencies listed in package.json

### .gitignore
    .gitignore file specifies which files or directories Git should ignore when tracking changes in a repository. 
    It helps prevent unnecessary files from being committed to the repository, reducing clutter and improving repository management.

### CommonJS
    Uses require() to import modules and module.exports to export them.

### ESM/ModulesJS
    Uses import and export for module handling.

### Express Package
    Express is a popular web application framework for Node.js.It simplifies the process of building web applications and APIs by providing a set of tools and features for handling HTTP requests and responses.
    Express is built on top of the HTTP module, so you're not replacing it but rather extending its functionality with a more developer-friendly interface.

    Install Express Package
    - npm i express

    Import Express Package
    - const express = require("express")    

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
