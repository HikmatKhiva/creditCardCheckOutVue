import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/base.css'
import uiComponents from './ui-components/export';
const app = createApp(App)
uiComponents.map(component => app.component(component.name, component))
app.use(MotionPlugin).mount('#app')
