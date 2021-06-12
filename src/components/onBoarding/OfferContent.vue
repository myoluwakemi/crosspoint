<template>
  <div class="insuranceOffer">
    <h1 style="text-align: center">Insuring Africa</h1>
    <p style="text-align: center">We are leveraging mobile technology to fight low insurance penetration in Africa and other emerging<br/>
      markets by simplifying access for underserved markets and communities</p>
    <div class="cards">
    <div class="card" v-for="(offer, i) in offers" :key="i">
      <div class="icon-div">
        <img :src="offer.icon"/>
      </div>
      <h4 class="type">{{ offer.type}}</h4>
      <p class="offer-info">{{ offer.info }}</p>
      <v-btn height="46px" style="background-color: #7D17AD; color: white">{{offer.btnText}}</v-btn>

    </div>
    </div>
  </div>

</template>

<script>
import HealthIcon from "../../assets/healthIcon.svg"
import DeviceIcon from "../../assets/device.svg"
import Vehicle from "../../assets/vehicleIcon.svg"
export default {
name: "OfferContent",
  data: ()=>{
  return {
    offers: [
      {
        icon: HealthIcon,
        type: "Health Insurance",
        info: "Plans provide cover for medical expenses, accidents, disability and other risks for you and your loved ones",
        btnText: "Get quote Now"
      },
      {
        icon: Vehicle,
        type: "Vehicle Insurance",
        info: "Plans that cover all types of automobile related risks for private and commercial use\n" +
            "cases.\n",
        btnText: "Get quote Now"
      },
      {
        icon: DeviceIcon,
        type: "Device Insurance",
        info: "Plans cover device, equipment and work tools from loss and damage.",
        btnText: "Get quote Now"
      }
    ]
  }
  }
}
</script>

<style scoped lang="scss">
.insuranceOffer{
  padding-top: 2rem;
  background-color: #fafafa;
}
.cards{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  @media (max-width: 1541px) {
    justify-content: center;
    flex-direction: column;
    padding: 2rem 2rem;
  }
  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
@media (max-width: 1541px) {
  margin-bottom: 1.5rem;
}
  @media (max-width: 790px) {
    width: 370px;
    margin-bottom: 1.5rem;

  }

;
}
.offer-info{
  color: #7B7B7B;
  font-size: 18px;

}
.card:nth-child(2){
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1.4rem;
  @media (max-width: 790px){
    box-shadow: none;
  }


}
.type{
  font-size: 24px;
  color: #202020;
  padding: 1rem 0;

}

</style>