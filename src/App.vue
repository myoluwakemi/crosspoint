<template>
  <v-app>
    <LogoLoader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import LogoLoader from "@/Commons/LogoLoader";
export default {
  name: 'App',
  components: {LogoLoader},
  data: () => ({
    //
  }),

};
</script>
<style lang="scss">

* {
  font-family: "Roboto", sans-serif;
}

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

.insurance__type__tabs_wrapper {
  .v-tabs-slider-wrapper {
    height: 100% !important;
    z-index: 0;
  }
}

.claim__table {
  .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    background: #E0E0E0 !important;
  }
}
</style>
