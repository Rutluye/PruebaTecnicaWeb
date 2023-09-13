import { createApp } from 'vue'
import AppView from './AppView.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/router'
import store from "./store/index";

loadFonts()

createApp(AppView)
.use(vuetify)
.use(router)
.use(store)
.mount('#app')



document.title = "Prueba tecnica";


