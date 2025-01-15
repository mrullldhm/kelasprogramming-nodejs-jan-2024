# Day 2
    A brief description about Core Modules

### Core Modules
    In Node.js, core modules are built-in modules that come pre-installed with Node.js. 
    These modules provide essential functionalities for building applications without needing to install external packages. 
    They are written in C++ or JavaScript and are part of the Node.js runtime environment.
    Core modules must be imported using the "require()" function.

### Crypto 
    The crypto module in Node.js is a core module that provides cryptographic functionalities to help secure data. 
    It includes features for hashing, encryption, decryption, signing, and verifying data. 
    The crypto module is built on OpenSSL, a widely used cryptographic library.
    
    Crypto Module
    const crypto = require ("node:crypto")

### File System, fs
    The fs module in Node.js stands for File System and provides functionalities to interact with the file system. 
    It allows developers to read, write, update, delete, and manipulate files and directories on the server. 

    FS Module
    const fs = require("fs")

### Path
    The path module in Node.js provides utilities for working with file and directory paths. It helps in handling and transforming file paths in a way that is platform-independent, which is especially useful when building cross-platform applications.

    Path Module
    const path = require("path")


### Callback Function
    A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation is completed. Callback functions are a fundamental concept in JavaScript, especially for handling asynchronous operations.

