# Vue2_practice
Practice Vue2

Demo: https://kenfront.github.io/Vue2_practice/

-code editor: Brackets( auto compress scss)
-Brackets plugins: Brackets SASS,Brackets Sass Hints
-Setting file: .brackets.json(Github: https://github.com/jasonsanjose/brackets-sass)
-Download: http://brackets.io/

# Prepare use Vue2 and Vue-Router:

Library:
-Animate.css
 Github: https://github.com/daneden/animate.css
-fontawsome
 Website: http://fontawesome.io/
-Normalize.css
 Github: https://github.com/necolas/normalize.css
-Vue js
 Github: https://github.com/vuejs/vue
-Vue-Router js
 Github: https://github.com/vuejs/vue-router

## 1. Download node.js:

Download: https://nodejs.org/en/

## 2. Install global webpack by command line:

    npm install webpack -g

## 3. Install webpack in project(path: Vue2_practice) by command line:

    npm install webpack --save-dev
    
## 4. Install babel-loader in project(path: Vue2_practice) by command line:

    npm install babel-loader babel-core babel-preset-es2015 webpack --save-dev

## 5. Create project

index.html, *.js, *.scss...

## 6. Set webpack.config.js in project(path: Vue2_practice/webpack.config.js)

-uglifyJsPlugin For compress js.

-babel-loader For transpiling JavaScript files(Github: https://github.com/babel/babel-loader)

## 7. Output bundle.js in project(path:Vue2_practice) by command line:

    webpack
    
## 8. Complete!!