<template>
  <div>
    <apex-chart :options="options" :series="data"/>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "ClaimsDoughnutChart",
  components: {ApexChart: VueApexCharts},
  data: () => ({
    options: {
      chart: {
        type: 'donut'
      },
      labels: ['Health Insurance', 'Device Insurance', 'Car Insurance'],
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '45%'
          }
        }
      },
      legend: {
        position: 'bottom',
        fontSize: 16,
        markers: {
          radius: 2,
        }
      }
    },
    data: [44, 15, 55]
  })
}
</script>

<style scoped>

</style>