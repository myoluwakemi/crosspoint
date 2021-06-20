<template>
  <div class="mt-5">
    <h4>Plans</h4>
    <v-data-table
        :headers="headers"
        disable-sort
        :items="items"
        hide-default-footer/>
  </div>
</template>

<script>
export default {
  name: "Plans",
  data: () => ({
    headers: [
      {
        text: 'INSURANCE POLICY',
        value: 'insurance_policy'
      },
      {
        text: 'STATUS',
        value: 'status'
      },
      {
        text: 'INSURANCE TYPE',
        value: 'type'
      },
      {
        text: 'DATE STARTED',
        value: 'date_started'
      },
      {
        text: 'VALID THRU',
        value: 'valid_till'
      },
      {
        text: 'COVERAGE',
        value: 'coverage'
      },
      {
        text: 'PAYMENT',
        value: 'payment'
      }
    ],
    items: [
      {
        insurance_policy: 'Axa Mansard EasyCare',
        status: 'Active',
        type: 'Health Insurance',
        date_started: '17/12/2020',
        valid_till: '16/12/2021',
        coverage: 'Individual',
        payment: 'Annual'
      },
      {
        insurance_policy: 'Axa Mansard EasyCare',
        status: 'Active',
        type: 'Health Insurance',
        date_started: '17/12/2020',
        valid_till: '16/12/2021',
        coverage: 'Individual',
        payment: 'Annual'
      },
      {
        insurance_policy: 'Axa Mansard EasyCare',
        status: 'Active',
        type: 'Health Insurance',
        date_started: '17/12/2020',
        valid_till: '16/12/2021',
        coverage: 'Individual',
        payment: 'Annual'
      },
      {
        insurance_policy: 'Axa Mansard EasyCare',
        status: 'Active',
        type: 'Health Insurance',
        date_started: '17/12/2020',
        valid_till: '16/12/2021',
        coverage: 'Individual',
        payment: 'Annual'
      }
    ]
  }),

}
</script>

<style scoped>

</style>