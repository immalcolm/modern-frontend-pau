# Node JS & Express
Covering several topics on NodeJS and Express

Using handlebars as the templating engine with Express

## Common Issues Faced
- not installing proper package or requiring a non-installed package
- typing in the wrong package name
- not creating a layout folder
- not creating `views` folder
- syntax issues 
- missing out `block` names
- (Folder/File Mismatch) accidently putting the `hbs` folder in `public` instead of `views` folder
  
## Node Basics
```properties
#run a node file
node index.js

#initialize a node project
npm init

#initialize a node project with default template
npm init --yes

#install a package from npm repository
npm install <package-name>

#install a package from yarn repository
yarn add <package-name>

#uninstall a package
npm un <package-name>

#update package
npm update <package-name>

#node is typed in the console to access REPL
$ node

#the > indicates that REPL is running
# anything written after > will be evaluated 
> console.log("Hey There")

# REPL has evaluated the line and has printed out HI
Hey there

```

Command Line Basics
```sh
#get current working path
pwd
```

```javascript
const fs = require('fs');

const config = require('/path/to/file');
```


