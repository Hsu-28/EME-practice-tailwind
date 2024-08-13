// tailwind.config.js
module.exports = {
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './app.{js,ts,vue}',
      './error.{js,ts,vue}',
      './app.vue',
      './nuxt.config.{js,ts}'
    ],
    theme: {
      extend: {
        colors: {
          mainColor: '#012140',
          secondColor: '#6EE1FF'
        },
        height: {
          'mainContain': '84vh',
        },
        flexBasis: {
          'col2': '20.11%',
          'col8': '56.11%',
        }
      },
    },
    plugins: [],
  }
  