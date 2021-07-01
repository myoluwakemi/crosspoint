<template>
  <div>
    <div class="d-sm-flex d-none justify-space-between align-center pt-16 pb-10">
      <div class="search__input d-flex align-center">
        <icon type="search"/>
        <input class="flex-grow-1" placeholder="Search everything" ref="search_input" v-model="search"/>
      </div>
      <div class="user__corner d-flex align-center justify-space-between">
        <v-btn color="purple" rounded depressed>
          <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <div class="d-flex align-center">
          <v-avatar class="mr-3">
            <v-img :src="profile"/>
          </v-avatar>
          <span class="font-weight-bold mr-1">{{userFullName}}</span>
          <v-btn icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex header_small d-sm-none justify-space-between align-center v-app-bar--fixed px-3 py-4">
      <div>
        <v-img :src="brand_logo"/>
      </div>
      <v-app-bar-nav-icon @click="$root.$emit('toggle-drawer')" color="white"></v-app-bar-nav-icon>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons/Icon";
import profile from "@/assets/profile_image.svg"
import brand_logo from "@/assets/purpleLogo.svg"
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "DashboardHeader",
  components: {Icon},
  data: () => ({
    search: '',
    profile,
    brand_logo
  }),
  computed: {
    ...mapGetters('onboarding', ['userFullName']),
  },
  methods: {
    ...mapMutations('globals', ['SET_DRAWER'])
  }
}
</script>

<style scoped lang="scss">
.search__input {
  background: white;
  border: 1px solid #E0E0E0;
  height: 56px;
  border-radius: 10px;
  max-width: 450px;
  width: 70%;
  padding: 0 8px;

  input {
    height: 100%;
    border: 0;
    text-indent: 8px;

    &:active, &:focus {
      outline: 0;
    }
  }
}

.v-btn--rounded {
  border-radius: 50%;
  min-width: 36px !important;
  width: 36px;
}

.user__corner {
  min-width: 250px;
}

.header_small {
  background: #7D17AD;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>