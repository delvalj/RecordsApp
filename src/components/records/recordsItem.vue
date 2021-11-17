<template>
  <li>
    <h3> {{ fullName }}</h3>
    <h4> {{ year }}</h4>

    <div>
      <base-badge v-for='genre in genre' :key='genre' :type='genre' :title='genre'></base-badge>
    </div>

    <div>
      <base-btn mode='outline' link to='contactStoreLink'> View Details</base-btn>
      <base-btn link to='recordsDetailsLink'> Contact Store</base-btn>
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
      return this.$route.path + '/' + this.id + '/contact';  //records/r1/contactStore
      // return '/records/' + this.id + '/contact'  //records/r1/contactStore
    },
    recordsDetailsLink() {
      return this.$route.path + '/' + this.id; ///records/r1
      // return '/records/' + this.id ///records/r1
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 2rem;
  border: 2px solid #424242;
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