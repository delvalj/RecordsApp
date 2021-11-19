<template>
  <section>
    <base-card>
      <h2>Register a new Record</h2>
      <record-form @save-data="saveData"></record-form>
    </base-card>
  </section>
</template>

<script>
import RecordForm from '@/components/records/RecordForm';

export default {
  name: 'RecordsRegister',
  components: { RecordForm },

  methods: {
    saveData(data) {
      this.$store.dispatch('records/registerRecord', data);
      this.$router.replace('/records')
    }
  }
};
</script>

<style scoped>

</style>