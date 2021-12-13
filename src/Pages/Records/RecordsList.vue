<template>
  <div>
  <base-dialog :show="!!error" title="An Error Ocurred!" @close="handleError">
    <p> {{ error }}</p>
  </base-dialog>
  <section>
    <records-filter @change-filter='setFilters'>
      FILTER
    </records-filter>
  </section>
  <base-card>
    <section>

      <div class='controls'>
        <base-btn mode='outline' @click='loadRecords(true)'>
          Refresh
        </base-btn>

        <base-btn link to='/auth' v-if='!isLoggedIn'>
            Login
        </base-btn>

        <base-btn v-if='isLoggedIn' link to='/registerRecord'>Register a Record</base-btn>
      </div>
      <div v-if='isLoading && !isLoading'>
        <base-spinner></base-spinner>
      </div>

      <ul v-else-if='hasRecords'>
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
</div>

</template>

<script>
import recordsItem from '../../components/records/recordsItem';
import RecordsFilter from '@/components/records/RecordsFilter';

export default {
  name: 'RecordsList',

  components: { recordsItem, RecordsFilter },

  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        rock: true,
        indie: true,
        rap: true
      }
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    isRecord() {
      return !this.isLoading && this.$store.getters['records/isRecord'];
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
    async loadRecords(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('records/loadRecords', { forceRefresh: refresh });
      } catch (error) {
        this.error = error.message || 'Something Went Wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },


};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 50px;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;

}


</style>