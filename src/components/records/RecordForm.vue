<template>
  <form @submit.prevent='submitForm'>
    <div class='form-control' :class='{invalid: !name.isValid}'>
      <label for='name'> Records Name </label>
      <input type='text' id='name' v-model='name.val' @blur="clearValidity('name')">
      <p v-if='!name.isValid'>Please enter the name of the Record</p>
    </div>

    <div class='form-control' :class='{invalid: !bandName.isValid}'>
      <label for='bandName'> Band Name </label>
      <input type='text' id='bandName' v-model.trim='bandName.val' @blur="clearValidity('bandName')">
      <p v-if='!bandName.isValid'>Please enter the name of the Band</p>

    </div>

    <div class='form-control' :class='{invalid: !description.isValid}'>
      <label for='description'> Description </label>
      <textarea type='text' id='description' rows='5' v-model.trim='description.val'
                @blur="clearValidity('description')" />
      <p v-if='!description.isValid'>Please enter a brief description of the Record</p>
    </div>

    <div class='form-control' :class='{invalid: !year.isValid}'>
      <label for='Year'> Year </label>
      <input type='number' id='Year' v-model.number='year.val' @blur="clearValidity('year')">
      <p v-if='!year.isValid'>Please enter the year of the Record!</p>
    </div>

    <div class='form-control' :class='{invalid:!genre.isValid}'>
      <h3>Genre</h3>

      <div>
        <input type='checkbox' id='rock' value='rock' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='rock'>Rock</label>
      </div>

      <div>
        <input type='checkbox' id='indie' value='indie' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='indie'>Indie</label>
      </div>

      <div>
        <input type='checkbox' id='rap' value='rap' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='rap'>Rap</label>
      </div>

      <div>
        <input type='checkbox' id='nacional' value='nacional' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='nacional'>Nacional</label>
      </div>

      <div>
        <input type='checkbox' id='jazz' value='jazz' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='jazz'>Jazz</label>
      </div>

      <div>
        <input type='checkbox' id='blues' value='blues' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='blues'>Blues</label>
      </div>

      <div>
        <input type='checkbox' id='soul' value='soul' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='soul'>Soul</label>
      </div>

      <div>
        <input type='checkbox' id='espanola' value='espanola' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='espanola'>Española</label>
      </div>
      <div>
        <input type='checkbox' id='metal' value='metal' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='metal'>Metal</label>
      </div>

      <div>
        <input type='checkbox' id='reggae' value='reggae' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='reggae'>Reggae</label>
      </div>

      <div>
        <input type='checkbox' id='cuarteto' value='cuarteto' v-model='genre.val' @blur="clearValidity('genre')">
        <label for='cuarteto'>Cuarteto</label>
      </div>

      <p v-if='!genre.isValid'>Please enter at least one genre!</p>

    </div>

    <p v-if='!this.formComplete'> Please Fix the Above errors and submit again.</p>

    <base-btn>Register</base-btn>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  name: 'RecordForm',
  data() {
    return {
      name: {
        val: '',
        isValid: true
      },
      bandName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      genre: {
        val: [],
        isValid: true
      },
      year: {
        val: null,
        isValid: true
      },
      formComplete: true
      // isValid: true,
    };
  },
  // watch: {
  //
  // },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validationForm() {
      this.formComplete = true;

      if (this.name.val === '') {
        this.name.isValid = false;
        this.formComplete = false;
      }

      if (this.bandName.val === '') {
        this.bandName.isValid = false;
        this.formComplete = false;
      }

      if (this.description.val === '') {
        this.description.isValid = false;
        this.formComplete = false;
      }

      if (this.year.val === null) {
        this.year.isValid = false;
        this.formComplete = false;
      }

      if (this.genre.val.length === 0) {
        this.genre.isValid = false;
        this.formComplete = false;
      }
    },
    submitForm() {
      this.validationForm();

      if (!this.formComplete) {
        return;
      }

      const formData = {
        name: this.name.val,
        bandName: this.bandName.val,
        desc: this.description.val,
        yr: this.year.val,
        gnr: this.genre.val
      };
      this.$emit('save-data', formData);
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
  display: inline-grid;
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
  background-color: #FEF8EC;
  outline: none;
  border-color: #0A160C;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #FEF8EC solid 1px;
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