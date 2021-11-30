<template>
  <form action='' @submit.prevent='submitForm'>
    <div class='form-control' :class='{invalid: !email.isValid}'>
      <label for='email'> Your Email </label>
      <input type='email' id='email'  v-model.trim="email.val"/>


    </div>

    <div class='form-control' :class='{invalid: !message.isValid}'>
      <label for='message'> Mensaje </label>
      <textarea rows='5' id='message' v-model.trim="message.val"/>
    </div>

    <div class='actions'>
      <base-btn>Send Message</base-btn>
    </div>

    <p  class="errors" v-if="!formComplete">Please Fix the Errors</p>
  </form>
</template>

<script>
export default {
  name: 'ContactStore',

  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      message: {
        val: '',
        isValid: true
      },
      formComplete: true

    };
  },
  methods: {
    submitForm() {
      this.formComplete = true;

      if(this.email.val === '' || !this.email.val.includes('@') ) {
        this.email.isValid = false
      }

      if(this.message.val === '' ) {
        this.message.isValid = false
      }

      if (this.email.val === '' || !this.email.val.includes('@') || this.message.val === '') {
        this.formComplete = false;
        return;
      }

    }
  }
};
</script>

<style scoped>
form {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  max-width: 500px;
  margin: 1rem 1rem 1rem 500px;

}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  max-width: 500px;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;

}

.errors {
  font-weight: bold;
  /*color: red;*/

}

.actions {
  text-align: center;
}


.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>