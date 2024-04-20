/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import I18n from '@/plugins/i18n'

loadFonts()

// Create vue app
const app = createApp(App)
const pinia = createPinia()

// Use plugins
app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(I18n)

// Mount vue app
app.mount('#app')
