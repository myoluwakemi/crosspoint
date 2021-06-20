<template>
  <div class="banner">
    <v-card elevation="0" style="background-color: #7D17AD; border-radius: 0; height: 100vh; overflow-x: hidden" class="banner-card">
      <LandingHeader/>

      <div class="header-banner d-flex justify-space-between align-center"  :style="[
            !$vuetify.breakpoint.mobile
              ? { marginTop: '50px' }
              : { marginTop: '40px' }
          ]">
        <div class="pt-3"
             :style="[
            !$vuetify.breakpoint.mobile
              ? { marginLeft: '200px', width: '40%' }
              : { paddingLeft: '80px' , marginTop: '5rem', width: '90%' }
          ]"


        >
          <h1 style="margin-bottom: 1.5rem"    :style="[
              !$vuetify.breakpoint.mobile
                ? { fontSize: '48px'  }
                : { fontSize: '32px' }
            ]">
            Simplified Insurance for Everyday People
          </h1>
          <p style="margin-bottom: 2rem">Crosspoint helps simplify insurance delivery for the everyday user. Comparing plans or customising your
            own plan take a few simple steps.</p>
          <v-btn
              @click="openGetStarted"
              depressed
              large
              color="#fff"
              class="get-started-btn-text get-started-btn pa-3"
              style="margin-top: 2rem"
          >
            Get Started
          </v-btn>


        </div>
        <div class="banner-img">
          <img src="../../assets/banner_image.svg">
        </div>
      </div>
    </v-card>
    <ModalRoot/>
  </div>

</template>

<script>
import LandingHeader from "@/components/onBoarding/LandingHeader";
import {ModalBus} from "@/eventBus";
import ModalRoot from "@/components/ModalRoot";
import BeforeRegister from "@/views/BeforeRegister";


export default {
name: "LandingHeaderBanner",
  components: {ModalRoot, LandingHeader},
  methods: {
  openGetStarted(){
    ModalBus.$emit("open",{
      component: BeforeRegister,  modalWidth: "70rem"
    })
  }
  }
}
</script>

<style scoped lang="scss">
.banner{
  position: relative;
}
.banner-card{
  position: relative;
  overflow-y: hidden;
  background-image: url("../../assets/whiteSlope.svg");
  background-size: 99.99%;
  background-position: bottom right;
  background-repeat: no-repeat;
  @media (max-width: 790px) {
    background: none;
  }
}

/*.banner-card:after{*/
/*  background-image: url("../../assets/whiteSlope.svg");*/
/*  background-size: contain;*/
/* content: " ";*/
/*  position: absolute;*/
/* z-index: 0;*/
/*  top: 60%;*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  object-fit: contain;*/
/*}*/

.header-banner{
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 790px) {
    flex-direction: column;

  }


}
.banner-img{
  z-index: 3;
  @media (max-width: 790px) {
    background: white;
  }
  @media (max-width: 560px) {
    height: 700px;
    img{
      width: 100%;
    }
  }

}
.get-started-btn {
  margin-top: 39px !important;
  /*background: rgba(248, 248, 248, 0.2);*/
  border: 1px solid #ffffff !important;
  box-sizing: border-box;
  border-radius: 4px !important;
  margin-bottom: 80px;
}
.get-started-btn-text {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #7D17AD;
  text-transform: capitalize;
}



</style>