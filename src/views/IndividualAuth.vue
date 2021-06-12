<template>
<v-card elevation="0">
  <v-card-title>
    <h3>Individual</h3>
  </v-card-title>
  <v-card-text>
    <p>Log in to continue</p>
    <v-form>
      <div>
        <h4>Email address</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.email" placeholder="Email"/>
      </div>
      <div>
        <h4>Password</h4>
        <v-text-field outlined background-color="#FAFAFA" v-model="user.password" placeholder="Email"/>
      </div>
      <AuthButton :loading="isSubmitting" label="Login"/>
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
          >Don't have an Account?<v-btn
              text
              color="#7D17AD"
              style="font-weight: bold; text-transform: capitalize"
          >Register</v-btn
          ></span
          >
    </div>
  </v-card-text>
</v-card>
</template>

<script>
import AuthButton from "@/Commons/AuthButton";
export default {
name: "IndividualAuth",
  components: {AuthButton},
  data:()=>{
    return{
      user:{
        email:"",
        password: ""
      },
      isSubmitting: false
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