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
### create file .babelrc file in root of the folder and add codes to it which are already defined as follows
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/bf942f59-8a9f-4ac8-9e07-871341b6a9c3)

### npm add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
### npm add -D babel-loader

### create a folder webpack inside that folder create a file webpack-config.js and add configuration

![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/ae443df8-8224-41a3-8bd3-3adf3188afed)


### add start script in package.json file "start":"webpack serve --config webpack/webpack.config.js --open",

### Run project by npm start
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/490319dd-354a-4c41-9b98-f0f8daef3744)

## STEP-3 for adding css webpack-loader

### create styles.css file 
### npm add -D css-loader style-loader
### restart server now css file will be loaded

## STEP-4 for adding image webpack-loader
### create declaration.d.ts file (typescript specific only for image )






