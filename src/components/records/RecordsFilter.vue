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

    <span class='filter-option'>
      <input type='checkbox' id='pop' checked @change='setFilter' />
      <label for='pop'>POP</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='nacional' checked @change='setFilter' />
      <label for='nacional'>ROCK NACIONAL</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='jazz' checked @change='setFilter' />
      <label for='jazz'>JAZZ</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='blues' checked @change='setFilter' />
      <label for='blues'>BLUES</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='soul' checked @change='setFilter' />
      <label for='soul'>SOUL / R&B</label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='metal' checked @change='setFilter' />
      <label for='metal'> METAL </label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='espanola' checked @change='setFilter' />
      <label for='espanola'> MUSICA ESPAÑOLA </label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='reggae' checked @change='setFilter' />
      <label for='reggae'> REGGAE </label>
    </span>

    <span class='filter-option'>
      <input type='checkbox' id='cuarteto' checked @change='setFilter' />
      <label for='cuarteto'> CUARTETO </label>
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
        cuarteto: true,
        reggae: true,
        espanola: true,
        metal: true,
        soul: true,
        blues: true,
        jazz: true,
        nacional: true,
        pop: true,
        rap: true,
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
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
  margin: 10px 0.25rem;

}

.filter-option.active label {
  font-weight: bold;
}
</style>