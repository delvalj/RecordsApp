<template>
  <li>
    <h3> {{ fullName }}</h3>
    <h4> {{ year }}</h4>

    <div>
      <span v-for='genre in genres' :key='genre' {{ genre }}></span>
    </div>

    <div>
      <router-link to='contactStoreLink'>View Details</router-link>
      <router-link to='recordsDetailsLink'>Contact Store</router-link>
    </div>

  </li>
</template>

<script>
export default {
  name: 'recordsItem',
  props: ['id', 'name', 'band', 'genre', 'year'],
  computed: {
    fullName() {
      return this.name + ' ' + this.band;
    },
    contactStoreLink() {
      return  this.$route.path + '/' + this.id + '/contact'  //records/r1/contactStore
      // return '/records/' + this.id + '/contact'  //records/r1/contactStore
    },
    recordsDetailsLink() {
      return this.$route.path + '/' + this.id ///records/r1
      // return '/records/' + this.id ///records/r1
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>