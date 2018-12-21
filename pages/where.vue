<template>
  <BasePage>
    <template slot="h1">Where</template>
    <no-ssr>
      <GmapMap
        :center="center"
        :zoom="5"
        :map-type-id="mapTypeId">
        <GmapMarker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          :icon="{
            url: '/favicon.png',
            size: {width: 46, height: 46, f: 'px', b: 'px'},
            scaledSize: {width: 30, height: 30, f: 'px', b: 'px'}
          }"
          @click="center=item.position" />
      </GmapMap>
    </no-ssr>
  </BasePage>
</template>

<script>
import BasePage from '~/components/BasePage';

export default {
  components: {
    BasePage
  },
  mounted() {
    setTimeout(() => {
      this.center = { lat: -3.250235, lng: 111.995865 };
    }, 1000);
  },
  asyncData() {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.21462, lng: 106.84513 } }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>
