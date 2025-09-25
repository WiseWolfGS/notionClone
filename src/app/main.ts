import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 import
import './styles/index.css';

const app = createApp(App);

app.use(router); // 라우터를 앱에 등록

app.mount('#app');
