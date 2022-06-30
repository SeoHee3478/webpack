const path = require("path");
// const myLoader = require("./myLoader");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        // test: /\.js$/,
        // //이스케이프 문자 : 탈출시켜서 평범한 문자열로 만들게 하는 것
        // //js로 끝나는 모든 파일을 선택한 것임! (app.js/plus.js)
        // use: [path.resolve("./myLoader.js")],
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "마지막 빌드 시간은 : " + new Date().toLocaleString() + "입니다.",
    }),
  ],
};
