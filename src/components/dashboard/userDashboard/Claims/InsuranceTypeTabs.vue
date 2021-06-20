<template>
  <v-sheet class="insurance__type__tabs_wrapper pa-1">
    <v-tabs color="#7D17AD" active-class="tab-active">
      <v-tab v-for="(tab, i) in tabs" :key="i" @click="$emit('click', tab.name.toLowerCase())">
        <span>{{ tab.name }}</span>
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
export default {
  name: "InsuranceTypeTabs",
  props: {
    tabs: Array
  }
}
</script>

<style scoped lang="scss">
.tab-active {
  color: white;
}

.insurance__type__tabs_wrapper {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>