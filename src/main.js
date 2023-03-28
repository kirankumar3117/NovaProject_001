import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import buttonPlugin from './plugins/buttonPlugin'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret,faEye ,faXmark,faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret,faEye,faXmark,faCircleExclamation)


const pinia=createPinia();

const app=createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)

app.use(router)

app.use(buttonPlugin)

app.mount('#app')


// createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(pinia).use(router).mount('#app')
