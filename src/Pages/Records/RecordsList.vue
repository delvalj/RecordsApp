<template>
  <section>
    <records-filter @change-filter='setFilters'>
      FILTER
    </records-filter>
  </section>
  <base-card>
    <section>

      <div class='controls'>
        <base-btn mode='outline' @click='loadRecords'>
          Refresh
        </base-btn>

        <base-btn link to='/registerRecord' v-if='!isRecord'>Register a Record</base-btn>

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
import RecordsFilter from '@/components/records/RecordsFilter';

export default {
  name: 'RecordsList',

  components: { recordsItem, RecordsFilter },

  data() {
    return {
      activeFilters: {
        rock: true,
        indie: true,
        rap: true
      }
    };
  },

  computed: {
    isRecord() {
      return this.$store.getters['records/isRecord'];
    },
    filteredRecords() {
      // the first records is the namespaced (on the main index.js) and the second one is the getters name
      const records = this.$store.getters['records/records'];
      return records.filter(records => {
        if (this.activeFilters.rock && records.genre.includes('rock')) {
          return true;
        }

        if (this.activeFilters.indie && records.genre.includes('indie')) {
          return true;
        }

        if (this.activeFilters.rap && records.genre.includes('rap')) {
          return true;
        }
        return false;
      });
    },

    hasRecords() {
      return this.$store.getters['records/hasRecords'];

    }
  },
  created() {
    this.loadRecords();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    loadRecords() {
      this.$store.dispatch('records/loadRecords');
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