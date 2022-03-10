# webpack setting basic

create package.json
```npm init -y```
```npm i -D webpack webpack-cli webpack-dev-server@next```
```npm i -D terser-webpack-plugin```
```npm i -D html-webpack-plugin```
```npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin```


change scripts on package.json
```json
"scripts":{
    "dev":"webpack-dev-server",//개발모드
    "build": "webpack --mode=production"//제품모드
}
```

create webpack.config.js on root
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