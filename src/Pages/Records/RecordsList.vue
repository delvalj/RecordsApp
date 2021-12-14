<template>
  <div>
    <base-dialog :show='!!error' title='An Error Ocurred!' @close='handleError'>
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

          <base-btn link to='/auth?redirect=registerRecord' v-if='!isLoggedIn'>
            Login to register a Record!
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
import RecordsFilter from '../../components/records/RecordsFilter';

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
        rap: true,
        nacional: true,
        pop: true,
        jazz: true,
        blues: true,
        soul: true,
        metal: true,
        espanola: true,
        reggae: true,
        cuarteto: true
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

        if (this.activeFilters.nacional && records.genre.includes('nacional')) {
          return true;
        }

        if (this.activeFilters.cuarteto && records.genre.includes('cuarteto')) {
          return true;
        }

        if (this.activeFilters.espanola && records.genre.includes('espanola')) {
          return true;
        }

        if (this.activeFilters.pop && records.genre.includes('pop')) {
          return true;
        }

        if (this.activeFilters.metal && records.genre.includes('metal')) {
          return true;
        }


        if (this.activeFilters.reggae && records.genre.includes('reggae')) {
          return true;
        }

        if (this.activeFilters.jazz && records.genre.includes('jazz')) {
          return true;
        }

        if (this.activeFilters.blues && records.genre.includes('blues')) {
          return true;
        }

        if (this.activeFilters.soul && records.genre.includes('soul')) {
          return true;
        }

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
  }
};
</script>

<style scoped>
ul {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  right: 20px;
  grid-auto-rows: minmax(100px, auto);
}

.controls {
  display: flex;
  justify-content: space-between;

}


</style>