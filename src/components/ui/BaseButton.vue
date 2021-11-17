<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'

    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #F0AB0F;
  border: 2px solid #4E685F;
  color: #0A160C;
  cursor: pointer;
  /*border-radius: 30px;*/
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {

  background-color: #4E685F;
  border-color: #4E685F;
}

flat {
  background-color: transparent;
  color: #4E685F;
  border: none;
}

outline {
  background-color: transparent;
  border-color: #4E685F;
  color: #F21B25;
}

flat:hover,
flat:active,
outline:hover,
outline:active {
  background-color: #0A4191;
}
</style>
