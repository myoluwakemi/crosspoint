<template>
  <v-card class="recent_activities_table mt-16 px-5" flat>
    <v-card-title>Recent Activities</v-card-title>
    <v-data-table
        :headers="headers"
        hide-default-footer
        :items="items"
        disable-sort
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "RecentActivitiesTable",
  data: () => ({
    headers: [
      {
        text: 'Activity',
        value: 'activity'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Company',
        value: 'company'
      },
      {
        text: 'Amount',
        value: 'amount'
      }
    ]
  }),
  props: {
    items: Array
  }
}
</script>

<style scoped lang="scss">
.recent_activities_table {
  height: calc(100vh - 707px) !important;
  overflow-y: auto;
}
</style>