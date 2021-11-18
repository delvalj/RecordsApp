<template>
  <form @submit.prevent='submitForm'>
    <div class='form-control'>
      <label for='name'> Records Name </label>
      <input type='text' id='name' v-model='name'>
    </div>

    <div class='form-control'>
      <label for='bandName'> Band Name </label>
      <input type='text' id='bandName' v-model.trim='bandName'>
    </div>

    <div class='form-control'>
      <label for='description'> Description </label>
      <textarea type='text' id='description' rows='5' v-model.trim='description'/>
    </div>

    <div class='form-control'>
      <label for='Year'> Year </label>
      <input type='number' id='Year' v-model.number='year'>
    </div>
    
    <div class='form-control'>
      <h3>Genre</h3>
      <div>
        <input type='checkbox' id='rock' value='rock' v-model='genre'>
        <label for='rock'>Rock</label>
      </div>

      <div>
        <input type='checkbox' id='indie' value='indie' v-model='genre'>
        <label for='indie'>Indie</label>
      </div>

      <div>
        <input type='checkbox' id='pop' value='pop' v-model='genre'>
        <label for='pop'>Pop</label>
      </div>
    </div>
    <base-btn>Register</base-btn>
  </form>
</template>

<script>
export default {
  name: 'RecordForm',
  data() {
    return {
      name: '',
      bandName: '',
      description: '',
      genre: [],
      year: '',
    }
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        bandName: this.bandName,
        desc: this.description,
        yr: this.year,
        gnr: this.genre
      };
      console.log(formData);
    }

  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>