<template>
  <div>
    <h2>Documents</h2>
    <v-row class="my-4">
      <v-col v-for="i in 16" :key="i" cols="6" md="2">
        <document title="Insurance"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Document from "@/components/dashboard/Document";
export default {
name: "Documents",
  components: {Document}
}
</script>

<style scoped>

</style>