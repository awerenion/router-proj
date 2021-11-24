<template>
  <div>
    <button class="basic-button">
      <slot />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .basic-button {
    width: 232px;
    color: white;
    padding: 13px 95px 12px 94px;
    background: #9E896A;
    border-radius: 36px;
    border:none;
    cursor: pointer;
  }
</style>
