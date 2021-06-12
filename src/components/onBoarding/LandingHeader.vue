<template>
  <div>
    <v-app-bar
        :color="color"
        dark
        height="100px"
        fixed
        elevation="0"
        class="pl-10 pr-10"

    >
      <CrosspointLogo/>

      <v-spacer></v-spacer>

      <ul style="list-style: none; display: flex;"  :style="[
      !$vuetify.breakpoint.mobile ? { display: 'flex' } : { display: 'none' }
    ]">
        <li>Personal</li>
        <li>Organisation</li>
        <li>About Us</li>
      </ul>
      <v-spacer></v-spacer>
      <span  :style="[
      !$vuetify.breakpoint.mobile ? { display: 'flex' } : { display: 'none' }
    ]">092763656787</span>

      <v-spacer></v-spacer>

      <div class="header-action-btn"  :style="[
      !$vuetify.breakpoint.mobile ? { display: 'flex' } : { display: 'none' }
    ]">
        <v-btn @click="openRegister" style="border: 1px solid#fff; background: inherit; margin-right: 1.2rem">Register</v-btn>
        <v-btn @click="openLogin" style="background: #ffffff; color: #7D17AD;">Log In</v-btn>

      </div>
            <v-app-bar-nav-icon  :style="[
      !$vuetify.breakpoint.mobile ? { display: 'none' } : { display: 'flex' }
    ]" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <!--    <v-navigation-drawer-->
    <!--        v-model="drawer"-->
    <!--        absolute-->
    <!--        temporary-->
    <!--    >-->
    <!--      <v-list-->
    <!--          nav-->
    <!--          dense-->
    <!--      >-->
    <!--        <v-list-item-group-->
    <!--            v-model="group"-->
    <!--            active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"-->
    <!--        >-->
    <!--          <v-list-item>-->
    <!--            <v-list-item-icon>-->
    <!--              <v-icon>mdi-home</v-icon>-->
    <!--            </v-list-item-icon>-->
    <!--            <v-list-item-title>Home</v-list-item-title>-->
    <!--          </v-list-item>-->

    <!--          <v-list-item>-->
    <!--            <v-list-item-icon>-->
    <!--              <v-icon>mdi-account</v-icon>-->
    <!--            </v-list-item-icon>-->
    <!--            <v-list-item-title>Account</v-list-item-title>-->
    <!--          </v-list-item>-->
    <!--        </v-list-item-group>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <ModalRoot/>
    <NavigationDrawer  :drawer="drawer" @close:drawer="drawer=false"/>
  </div>
</template>

<script>
import {ModalBus} from "@/eventBus";
import Login from "@/views/Login";
import BeforeRegister from "@/views/BeforeRegister"
import CrosspointLogo from "@/components/onBoarding/reuseables/CrosspointLogo";
import NavigationDrawer from "@/components/onBoarding/NavigationDrawer";
import ModalRoot from "@/components/ModalRoot";

export default {
  name: "LandingHeader",
  components: {ModalRoot, NavigationDrawer, CrosspointLogo},
  data: () => ({
    drawer: false,
    group: null,
    color: "#7D17AD"
  }),
  methods: {
    openLogin() {
      ModalBus.$emit('open', {
        component: Login

      })

    },
    openRegister() {
      ModalBus.$emit('open', {
        component: BeforeRegister,  modalWidth: "70rem"
      })
    }
  }
}
</script>

<style scoped>
ul li {
  margin: 0 1rem;
}

</style>