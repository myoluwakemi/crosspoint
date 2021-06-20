<template>
  <div>
    <dashboard-top/>
    <recent-activities-table/>
  </div>
</template>

<script>
import DashboardTop from "@/components/dashboard/DashboardTop";
import RecentActivitiesTable from "@/components/dashboard/RecentActivitiesTable";

export default {
name: "Dashboard",
  components: {RecentActivitiesTable, DashboardTop}
}
</script>

<style scoped lang="scss">

</style>