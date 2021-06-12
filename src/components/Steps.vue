<template>
  <div class="steps">
    <h1 style="text-align: center;">Insurance In Three Simple Steps</h1>
    <div class="steps-container">
    <div class="step" v-for="(step,  i) in steps " :key="i">
      <h1 class="bold-number">{{step.number}}</h1>
      <div style="text-align: center">
      <div class="icon-div">
        <img :src="step.icon">
      </div>
      <h4>{{step.plan}}</h4>
      <p class="step-info">{{step.info}}</p>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
import Step1 from "../assets/step1.svg"
import Step2 from "../assets/step2.svg"
import Step3 from "../assets/step3.svg"
export default {
name: "Steps",
  data: ()=>{
  return {
    steps: [
      {
        number: "1",
        icon: Step1,
        plan: "Choose a Plan",
        info: "THere is a plan for everyone"

      },
      {
        number: "2",
        icon: Step2,
        plan: "Easy Sign Up",
        info: "Getting personal or business insurance has never been this easy"

      },
      {
        number: "3",
        icon: Step3,
        plan: "Get Covered",
        info: "Live a worry free life knowing we have you covered"


      }
    ]
  }
  }
}
</script>

<style scoped lang="scss">
.steps{
  padding-top: 4rem;
  background-color: #fafafa;
  h1{
    @media (max-width: 790px) {
      font-size: 28px;

    }
  }
}
.steps-container{
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
 @media (max-width: 1541px){
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;


}
}
.step{
  display: flex;
  flex-direction: column;
  max-width: 200px;
  @media (max-width: 1541px) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 790px) {
    width: 370px;
    margin-bottom: 1.5rem;

  }

}

.bold-number{
  font-weight: bold;
  font-size: 48px;
  line-height: 63px;
  color: #7D17AD;


}
.step-info{
  color: #7B7B7B;
  font-size: 18px;
}
h4{

  font-size: 24px;
  color: #7D17AD;
  padding: 1rem 0;
}

</style>