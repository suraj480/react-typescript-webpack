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
### add configration in webpack.config.js 
### restart server now css file will be loaded
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/56b60ea9-0069-4d99-9082-b58631072044)

## STEP-4 for adding image webpack-loader
### create declaration.d.ts file (typescript specific only for image )
###  add configration in webpack.config.js 


# Adding files for different environments like production and development mode
## (i) change name of file from webpack-config.js (as this main_master branch is taken from main branch )to webpack-common.js 
## (ii) Delete mode :"development" from webpack-common.js
## (iii) npm i -D webpack-merge
## (iv) Add configuration for various mode
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/911a4f69-f342-410f-a1c0-b5f4779f1ac0)
## (v) create build by npm build and enter to buld cd ./build/ and start build by npx serve

![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/13a91c61-dd0a-49f0-9ce4-fa5f55587ba0)

![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/2ccdbeb2-dfa3-4574-8b2b-bb5b4b3ceb3e)





### What is a source map?
Use a source map — Firefox Source Docs documentation
A source map is a file that maps from the transformed source to the original source, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

# react-refresh-webpack-plugin
Suppose if you update any thing in one component the other components state value also reset to initial to prevent this thing react-refresh-webpack-plugin comes into picture

## STEP-5
### npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
### add configration in webpack-dev.js
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/57c2171b-ef03-473c-82d1-2fb50c760704)


# FROMATING ALL PROJECT USING PRETTIER
## npm i prettier eslint-config-prettier eslint-plugin-prettier
## create .prettierrc.js file and add configuration into it.
![image](https://github.com/suraj480/react-typescript-webpack/assets/72219318/8d1b437a-8677-4214-b352-ea60e4d0a787)

## Add this inside script of package.json "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
## npm run format








