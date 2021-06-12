<template>
<v-card elevation="0">
  <v-card-title>
    <h3>Individual</h3>
  </v-card-title>
  <v-card-text>
    <p>Create a cross point individual account</p>
    <v-form>
      <div>
        <h4>First Name</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.first_name" placeholder="First name"/>
      </div>
      <div>
        <h4>Last Name</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.last_name" placeholder="Last name"/>
      </div>
      <div>
        <h4>Email/ Phone Number</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.contact" placeholder="Email/ PHone Number"/>
      </div>
      <div>
        <h4>Password</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.password" placeholder="Password"/>
      </div>
      <AuthButton :loading="isSubmitting" label="Register"/>
      <div class="or-div">
                    <span>
                        <h4>
                            <span>or</span>
                        </h4>
                    </span>
      </div>
      <AuthButton label="Register with Whatsapp" btn-bg="#00E676"/>
    </v-form>
    <div class="redirect">
          <span style="font-size: 14px"
          >you have an Account?<v-btn
              @click="openLogin"
              text
              color="#7D17AD"
              style="font-weight: bold; text-transform: capitalize"
          >Login</v-btn
          ></span
          >
    </div>
  </v-card-text>
  <ModalRoot/>
</v-card>
</template>

<script>
import AuthButton from "@/Commons/AuthButton";
import {ModalBus} from "@/eventBus";
import ModalRoot from "@/components/ModalRoot";
import Login from "@/views/Login";

export default {
name: "IndividualAuth",
  components: {AuthButton, ModalRoot},
  data:()=>{
    return{
      user:{
        first_name:"",
        last_name: "",
        contact: "",
        password: ""
      },
      isSubmitting: false
    }
  },
  methods: {
  openLogin(){
    ModalBus.$emit('open',{
      component: Login
    })
  }
  }
}
</script>

<style scoped lang="scss">
h3{
  font-size: 28px;
}
h4{
  color: black;
}
.or-div span {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

h4 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #C4C4C4;
  position: relative;

span {
  background-color: #ffffff;
  position: relative;
  top: 25px;
  padding: 0 8px;
  color: #C4C4C4;
}
}
}
.redirect {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}




</style>