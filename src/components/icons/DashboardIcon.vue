<template>
  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M7.70828 0H1.45828C0.654144 0 0 0.654144 0 1.45828V5.20828C0 6.01257 0.654144 6.66672 1.45828 6.66672H7.70828C8.51257 6.66672 9.16672 6.01257 9.16672 5.20828V1.45828C9.16672 0.654144 8.51257 0 7.70828 0Z"
        :fill="active ? color : default_color"/>
    <path
        d="M7.70828 8.3335H1.45828C0.654144 8.3335 0 8.98764 0 9.79193V18.5419C0 19.3461 0.654144 20.0002 1.45828 20.0002H7.70828C8.51257 20.0002 9.16672 19.3461 9.16672 18.5419V9.79193C9.16672 8.98764 8.51257 8.3335 7.70828 8.3335Z"
        :fill="active ? color : default_color"/>
    <path
        d="M18.5417 13.3335H12.2917C11.4874 13.3335 10.8333 13.9876 10.8333 14.7919V18.5419C10.8333 19.3461 11.4874 20.0002 12.2917 20.0002H18.5417C19.3459 20.0002 20 19.3461 20 18.5419V14.7919C20 13.9876 19.3459 13.3335 18.5417 13.3335Z"
        :fill="active ? color : default_color"/>
    <path
        d="M18.5417 0H12.2917C11.4874 0 10.8333 0.654144 10.8333 1.45828V10.2083C10.8333 11.0126 11.4874 11.6667 12.2917 11.6667H18.5417C19.3459 11.6667 20 11.0126 20 10.2083V1.45828C20 0.654144 19.3459 0 18.5417 0V0Z"
        :fill="active ? color : default_color"/>
  </svg>
</template>

<script>
export default {
  name: "DashboardIcon",
  data: () => ({
    default_color: '#828282'
  }),
  props: {
    active: Boolean,
    color: {
      type: String,
      default: '#7D17AD'
    }
  }
}
</script>

<style scoped>

</style>