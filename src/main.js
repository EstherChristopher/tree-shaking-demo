import {createApp} from 'vue';
import App from './App.vue';
import _ from 'lodash';

console.log(_.join(['Hello', 'world'], ' '));
console.log(_.capitalize('tree shaking'));

createApp(App).mount('#app');