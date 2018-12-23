import Vue from 'vue';
import VueGoogleMaps from 'vue-googlemaps';

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyBWtYlyDa75L_070ne29bC1G-Eo2jHJgLI',
    libraries: ['places'],
    useBetaRenderer: false,
  }
});

