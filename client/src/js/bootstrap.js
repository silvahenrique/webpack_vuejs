import Lodash from 'lodash';
import Axios from 'axios';
import jQuery from 'jquery';
import Vue from 'vue';

window._ = Lodash;
window.$ = window.jQuery = jQuery;
window.Vue = Vue;
window.axios = Axios;

require('../sass/app.scss');

// require('../../../node_modules/leaflet/dist/leaflet.css');
// require('../../../node_modules/leaflet/dist/images/*');
