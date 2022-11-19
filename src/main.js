import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify({theme: {
  themes: {
    light: {
      colors: {
        primary: '#1867C0',
        secondary: '#5CBBF6',
      },
    },
  },
}}))
app.use(router)

const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')
webFontLoader.load({
  google: {
    families: ['Roboto:100,300,400,500,700,900&display=swap'],
  },
})

app.mount('#app')