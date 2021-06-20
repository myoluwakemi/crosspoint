<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

};
</script>
<style lang="scss">
.app-purple_color{
  color: #7D17AD;
}
.row{
  display: flex;
  justify-content: space-between;

@media (max-width: 768px) {
  flex-direction: column;

}
}
.v-text-field--outlined fieldset {
  border-color: transparent !important;

}

.dashboard__nav {
  .v-tabs-slider-wrapper {
    width: 100% !important;
    z-index: 0;
  }
}
</style>
