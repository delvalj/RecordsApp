<template>
  <section>
<base-card>
    <h2>Register a new Record</h2>
    <record-form></record-form>
</base-card>
  </section>
</template>

<script>
import RecordForm from '@/components/records/RecordForm';
export default {
  name: 'RecordsRegister',
  components: { RecordForm}
};
</script>

<style scoped>

</style>