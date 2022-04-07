<template>
<div class="my-5">
  <span class="Heading 6"> <span class="verticalTag"></span> Lista de Priotidades - PDTI</span>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Projeto',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Profisco', value: 'calories' },
          { text: 'Proridades', value: 'fat' },
          { text: 'Lider', value: 'carbs' },
          { text: 'Colíder', value: 'protein' },
          { text: 'Tipo', value: 'iron' },
          { text: 'Execução', value: 'execution' },
          { text: 'Detalhes', value: 'details' },
        ],
        desserts: [
          {
            name: 'ITIL',
            calories: 'sim',
            fat: '+3',
            carbs: 'Humberto',
            protein: 'João',
            iron: 'Sistema',
            execution: '10%',
            details: 'btn',
          },
          {
            name: 'LGPD',
            calories: 'sim',
            fat: 3,
             carbs: 'Humberto',
            protein: 'João',
            iron: 'Infra'
          },
          {
            name: 'Pucomex',
            calories: 'sim',
            fat: 2,
            carbs: 'Humberto',
            protein: 'João',
            iron: 'Infra',
            details: 'btn',
          },
          {
            name: 'Conta Corrente',
            calories: 'sim',
            fat: 2,
            carbs: 'Humberto',
            protein: 'João',
            iron: 'Infra',
          },
          {
            name: 'Controle de Acesso',
            calories: 'não',
            fat: 1,
            carbs: 'Humberto',
            protein: 'João',
            iron: 'Sistema',
          },
          {
            name: 'Jelly bean',
            calories: 'não',
            fat: 3,
            carbs: 'Humberto',
            protein: 'João',
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: "sim",
            fat: 1,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: "sim",
            fat: 2,
            carbs: 'Humberto',
            protein: 'João',
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: "não",
            fat: 2,
            carbs: 'Humberto',
            protein: 'João',
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 'sim',
            fat: 1,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
