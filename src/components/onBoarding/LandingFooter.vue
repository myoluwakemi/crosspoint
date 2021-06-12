<template>
<div class="landing-footer">
  <div>
    <div class="footer-logo">
      <img src="../../assets/purpleLogo.svg">
    </div>
    <p class="address">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
    <p class="number">+234 5676 674 432</p>
    <p style="margin-top: 2rem">CROSSPOINT @{{ new Date().getFullYear()}}</p>
    <p style="padding: 0">All rights reserved</p>
  </div>
  <div>
    <h5>Quick Task</h5>
    <p>Login</p>
    <p>Register</p>
    <p>Plan</p>
    <p>About Us</p>
    <v-btn v-for="icon in icons" :key="icon" class="mx-4 ml-n2 mt-2" light icon color="#fff">
      <v-icon size="24px">mdi {{ icon }}</v-icon>
    </v-btn>

  </div>
  <div>
    <h5>Categories</h5>
    <p>Organisation</p>
    <p>Personal</p>
  </div>
  <div style="width: 30%">
    <h5>Install App</h5>
    <div style="display: flex; flex-direction: column">
      <div class="downloadIcon">
    <img src="../../assets/appstore.svg"/>
      </div>
      <div>
    <img src="../../assets/googleplay.svg"/>
      </div>
    </div>


  </div>
</div>
</template>

<script>
export default {
name: "LandingFooter",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram", "mdi-youtube"]
  })
}
</script>

<style scoped lang="scss">
.landing-footer{
  padding: 4rem;
  background:  linear-gradient(97.5deg, #8742A7 44.18%, rgba(141, 52, 183, 0) 128.1%);
  color: #D9DBE1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 790px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 4rem 2rem;
  }

}
p{
  font-size: 16px;

}
h5{
  font-size: 20px;
  margin-bottom: 1rem;
}
.downloadIcon{
  margin-bottom: 1rem;
}


</style>