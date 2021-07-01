<template>
  <div class="dashboard__nav">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="600" fixed>
      <v-sheet class="pt-16">
        <div class="brand__logo px-5 mb-10">
          <v-img width="120" :src="brand_logo"/>
        </div>
        <v-sheet>
          <v-tabs slider-color="#F2F2F2" vertical>
            <v-tab v-for="(nav, i) in navs" :key="i" class="pl-2 pl-md-10" :to="nav.to" active-class="tab__active">
              <div class="d-flex align-center px-4" style="width: 100%;">
                <div class="mr-3">
                  <icon :type="nav.icon" :active="nav.active"/>
                </div>
                <div>
                  {{nav.name}}
                </div>
              </div>
            </v-tab>
          </v-tabs>
        </v-sheet>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>

<script>

import Icon from "@/components/icons/Icon";
import brand_logo from "@/assets/brand_logo.svg"

export default {
  name: "SideNavigation",
  components: {Icon},
  data: () => ({
    drawer: true,
    brand_logo,
    user_navs: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        active: true,
        to: {name: 'Dashboard'}
      },
      {
        name: 'Plans',
        icon: 'notebook',
        to: {name: 'Plans'}
      },
      {
        name: 'Documents',
        icon: 'dossier',
        to: {name: 'Documents'}
      },
      {
        name: 'Claims',
        icon: 'claim',
        to: {name: 'Claims'}
      },
      {
        name: 'Profile',
        icon: 'user',
        to: {name: 'Profile'}
      },
      {
        name: 'Help Desk',
        icon: 'user_help'
      }
    ]
  }),
  computed: {
    navs() {
      return this.user_navs
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  watch: {
    // smAndDown(smAndDown) {
    //   console.log('tequila')
    //   !smAndDown && (this.drawer = true)
    // }
  },
  mounted() {
    this.$root.$on('toggle-drawer', this.toggleDrawer)
    window.addEventListener('resize', this.onScreenAdjusted, false)
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    onScreenAdjusted() {
      if (window.document.documentElement.clientWidth >= 600) {
        this.drawer = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.nav__name {
  text-align: left;
}

.tab__active {
  color: #7D17AD !important;
}
</style>