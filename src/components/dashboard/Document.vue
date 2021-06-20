<template>
  <v-card color="transparent" flat to="/">
    <v-img :src="document_img" class="d-flex align-center justify-center" max-height="200" max-width="200">
      <h4 class="text-center">{{ title }}</h4>
    </v-img>
  </v-card>
</template>

<script>
import document_img from "@/assets/folder.svg"
export default {
  name: "Document",
  data: () => ({
    document_img
  }),
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>