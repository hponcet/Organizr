const path = require("path");
const webpack = require("webpack");

const TsconfigPathsPlugins = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stats: "errors-only",

  mode: "production",

  target: "web",

  entry: path.resolve("./src/index.tsx"),

  output: {
    path: path.resolve("build"),
    filename: "index.js",
    publicPath: "/",
    library: {
      type: "umd",
    },
    clean: true,
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],

  resolve: {
    extensions: [".json", ".ts", ".tsx"],
    modules: ["node_modules"],
    // There is no need to add aliases here, the paths in tsconfig get mirrored
    plugins: [new TsconfigPathsPlugins()],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: [/node_modules/],
        use: {
          loader: "ts-loader",
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: "esnext",
            },
          },
        },
      },
      {
        test: /\.s?(c|a)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]___[name]__[local]",
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
        include: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.s?(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: [
          /\.module\.s?(c|a)ss$/,
          /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
