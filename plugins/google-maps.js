import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

export default () => {
  Vue.use(VueGoogleMaps, {
    load: { key: 'AIzaSyBWtYlyDa75L_070ne29bC1G-Eo2jHJgLI' }
  });
};
