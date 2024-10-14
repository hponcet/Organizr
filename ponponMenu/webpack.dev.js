require("webpack-dev-server");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const ReactRefreshTypeScript = require("react-refresh-typescript");

const TsconfigPathsPlugins = require("tsconfig-paths-webpack-plugin");

const port = 3000;

module.exports = {
  devtool: "eval-source-map",

  stats: "errors-only",

  mode: "development",

  target: "web",

  entry: [path.resolve("./src/index.tsx")],

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
      exclude: [/node_modules/],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve("./src/index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: true,
      env: "development",
      isDevelopment: true,
      nodeModules: "node_modules",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
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
            getCustomTransformers: () => ({
              before: [ReactRefreshTypeScript()].filter(Boolean),
            }),
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
  devServer: {
    port,
    compress: true,
    hot: true,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    static: {
      publicPath: `/`,
    },
    historyApiFallback: {
      verbose: true,
    },
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
    },
  },
};
