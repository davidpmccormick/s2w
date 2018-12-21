<template>
  <BasePage>
    <template slot="h1">About</template>
    <div
      class="owl"
      v-html="body" />
  </BasePage>
</template>

<script>
import BasePage from '~/components/BasePage';

export default {
  components: {
    BasePage
  },
  async asyncData({ app }) {
    const { data } = await app.$prismicApi.getByID('W-S0URIAACMAtu6O');
    const body = app.$prismicDom.RichText.asHtml(data.body);

    return {
      body
    };
  }
};
</script>
