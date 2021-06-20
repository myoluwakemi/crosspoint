<template>
<div>
  <div class="d-flex justify-lg-end justify-start">
    <div class="rounded-pill make_a_claim pl-2" v-ripple>
      <span class="text d-flex align-center">Make A Claim</span>
      <v-card height="40" width="40" class="claim_action rounded-circle d-flex justify-center align-center" flat color="primary">
        <v-icon color="white">mdi-plus</v-icon>
      </v-card>
    </div>
  </div>
  <div class="claim__table mt-16">
    <claims-table/>
  </div>
  <claims-analytics/>
</div>
</template>

<script>
import ClaimsTable from "@/components/dashboard/userDashboard/Claims/ClaimsTable";
import ClaimsAnalytics from "@/components/dashboard/userDashboard/Claims/ClaimsAnalytics";
export default {
name: "Claims",
  components: {ClaimsAnalytics, ClaimsTable}
}
</script>

<style scoped lang="scss">
.make_a_claim {
  position: relative;
  height: 40px;
  background: white;
  min-width: 150px;
  cursor: pointer;
}

.text {
  //width: 100%;
  height: 100%;
  font-size: 15px;
}

.claim_action {
  position: absolute;
  right: 0;
  top: 0;
}
</style>