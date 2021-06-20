<template>
  <v-row class="pt-16">
    <v-col cols="12" md="6">
      <div class="d-flex align-center justify-space-between">
        <h4 class="h4_title my-3">My Insurances</h4>
        <router-link to="/insurances">View All</router-link>
      </div>
      <v-row>
        <v-col v-for="(insurance, i) in insurances" :key="i" cols="12" md="6">
          <insurance-card :insurance="insurance"/>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <div class="d-flex align-center documents__wrapper justify-space-between mb-4">
        <h6>Documents</h6>
        <router-link to="/insurances">View All</router-link>
      </div>
      <v-row>
        <v-col v-for="(document, i) in documents" :key="i" cols="6" md="4">
          <document :title="document.title"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="3" v-for="(document, i) in insurance_documents" :key="i">
          <div class="d-flex justify-center flex-column align-center">
            <icon :type="document.type"/>
            <div>{{document.title}}</div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import InsuranceCard from "@/components/dashboard/InsuranceCard";
import health_insurance_icon from "@/assets/health_insurance_icon.svg";
import mansard from "@/assets/mansard.svg"
import Icon from "@/components/icons/Icon";
import Document from "@/components/dashboard/Document";

export default {
  name: "DashboardTop",
  components: {Document, Icon, InsuranceCard},
  data: () => ({
    insurances: [
      {
        title: 'Health Insurance',
        image: health_insurance_icon,
        active: true,
        item: 'NHS/2012/063',
        days: '365',
        type: 'EasyCare',
        company_logo: mansard
      },
      {
        title: 'Health Insurance',
        image: health_insurance_icon,
        active: false,
        item: 'NHS/2012/063',
        days: '60',
        type: 'EasyCare',
        company_logo: mansard
      }
    ],
    documents: [
      {
        title: 'Insurance'
      },
      {
          title: 'Payments'
      },
      {
        title: 'Claims'
      },
    ],
    insurance_documents: [
      {
        title: 'Old Mutual',
        type: 'pdf'
      },
      {
        title: 'Policy doc',
        type: 'doc'
      },
      {
        title: 'Old Mutual',
        type: 'pdf'
      },
      {
        title: 'Old Mutual',
        type: 'pdf'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.h4_title {
  font-size: 29px;
  font-weight: bold;
}

.documents__wrapper {
  height: 67px;
}
</style>