<template>
  <div>
    <div class="toggle-links">
      <router-link
        :class="setActiveTwo"
        class="login-button"
        tag="button"
        :to="{ name: 'Login'}"
      >
        <span @click="clickLogin">Login</span>
      </router-link>
      <router-link
        class="register-button"
        :class="setActive"
        tag="button"
        :to="{ name: 'Register'}"
      >
        <span @click="clickRegister">Register</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClicked: true,
      isClickedTwo: false
    }
  },
  computed: {
    setActive () {
      return {
        'register-button': this.isClicked,
        'register-active': !this.isClicked
      }
    },
    setActiveTwo () {
      return {
        'login-button': this.isClickedTwo,
        'login-active': !this.isClickedTwo
      }
    }
  },
  methods: {
    clickLogin () {
      if (this.isClickedTwo) {
        this.isClickedTwo = !this.isClickedTwo
        this.isClicked = true
      } else {
        this.isClickedTwo = false
      }
    },
    clickRegister () {
      if (this.isClicked) {
        this.isClicked = !this.isClicked
        this.isClickedTwo = true
      } else {
        this.isCliced = false
      }
    }
  }
}
</script>

<style scoped>
  .toggle-links {
    margin: 0 auto;
    width: 329px;
    height: 59px;
    border-radius: 33px;
    background: #F8EDDD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
  }

  .login-button {
    border: none;
    background: #F8EDDD;
    color: #9E896A;
    font-size: 16px;
    margin-left: 72px;
    border-radius: 33px;
    cursor: pointer;
  }

  .register-button {
    border: none;
    background: #F8EDDD;
    color: #9E896A;
    font-size: 16px;
    margin-right: 60px;
    border-radius: 33px;
    cursor: pointer;
  }

  .login-active {
    background: #9E896A;
    color: white;
    margin-left: 13px;
    padding: 8px 52px 8px 51px;
  }

  .register-active {
    background: #9E896A;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 33px;
    margin-right: 12px;
    padding: 8px 41px 8px 40px;
  }

  .links-clicker {
    width: 80px;
  }
</style>
