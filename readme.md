# webpack setting basic

- create package
  `npm init -y`
  `npm i -D webpack webpack-cli webpack-dev-server@next`
  `npm i -D terser-webpack-plugin`
  `npm i -D html-webpack-plugin`
  `npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin`

- change scripts on package.json

```json
"scripts":{
    "dev":"webpack-dev-server",//개발모드
    "build": "webpack --mode=production"//제품모드
}
```

- create webpack.config.js on root path/absolute path

```javascript
const path = require('path')

module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',
    //결과물(번들)을 반환하는 설정
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'main.js',
        clean:true
    }
    ...
}
```

## eslint(문법체크), prettier(포맷팅)

`npm i -D eslint`
`npm i --save-dev --save-exact prettier`
`npm i -D eslint-config-prettier eslint-plugin-prettier`
`npx eslint --init` to check syntax and find problems
then they make .eslintrc.json

- add this option

  ```json
  "extends": ["eslint:recommended","plugin:prettier/recommended"],
  ...
  "rules": {
  		"prettier/prettier":"error"
  }
  ```

- make .eslintignore

- make .prettierignore

- make prettier.json and costomize it (https://prettier.io/playground/)

- install extentions
  Prettier - Code formatter
  eslint from Microsoft
  open in browser

- type VScode setting.js(>Open Workspace Setting(JSON))

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
