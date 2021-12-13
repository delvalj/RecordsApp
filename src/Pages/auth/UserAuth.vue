<template>
  <div>
    <base-dialog :show='!!error' title='an error occurred' @close='handleError'>
      <p> {{ error }}</p>
    </base-dialog>
    <base-dialog :show='isLoading' title='Authenticating' fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <form @submit.prevent='submitForm'>
      <base-card>
        <div class='formControl'>
          <label for='email'>E-Mail</label>
          <input type='email' id='email' v-model.trim='email'>
        </div>

        <div class='formControl'>
          <label for='password'>Password</label>
          <input type='password' id='password' v-model.trim='password'>

        </div>

        <p v-if='!formIsValid'> Ingrese un Email y Contraseña Validos</p>

        <base-btn class='btn_login'>{{ submitButtonCaption }}</base-btn>
        <base-btn class='btn_login' type='button' mode='flat' @click='switchAutoMode'>{{ switchModeButtonCaption }}
        </base-btn>
      </base-card>

    </form>
  </div>

</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {
    handleError() {
      this.error = false;
    },
    async submitForm() {
      this.formIsValid = true;

      const actionPayload = {
        email: this.email,
        password: this.password
      };

      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;

      }
      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
        // esto es para que cuando no este logeado y vaya a registrarme me vuelva a cargar la misma pagina dodne estaba o sino vaya a records"re
        const redirectUrl = '/' + (this.$route.query.redirect || 'records');
        await this.$router.replace(redirectUrl);

      } catch (err) {
        this.error = err.message || 'Failed to Authenticate';
      }
      this.isLoading = false;
    },

    switchAutoMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    }
  }
};


</script>

<style scoped>
form {
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

.btn_login {
  border: 1px solid #ccc;
  padding: .7rem;
  margin: .6rem 0.1rem;

}

p {
  margin-bottom: .8px;
  padding: 0;
  font-size: small;
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


.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>