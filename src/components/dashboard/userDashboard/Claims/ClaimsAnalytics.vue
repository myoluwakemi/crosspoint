<template>
  <div>
    <h4 class="mt-10 mb-8">Analytics</h4>
    <v-card class="rounded-lg mb-16 pb-10" flat color="rgba(255, 255, 255, .7)">
      <v-card-title>Claim Requests Made</v-card-title>
      <v-divider/>
      <v-row class="mt-6 mb-6">
        <v-col cols="12" md="6">
          <claims-doughnut-chart/>
        </v-col>
        <v-col cols="12" md="6" class="cost_corner">
          <v-card flat>
            <v-card-title class="d-flex justify-space-between align-center">
              <h5>Claim Requests Made Cost</h5>
              <div style="max-width: 100px;">
                <v-select
                    v-model="selected_month"
                    :items="months"
                    append-icon="mdi-chevron-down"
                    color="primary"
                    item-text="text"
                    item-value="month"
                    solo/>
              </div>
            </v-card-title>
            <v-divider/>
            <div v-for="(claim_request, i) in claim_requests" :key="i">
              <v-row>
                <v-col class="d-flex justify-center align-center" cols="6">
                  <div class="pa-3">
                    <span class="insurance__type">{{ claim_request.insurance_type }}</span>
                    <h5>&#8358;{{ claim_request.amount }}</h5>
                  </div>
                </v-col>
                <v-col class="d-flex justify-center align-center change__square" cols="6">
                <span>
                  <v-icon :color="claim_request.change === 'increase' ? 'green' : 'red'">
                    mdi-arrow-{{ `${claim_request.change === 'increase' ? 'up' : 'down'}` }}-bold
                  </v-icon>
                  <span
                      :class="[claim_request.change === 'increase' ? 'green' : 'red']">{{ claim_request.percentage }}%</span>
                </span>
                </v-col>
              </v-row>
              <v-divider v-if="i !== claim_requests.length - 1"/>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card flat class="px-10 py-10">
      <v-row>
        <v-col cols="12" md="4">
          <h4>Claim Requests Made</h4>
        </v-col>
        <v-col cols="12" md="4">
          <div style="max-width: 200px">
            <v-select v-model="selected_date" solo :items="dates" append-icon="mdi-chevron-down" color="primary" outlined/>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <insurance-type-tabs :tabs="insurance_tabs"/>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import ClaimsDoughnutChart from "@/components/dashboard/userDashboard/Claims/ClaimsDoughnutChart";
import InsuranceTypeTabs from "@/components/dashboard/userDashboard/Claims/InsuranceTypeTabs";

export default {
  name: "ClaimsAnalytics",
  components: {InsuranceTypeTabs, ClaimsDoughnutChart},
  data: () => ({
    selected_month: 0,
    selected_date: '13 Oct - 13 Nov',
    months: [
      {
        text: 'Jan',
        month: 0,
      },
      {
        text: 'Feb',
        month: 1
      }
    ],
    dates: ['13 Oct - 13 Nov'],
    claim_requests: [
      {
        insurance_type: 'Health Insurance',
        amount: '56,998',
        percentage: '1.2',
        change: 'increase'
      },
      {
        insurance_type: 'Auto Insurance',
        amount: '46,650',
        percentage: '1.7',
        change: 'decrease'
      }
    ],
    tab_in_view: 'health',
    insurance_tabs: [
      {
        name: 'Vehicle',
      },
      {
        name: 'Health'
      },
      {
        name: 'Car'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.green {
  background: transparent !important;
  color: green !important;
}

.red {
  background: transparent !important;
  color: red !important;
}

.insurance__type {
  font-size: 20px;
  color: rgba(51, 51, 51, 0.75);
  letter-spacing: 1px;

  & + h5 {
    font-size: 32px;

    @media (min-width: 600px) {
      font-size: 48px;
    }
  }
}

.cost_corner {
  border-left: 1px solid #e2e2e2;

  .v-card {
    width: 90%;
    margin: 0 auto;
  }
}
</style>