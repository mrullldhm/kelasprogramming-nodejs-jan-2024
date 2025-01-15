# Day 1
    A brief description about Terminal (GIt Bash) and Local Modules

### Terminal (Git Bash)
    cd ..                       - go back
    cd folderName               - go to folder
    pwd                         - print working directory
    ls                          - list files in current directory

    node -v                     - check version of node
    node                        - run node
    node fileName.js            - run file
    node --watch fileName.js    - run file and watch for changes
    cntrl + c                   - stop node

### Local Modules
    A local module refers to a module that is created by the developer for use within their project. These modules are typically custom JavaScript files that export functions, objects, or classes, allowing them to be reused across different parts of the application.

    1.  Create a Local Module: Write a JavaScript file that contains the logic or code you want to reuse. 
        Use "module.exports" to make it accessible to other files.

    2.  Import the Local Module: Use the "require()" function to include the local module in another file. 
        Ensure you provide the relative path to the file.