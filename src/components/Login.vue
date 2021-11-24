<template>
  <div>
    <div class="form-container">
      <span class="form-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <form-input
        :name="'User name'"
        :placeholder="'Enter your User name'"
      />
      <form-input
        :name="'Password'"
        :placeholder="'Enter your Password'"
        type="password"
        :is-password="true"
      />
      <router-link
        :to="{name: 'Login'}"
        class="remember-pass"
      >
        Forgot Password?
      </router-link>
      <basic-button class="basic">
        Login
      </basic-button>
    </div>
  </div>
</template>

<script>
import BasicButton from './BasicButton.vue'
import FormInput from './FormInput.vue'

export default {
  name: 'Login',
  components: {
    FormInput,
    BasicButton
  },
  data () {
    return {
      inputData: { login: '', passwod: '' }
    }
  }
}
</script>

<style scoped>
  .form-text {
    margin-bottom: 42px;
  }

  .remember-pass {
    text-align: end;
    font-weight: 300;
    font-size: 12px;
    text-decoration: none;
    margin-right: 22px;
    color: black;
    margin-bottom: 62px;
  }

  .basic {
    display: flex;
    justify-content: end;
  }
</style>
