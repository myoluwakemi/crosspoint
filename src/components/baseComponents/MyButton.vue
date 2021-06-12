<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "MyButton",
  props: ['text']
}
</script>

<style scoped>
  button {
    background: #FF2E23;
    color: white;
    padding: 12px 15px;
    border: none;
    border-radius: .25em;
    cursor: pointer;
    outline: 0;
  }
</style>