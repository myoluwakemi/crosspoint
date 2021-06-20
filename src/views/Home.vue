<template>
  <div>
    <LandingHeaderBanner/>
    <SecondLandPageContent/>
    <ThirdLandingPageContent/>
    <OfferContent/>
    <Steps/>
    <landing-page-form/>
    <LandingFooter/>
  </div>
</template>

<script>

import LandingHeaderBanner from "@/components/onBoarding/LandingHeaderBanner";
import SecondLandPageContent from "@/components/onBoarding/SecondLandPageContent";
import ThirdLandingPageContent from "@/components/onBoarding/ThirdLandingPageContent";
import OfferContent from "@/components/onBoarding/OfferContent";
import Steps from "@/components/Steps";
import LandingPageForm from "@/components/landingPageForm";
import LandingFooter from "@/components/onBoarding/LandingFooter";

export default {
  Name: 'Home',
  components: {
    LandingHeaderBanner,
    SecondLandPageContent,
    ThirdLandingPageContent,
    OfferContent,
    LandingFooter,
    LandingPageForm,
    Steps,
  }
  //
}
</script>


}
<style lang="scss" scoped>


</style>