<template>
  <div>
    <div class="form-container">
      <span class="form-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <form-input
        :name="'Email adress'"
        :placeholder="'Enter your Email adress'"
      />
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
      <basic-button class="non-basic">
        Register
      </basic-button>
    </div>
  </div>
</template>

<script>
import BasicButton from './BasicButton.vue'
import FormInput from './FormInput.vue'

export default {
  name: 'Register',
  components: {
    BasicButton,
    FormInput
  },
  data () {
    return {
      inputData: { login: '', passwod: '', email: '' }
    }
  }
}
</script>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  .registr-text {
    color: #5B5B5B;
    font-size: 16px;
  }
  .non-basic {
    display: flex;
    justify-content: end;
  }

  .form-text {
    margin-bottom: 32px;
  }
</style>
