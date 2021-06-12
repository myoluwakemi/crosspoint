<template>
<div class="landingForm">
  <h1>Step into a free future</h1>
  <form>
    <v-btn height="inherit" style="background-color: white; color: #7D17AD">
      Get Started
    </v-btn>
    <input placeholder="Enter Phone/Email" class="input_field"/>
      <v-btn height="inherit" style="background: #ffffff">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.91245 9.9998H3.00045L1.02345 2.1348C1.01079 2.0891 1.00308 2.04216 1.00045 1.9948C0.978447 1.2738 1.77245 0.773804 2.46045 1.1038L21.0004 9.9998L2.46045 18.8958C1.78045 19.2228 0.996447 18.7368 1.00045 18.0288C1.00247 17.9655 1.01359 17.9029 1.03345 17.8428L2.50045 12.9998" stroke="#7D17AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </v-btn>
   
  </form>
</div>
</template>

<script>
export default {
name: "landingPageForm"
}
</script>

<style scoped lang="scss">
.landingForm{
  background-color: #7D17AD;
  color: #ffffff;
  padding: 3rem 0;
  h1{
    text-align: center;
    font-weight: 600;
    font-size: 48px;
    @media (max-width: 789px) {
      font-size: 28px;
    }
  }
}
form {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 2rem auto;
  background: #F2F2F2;
  border-radius: 4px;
  height: 70px;

@media (max-width: 780px) {
  width: 90%;


}
}
.input_field{
  box-sizing: border-box;
  width: 50%;
  padding: 0.5rem 0.2rem;
  outline: none;
  text-indent: 4px;
}
</style>