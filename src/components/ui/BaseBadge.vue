<template>
<span class="badge" :class="type">
  {{ text }}
</span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.rock {
  background-color: #0A4191;
  color: white;
}

.indie {
  background-color: #4E685F;
  color: white;
}

.rap {
  background-color: #552521;
  color: white;
}


</style>