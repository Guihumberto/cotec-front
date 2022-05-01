<template>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Processo',
            align: 'start',
            sortable: false,
            value: 'name',
            class: 'cyan white--text' 
          },
          { text: 'Ano', value: 'calories', class: 'cyan white--text'},
          { text: 'Item 2', value: 'fat', class: 'cyan white--text'},
          { text: 'Item 3', value: 'carbs', class: 'cyan white--text'},
          { text: 'Item 4', value: 'protein', class: 'cyan white--text' },
          { text: 'Execução', value: 'iron', align: 'center', class: 'cyan white--text'},
        ],
        desserts: [
          {
            name: '100/2021',
            calories: 2021,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: '200/2022',
            calories: 2022,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: '200/2021',
            calories: 2021,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: '1001/2022',
            calories: 2022,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: '400/2022',
            calories: 2022,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: '1001/2022',
            calories: 2022,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: '300/2022',
            calories: 2022,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: '400/2001',
            calories: 2001,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: '700/2022',
            calories: 2022,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: '800/2022',
            calories: 2022,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>