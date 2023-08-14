import './helpers/functions';
import debounce from './helpers/lodash-debounce';
import throttle from './helpers/lodash-throttle';

import mitt from 'mitt';
import { createApp } from 'vue';
import axios from 'axios';
import $ from 'jquery';
import qs from 'qs';
import { Fancybox } from "@fancyapps/ui";

// Vue mixins
import VueSharedMixins from "./vue-mixins/shared";

window._debounce = debounce;
window._throttle = throttle;

window.createApp = createApp;
window.mitt = mitt();
window.debounce = debounce;

window.LazyLoad = LazyLoad;
window.Fancybox = Fancybox;
window.axios = axios;
window.Swal = Swal;
window.qs = qs;
window.$ = window.jQuery = $;
window._VueSharedMixins = VueSharedMixins;

try {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;
} catch (e) {
    console.error('CSRF token not found');
}

