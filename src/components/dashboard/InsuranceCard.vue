<template>
  <v-card :elevation="0" color="white" height="260" class="pa-6">
    <div class="d-flex flex-column justify-space-between fill-height">
      <div>
        <div class="d-flex flex-wrap align-center pt-2 pb-6">
          <div class="insurance__img d-flex justify-center align-center pa-1 mr-3">
            <v-img width="40" :src="insurance.image"/>
          </div>
          <h4 class="flex-grow-1 insurance__title">{{insurance.title}}</h4>
          <div class="insurance__status d-flex align-center">
            <div class="small__circle mr-1" :class="[{'green': insurance.active}]"/>
            <span :class="[{'text--green': insurance.active}]">{{insurance.active ? 'Active' : 'Inactive'}}</span>
          </div>
        </div>
        <span class="insurance__item">{{insurance.item}}</span>
      </div>
      <div class="insurance__company_and_time_left d-flex flex-wrap justify-space-between align-center">
        <div class="insurance_company d-flex align-center">
          <v-img max-width="100" max-height="30" class="mr-1" :src="insurance.company_logo"/>
          <span>{{insurance.type}}</span>
        </div>
        <div class="days_left d-flex">
          <div v-for="(day, i) in insurance.days" :key="i" class="day d-flex justify-center align-center mr-1">
            <span>{{day}}</span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "InsuranceCard",
  data: () => ({
  //
  }),
  props: {
    insurance: Object
  }
}
</script>

<style scoped lang="scss">
.insurance__img {
  height: 42px;
  width: 42px;
  background: #F2F2F2;
  border-radius: 8px;
}

.insurance__title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
}

.small__circle {
  width: 12px;
  height: 12px;
  background-color: #828282;
  border-radius: 50%;

  &.green {
    background-color: #27AE60;
  }
}

.text--green {
  color: #27AE60 !important;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.v-card {
  border-radius: 20px !important;
}

.day {
  border-radius: 5px;
  height: 35px;
  width: 35px;
  border: 2px solid #F2F2F2;
}

.insurance__item {
  font-weight: bold;
  color: #828282;
}
</style>