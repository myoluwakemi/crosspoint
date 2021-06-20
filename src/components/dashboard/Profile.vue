<template>
  <div>
    <h2 class="mb-3">Profile</h2>
    <v-card flat class="pb-16">
      <div class="d-flex justify-center py-5">
        <div class="d-flex flex-column align-center">
          <v-avatar class="mb-3" size="120">
            <v-img :src="profile_image"/>
          </v-avatar>
          <v-btn color="#7D17AD" small text>
            <small class="mr-1 font-weight-bold">Edit Profile</small>
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <v-form class="profile_form mx-auto px-5" @submit.prevent="saveProfile">
        <v-row>
          <v-col v-for="(field, i) in fields" :key="i" cols="12" md="6">
            <label class="label font-weight-bold">{{ field.label }}</label>
            <v-select
                v-if="field.items"
                :items="field.items"
                v-model="form[getFieldModel(field.label)]"
                :placeholder="field.placeholder"
                append-icon="mdi-chevron-down"
                height="70"
                color="#7D17AD"
                :menu-props="{color: '#7D17AD'}"
                :item-text="field.item_text"
                :item-value="field.item_value"
                background-color="#F2F2F2" class="mt-2" flat solo/>
            <v-text-field
                v-else
                :label="field.label"
                :placeholder="field.placeholder"
                v-model="form[getFieldModel(field.label)]"
                :type="getFieldType(field.type, field.show)"
                color="#7D17AD"
                :append-icon="typeof field.show === 'boolean' ? field.show ? 'mdi-eye' : 'mdi-eye-off' : undefined"
                @click:append="[showPassword(field.id, field.type)]"
                background-color="#F2F2F2"
                class="mt-2" flat height="70" solo/>
          </v-col>
        </v-row>
        <div class="d-flex justify-end">
          <v-btn class="text--white text-capitalize" type="submit" x-large color="primary" depressed>Save</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
// import profile_image from "@/assets/profile_image.svg";
import {mapGetters} from "vuex";
import {snakeCase} from "lodash"

export default {
  name: "Profile",
  data: () => ({
    // profile_image
    form: {
      full_name: '',
      email_address: '',
      phone_number: '',
      date_of_birth: '',
      country: '',
      state_of_residence: '',
      password: ''
    },
    fields: [
      {
        id: 1,
        label: 'Full Name',
        placeholder: 'Full Name'
      },
      {
        id: 2,
        label: 'Email Address',
        placeholder: 'Email Address'
      },
      {
        id: 3,
        label: 'Phone Number',
        placeholder: 'Phone Number'
      },
      {
        id: 4,
        label: 'Date of Birth',
        placeholder: 'dd/mm/yy',
        type: 'date'
      },
      {
        id: 5,
        label: 'Country',
        placeholder: 'Country',
        items: [
          {
            id: 1,
            country: 'Nigeria'
          },
          {
            id: 2,
            country: 'United States of America'
          }
        ],
        item_text: 'country',
        item_value: 'id'
      },
      {
        id: 6,
        label: 'State of Residence',
        placeholder: 'State of Residence',
        items: [
          {
            id: 1,
            state: 'Lagos'
          },
          {
            id: 2,
            state: 'Abuja'
          }
        ],
        item_value: 'id',
        item_text: 'state'
      },
      {
        id: 7,
        placeholder: 'Password',
        label: 'Password',
        type: 'password',
        show: false,
      }
    ]
  }),
  computed: {
    ...mapGetters('onboarding', ['profile_image'])
  },
  methods: {
    showPassword(id, type) {
      console.log({id, type})
      if (type !== 'password') return
      const password_field = this.fields.find(field => field.id === id)
      password_field.show = !password_field.show
    },
    getFieldModel(label) {
      return snakeCase(label)
    },
    getFieldType(type, show) {
      if (typeof show === "undefined") return type
      return show ? 'text' : type
    },
    async saveProfile() {

    }
  }
}
</script>

<style lang="scss" scoped>
.profile_form {
  width: 100%;

  @media (min-width: 600px) {
    width: 80%;
  }
}
</style>