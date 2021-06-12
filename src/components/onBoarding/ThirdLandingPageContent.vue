<template>
  <div class="thirdContent">
    <div class="text">
      <h1>How it works</h1>
      <p style="color:#7B7B7B;">Our simplified video gives a detailed insight as to <br/> how crosspoint works</p>
    </div>
    <div class="videoContent">
      <img src="../../assets/groupVideo.svg">
    </div>
  </div>

</template>

<script>
export default {
name: "ThirdLandingPageContent"
}
</script>



<style scoped lang="scss">
.thirdContent {
  display: flex;
  justify-content: space-between;
  padding: 0 12rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  @media (max-width: 789px) {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  .videoContent {
    margin-left: 5rem;
    img {
      width: 100%;
    }
    @media (max-width: 789px) {
     margin-left: 0;
    }
  }
  h1 {
    font-size: 36px;
    @media (max-width: 789px) {
      font-size: 28px;
    }
  }
  p {
    font-size: 18px;
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
.text{
  margin-left: 4rem;
  @media (max-width: 798px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-left: 0;

  }

}


</style>