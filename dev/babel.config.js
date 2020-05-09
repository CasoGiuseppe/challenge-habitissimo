module.exports = 
  process.env.NODE_ENV === 'test'
    ? {
      presets: ['@vue/app']
    }
    : {
      presets: ['@vue/app'],
      plugins: ['babel-plugin-istanbul']
    } 
