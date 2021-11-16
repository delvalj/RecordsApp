<template>

  <section>
    FILTER
  </section>
  <section>
    <div class='controls'>
      <button>Refresh</button>
      <router-link to='/registerRecord'>Register a Record</router-link>
    </div>
    <ul v-if='hasRecords'>
      <li v-for='record in filteredRecords' :key='record.id'>
        {{ record.name }} -- {{ record.band }}

      </li>
    </ul>
    <h3 v-else>
      No records Found

    </h3>

  </section>

</template>

<script>
export default {
  name: 'RecordsList',

  computed: {
    filteredRecords() {
      // the first records is the namespaced (on the main index.js) and the second one is the getters name
      return this.$store.getters['records/records'];
    },
    hasRecords() {
      return this.$store.getters['records/hasRecords'];

    }
  }

};
</script>

<style scoped>

</style>