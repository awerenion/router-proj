<template>
  <div>
    <div class="container">
      <div class="main-page__img">
        <img
          src="../assets/Cat.jpg"
          alt="Cat"
        >
        <div class="img-opacity" />
        <div class="img-text">
          <span class="img-title">Lorem Ipsum is simply</span>
          <span class="img-subtitle">Lorem Ipsum is simply</span>
        </div>
      </div>
      <div class="main-page__form">
        <span class="form-title">Welcome to lorem..!</span>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'MainPage',
  components: {
    Form
  }
}
</script>

<style>
.img-opacity {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  background:  linear-gradient(180deg, rgba(151, 118, 68, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%);
  border-radius: 29px;
}

.main-page__img {
  margin-top: 38px;
  margin-left: 41px;
  width: 737px;
  height: 825px;
  position: relative;
}

.img-text {
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 81%;
  left: 9%;
  z-index: 101;
}

.img-title {
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 5px;
}

.img-subtitle {
  font-size: 25px;
  font-weight: normal;
}

.container {
  width: 100%;
  display: flex;
}

.main-page__form {
  margin-top: 145px;
  margin-left: 111px;
  width: 454px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-title {
  font-size: 16px;
  margin-bottom: 24px;
}
</style>
