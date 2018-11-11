<template>
  <div>
    <h1>About</h1>
    <div v-html="body" />
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$prismicApi.getByID('W-S0URIAACMAtu6O');
    const body = app.$prismicDom.RichText.asHtml(data.body);

    return {
      body
    };
  }
};
</script>
