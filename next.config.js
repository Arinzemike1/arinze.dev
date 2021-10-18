module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.(mp4|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};