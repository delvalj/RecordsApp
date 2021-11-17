<template>

  <section>
    FILTER
  </section>
  <base-card>
    <section>

      <div class='controls'>
        <base-btn mode='outline'>
          Refresh
        </base-btn>

        <base-btn link to='/registerRecord'>Register a Record</base-btn>

      </div>
      <ul v-if='hasRecords'>
        <recordsItem
          v-for='record in filteredRecords'
          :key='record.id'
          :id='record.id'
          :name='record.name'
          :band='record.band'
          :genre:='record.genre'
          :year='record.year'>
        </recordsItem>
      </ul>
      <h3 v-else>
        No records Found
      </h3>

    </section>
  </base-card>

</template>

<script>
import recordsItem from '../../components/records/recordsItem';

export default {
  name: 'RecordsList',

  components: { recordsItem },

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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}


</style>