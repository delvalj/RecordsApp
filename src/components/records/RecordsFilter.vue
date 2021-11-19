<template>
  <base-card>
    <h2>Find Your Record</h2>
    <span class='filter-option'>
      <input type='checkbox' id='rock' checked @change='setFilter' />
      <label for='rock'>ROCK</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='indie' checked @change='setFilter' />
      <label for='indie'>INDIE</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='rap' checked @change='setFilter' />
      <label for='rap'>RAP</label>
    </span>

  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  name: 'RecordsFilter',
  data() {
    return {
      filters: {
        rock: true,
        indie: true,
        rap: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId] : isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>