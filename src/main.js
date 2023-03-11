import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import vueCreditCardValidation from 'vue-credit-card-validation'
import uiComponents from './ui-components/export'
import { createPinia } from 'pinia'
import './assets/base.css'
const app = createApp(App)
uiComponents.map(component => app.component(component.name, component))
app.use(MotionPlugin)
app.use(vueCreditCardValidation)
app.use(createPinia())
app.mount('#app')
