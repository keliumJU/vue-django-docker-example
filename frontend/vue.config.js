module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/upload-images/'
      : '/'
  }