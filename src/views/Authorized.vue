<template>
  <div>
    <side-navigation/>
    <div class="dashboard__main px-4 px-md-16">
      <dashboard-header/>
      <div class="dashboard__content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavigation from "@/components/dashboard/sideNavigation/SideNavigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default {
  name: "Authorized",
  components: {SideNavigation, DashboardHeader}
}
</script>

<style scoped lang="scss">
.dashboard__main {
  width: 100%;
  margin-left: auto;
  //padding: 10px 25px;
  background: #E5E5E5;
  min-height: 100vh;

  @media (min-width: 600px) {
    width: calc(100vw - 256px);
  }

  .dashboard__content {
    padding-top: 90px;

    @media (min-width: 600px) {
      padding-top: 0;
    }
  }
}
</style>