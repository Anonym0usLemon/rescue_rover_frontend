<template>
  <nav-bar></nav-bar>
  <login-form></login-form>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import NavBar from './components/UI/NavBar.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    NavBar
  }
}
</script>

<style>

</style>
