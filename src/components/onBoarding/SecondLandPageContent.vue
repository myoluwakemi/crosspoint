<template>
  <div class="second_home_content">
    <div class="imd-div">
      <img src="../../assets/secondcontent.svg"/>
    </div>
    <div  class="secondContentText">
      <h1 >Insurance designed to give<br/> you peace of mind</h1>
      <p>Go about your day to day activities knowing that Cross Point<br/> has got you covered.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondLandPageContent"
}
</script>

<style scoped lang="scss">
.second_home_content {
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  padding: 0 12rem;
  .secondContentText {
    padding-top: 2rem;
    @media (max-width: 798px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      margin-top: 2rem;
    }
  }
  .imd-div {
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: 36px;
    color: #202020;
    @media (max-width: 789px) {
      font-size: 28px;

    }
  }
  p {
    font-size: 18px;
    color:#7B7B7B;
  }
  @media (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media (max-width: 789px) {
    flex-direction: column;
    padding: 0 4rem;
  }
  @media(max-width: 350px){
    padding: 0 2rem
  }
}

</style>