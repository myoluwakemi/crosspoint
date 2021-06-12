<template>
  <div  style="display: flex; align-items: center; justify-content: center">
    <v-btn elevation="0" :loading="loading" @click="$emit('click')"  type="submit" height="60"  :style="{background: btnBg}" style="
                                   text-transform: capitalize;
                                color: white; font-weight: bold;
                                width: 100%;
                                margin-bottom: 0.5rem;
                                font-size: 16px;">{{ label}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    label: String,
    loading: Boolean,
    btnBg: {
      default: "#7D17AD"
    }
  }
}
</script>

<style scoped>

</style>