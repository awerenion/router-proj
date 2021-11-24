<template>
  <div class="form-element">
    <div class="form-title">
      {{ name }}
    </div>
    <input
      class="form-input"
      :type="type"
      :placeholder="placeholder"
    >
    <button
      v-if="isPassword"
      class="changeType"
      @click="changeType"
    >
      H
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    placeholder: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    isPassword: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    changeType () {
      this.type = this.type === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style>
  .form-title {
    margin-bottom: 12px;
  }

  .form-input {
    width: 435px;
    border-radius: 40px;
    border: 1px solid #9E896A;
    height: 54px;
    padding-left: 31px;
    font-size: 15px;
    margin-bottom: 30px;
  }

  .changeType {
    position: absolute;
    right: 10%;
    top: 45%;
  }

  .form-element {
    position: relative;
  }
</style>
