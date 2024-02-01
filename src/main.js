import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faKey);

const app = createApp(App)

app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
