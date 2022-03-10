const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./src/js/main.js',
    //결과물(번들)을 반환하는 설정
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'bundle2.js',
        clean:true//기존파일 제거
    },
    devtool:'source-map',//빌드한 파일과 원본파일 연결
    mode:'development',
    //그외 필요한애들은 플러그인으로설치
    devServer:{
        host:'localhost',
        port:8080,
        open:true,
        watchFiles:'index.html'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'keyboard',
            template:'./index.html',
            inject:'body',
            favicon:'./favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization:{
        minimizer:[
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()
        ]
    }
}