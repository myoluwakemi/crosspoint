<template>
  <v-card elevation="0">
    <v-card-title>
      <h3>Registration</h3>
    </v-card-title>
    <v-item-group active-class="color-change" v-model="isIndividual">
      <v-row style="margin-top: 2rem">
        <v-col v-for="(regType, i) in registration" :key="i">
          <v-item :value="regType.value" v-slot="{ active, toggle }">
            <v-card
                max-height="150px"
                max-width="350px"
                :color="active ? '#7D17AD' : ''"
                elevation="0"
                :style="{color:active? 'white': 'black'}"
                style="padding: 1rem; border-radius: 8px; border: 0.5px solid #D3D3D3; "
                @click="toggle"
            >
              <div style="display: flex;align-items: center">
                <Iconhelper :type="regType.icon" :active="active" />
                <h3 style=" margin-left: 0.5rem">
                  {{ regType.type }}
                </h3>
              </div>
              <p style="padding-bottom: 2.5rem; padding-top: 0.5rem">
                {{ regType.label }}
              </p>
            </v-card>
          </v-item>
        </v-col>

      </v-row>

    </v-item-group>
    <ModalRoot/>
  </v-card>

</template>

<script>
import Iconhelper  from "@/Commons/IconHelper"
import {ModalBus} from "@/eventBus";
import IndividualAuth from "@/views/IndividualAuth";
import ModalRoot from "@/components/ModalRoot";
import CompanyAuth from "@/views/CompanyAuth";

export default {
name: "BeforeRegister",
  components: { Iconhelper , ModalRoot},

  data: ()=> {
  return{
    registration: [
      {
        icon: "individual",
        type: "Individual",
        label: "Register as an individual",
        value: true
      },
      {
        icon: "organisation",
        type: "Organisation",
        label: "Register as an Organisation",
        value: false
      }
    ],
    isIndividual: null
  }
  },
  watch: {
    isIndividual(value){
      if(value === true){
        this.openIndividualAuth()
      }if (value === false){
        this.openCompanyAuth()
      }
    }

  },
  methods: {
  openIndividualAuth(){
    ModalBus.$emit('open', {
      component: IndividualAuth
    })

  },
    openCompanyAuth(){
    ModalBus.$emit('open', {
      component: CompanyAuth
    })
    }
  }

}
</script>

<style scoped>

</style>