<template>
  <svg v-if="type==='individual'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12ZM12 15C15.186 15 18.045 15.571 20 18.063V20H4V18.063C5.955 15.57 8.814 15 12 15Z"
          :fill="active? '#fff': '#868686'"/>
  </svg>
  <svg v-else-if="type==='organisation'" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="3" fill="white"/>
    <path d="M27.1273 26.5455V19.2727C27.1273 18.4694 26.476 17.8182 25.6727 17.8182H23.9431L23.9758 13.4654C23.9819 12.6596 23.3299 12 22.5212 12H16.6061C15.7969 12 15.1455 12.66 15.1515 13.4654L15.1842 17.8182H13.4545C12.6512 17.8182 12 18.4694 12 19.2727V26.5455C12 27.3488 12.6512 28 13.4545 28H25.6727C26.476 28 27.1273 27.3488 27.1273 26.5455ZM21.0339 17.8182H18.0934L18.0716 14.9091H21.0557L21.0339 17.8182Z" fill="#7D17AD"/>
  </svg>



</template>

<script>
export default {
name: "IconHelper",
  props: {
    type: {
      type: String,
      required: true
    },
    active: Boolean,
    thick: Boolean,
    size: {
      type: [Number, String],
      default: 19
    }
  }
}
</script>

<style scoped>

</style>