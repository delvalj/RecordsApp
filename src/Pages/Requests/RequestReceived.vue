<template>
  <div>
  <base-dialog :show='!!error' title='Algo no funciona bien!' @close='handleError'>
    <p> {{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>REQUESTS RECEIVED</h2>
      </header>
      <base-spinner v-if='isLoading'></base-spinner>
      <ul>
        <requests-item v-for='req in receivedReq'
                       :key='req.id'
                       :email='req.userEmail'
                       :message='req.message'
        >
        </requests-item>
      </ul>
<!--      <h3 v-if=''>You dont have any request yet!</h3>-->
    </base-card>
  </section>
  </div>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';

export default {

  name: 'RequestReceived',
  components: RequestsItem,

  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    receivedReq() {
      // console.log('HOLA SOY EL CONSOLE LOG ',this.$store.getters['requests/requests']);
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadReq();
  },

  methods: {
    async loadReq() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchReq');
      } catch (error) {
        this.error = error.message || 'Algo no anda bien!';
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>