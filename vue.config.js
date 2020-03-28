module.exports = {
  devServer: {
      port: 4000,
      disableHostCheck: true,
      // disableHostCheckプロパティについて、ただし、プロキシサーバーのバックエンドに開発サーバーを置いて開発するような場合、このパラメーターを入れないとWebsocketでエラーが発生します。実際に詰まった部分ですので、ついでに入れておきました。
  },
};