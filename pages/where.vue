<template>
  <BasePage>
    <template slot="h1">Where</template>
    <no-ssr>
      <googlemaps-map
        :center.sync="center"
        :zoom.sync="zoom">

        <googlemaps-marker
          v-for="marker of markers"
          :key="marker._id"
          :label="{
            color: 'black',
            fontFamily: 'Material Icons',
            fontSize: '20px',
            text: 'star_rate',
          }"
          :position="marker.position"
          @click="center=marker.position" />
      </googlemaps-map>
    </no-ssr>
  </BasePage>
</template>

<script>
import BasePage from '~/components/BasePage';

export default {
  components: {
    BasePage
  },
  asyncData() {
    return {
      zoom: 5,
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [
        { _id: 1, position: { lat: -0.48585, lng: 117.1466 } },
        { _id: 2, position: { lat: -6.21462, lng: 106.84513 } }
      ]
    };
  }
};
</script>

<style lang="scss">
.vue-google-map {
  height: 450px;
  max-width: 992px;
  width: 100%;

  .map-view {
    height: 100%!important;
  }
}

</style>
