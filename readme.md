// Todays Class summary

1. create new folder (Directory)
2. open VScode in current folder
3. npm init -y //Used to initialize new or existing npm package.
4. tsc --init //To initialize a TypeScript project.
5. open package.json.
6. add "type" : "module", in first block of { }, usually at line 6.
7. now open tsconfig.json.

**Note: Line number can be vary**

8. On line no. 14 >>> change "target": "es2016" to "target": "es2022".
9. On line no. 28 >>> change "module": "commonjs" to "target": "NodeNext".
10. On line no. 30 >>> change "moduleResolution": "node" to "moduleResolution": "NodeNext".
11. Goto Terminal in vscode.
12. npm install inquirer. //Will be use to prompt user.
13. npm i @types/inquirer -D //Inquirer will be available to be use in TypeScript.
14. import inquirer from "inquirer"; //Using inquirer library
