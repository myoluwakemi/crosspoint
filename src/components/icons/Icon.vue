<template>
  <dashboard-icon v-if="type === 'dashboard'" :active="active"/>
  <notebook-icon v-else-if="type === 'notebook'" :active="active"/>
  <dossier-icon v-else-if="type === 'dossier'" :active="active"/>
  <claim-icon v-else-if="type === 'claim'" :active="active"/>
  <user-icon v-else-if="type === 'user'" :active="active"/>
  <user-help-icon v-else-if="type === 'user_help'" :active="active"/>
  <search-icon v-else-if="type === 'search'"/>
  <pdf-icon v-else-if="type === 'pdf'"/>
  <doc-icon v-else-if="type === 'doc'"/>
</template>

<script>
import DashboardIcon from "@/components/icons/DashboardIcon";
import NotebookIcon from "@/components/icons/NotebookIcon";
import DossierIcon from "@/components/icons/DossierIcon";
import ClaimIcon from "@/components/icons/ClaimIcon";
import UserIcon from "@/components/icons/UserIcon";
import UserHelpIcon from "@/components/icons/UserHelpIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import PdfIcon from "@/components/icons/PdfIcon";
import DocIcon from "@/components/icons/DocIcon";

export default {
  name: "Icon",
  components: {DocIcon, PdfIcon, SearchIcon, UserHelpIcon, UserIcon, ClaimIcon, DossierIcon, NotebookIcon, DashboardIcon},
  props: {
    type: String,
    active: Boolean
  }
}
</script>

<style scoped>

</style>