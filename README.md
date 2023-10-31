# React WebPack Using TypeScript
## STEP-1
### create build and src folder .also .gitignore file
### inside src folder create index.html file and add html code snipet
### type npm init in terminal

## STEP-2
### npm add react react-dom
### npm add -D typescript @types/react @types/react-dom
### add tsconfig.json file as it Is.
### create App.tsx and index.tsx file
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/6dafb9cd-8c42-4c95-874f-e1ef5e1b4188)
### npm add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
### create file .babelrc file in root of the folder and add codes to it which are already defined
### npm add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
### npm add -D babel-loader

### create a folder webpack inside that folder create a file webpack-config.js and add configuration

![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/ae443df8-8224-41a3-8bd3-3adf3188afed)


### add start script in package.json file "start":"webpack serve --config webpack/webpack.config.js --open",


