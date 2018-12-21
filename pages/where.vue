<template>
  <BasePage>
    <template slot="h1">Where</template>
    <div class="owl">
      <GmapMap
        :center="{ lat: -3.350235, lng: 111.995865 }"
        :zoom="5"
        :map-type-id="'terrain'">
        <GmapMarker
          :position="{ position: { lat: -0.48585, lng: 117.1466 } }"
          @click="center=item.position" />
      </GmapMap>
    </div>
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
