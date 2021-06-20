<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        show-select
    >
      <template #item.claim_status="{ item }">
        <span class="status font-weight-bold" :class="[item.claim_status.toLowerCase()]">{{item.claim_status}}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ClaimsTable",
  data: () => ({
    headers: [
      {
        text: 'CLAIM STATUS',
        value: 'claim_status'
      },
      {
        text: 'INSURANCE PLAN',
        value: 'insurance_plan'
      },
      {
        text: 'INSURANCE COMPANY',
        value: 'insurance_company'
      },
      {
        text: 'DATE CREATED',
        value: 'date_created',
      },
      {
        text: 'DATE FINALIZED',
        value: 'date_finalized'
      }
    ],
    items: [
      {
        claim_status: 'Approved',
        insurance_plan: 'Axa Mansard EasyCare',
        insurance_company: 'Axa Mansard',
        date_created: '25/01/2021',
        date_finalized: 'Unfinalized'
      }
    ]
  }),
  methods: {
  //
  }
}
</script>

<style scoped lang="scss">
.approved {
  color: #27AE60;
}

.pending {
  color: #FF7629;
}

.cancelled {
  color: #EB5757
}
</style>