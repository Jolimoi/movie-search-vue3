import { createApp } from 'vue'

import App from './components/App.vue'
import { store } from './stores/movies'

const app = createApp(App)

app.use(store)
app.mount('#app')
