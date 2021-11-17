<template>
<div class='card'>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'BaseCard'
};
</script>

<style scoped>
.card {
  /*border-radius: 12px;*/
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 50rem;
  background-color: rgba(0, 0, 0, 0.06);
  /*background-color: #F21B25;*/
}
</style>