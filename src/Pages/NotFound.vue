<template>
  <section>
    <base-card>
      <h2> PAGE NOT FOUND</h2>
      <p> this page could not be found - Checkout our other
        <router-link to="/records">Records!</router-link>
      </p>
    </base-card>
  </section>

</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>

</style>