<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2> Are u Interested? Reach out Now PLEASE! Leave a Comment down below and let us know whats your
            request!</h2>
          <base-btn class='details' link :to='contactLink'> Contact The Store</base-btn>
        </header>
      </base-card>
      <router-view></router-view>
    </section>

    <section>
      <base-card>
        <h2> {{ fullName }}</h2>
        <h3>{{ year }}</h3>
      </base-card>
    </section>

    <section>
      <base-card>
        <base-badge v-for='genre in genre' :key='genre' :type='genre' :title='genre'></base-badge>
        <p> {{ description }}</p>
      </base-card>
    </section>

  </div>


</template>

<script>
export default {
  name: 'RecordsDetail',
  props: ['id'],
  data() {
    return {
      selectedRecord: null
    };
  },
  computed: {
    fullName() {
      return this.selectedRecord.name + ' - ' + this.selectedRecord.band;
    },
    contactLink() {
      return this.$route.path + '/' + 'contactStore';
    },
    genre() {
      return this.selectedRecord.genre;
    },
    band() {
      return this.selectedRecord.band;
    },
    year() {
      return this.selectedRecord.year;
    },
    description() {
      return this.selectedRecord.description;
    }
  },

  created() {
    this.selectedRecord = this.$store.getters['records/records'].find(
      (record) => record.id === this.id
    );
  }
};
</script>

<style scoped>
.details {
  position: relative;
  margin: 10px;
  left: 37%;
}
</style>