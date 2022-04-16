<template>
<div class="my-5">
  <span class="Heading 6"> <span class="verticalTag"></span> Lista de Priotidades - PDTI</span>
  <v-data-table
    :headers="headers"
    :items="projects"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.priority="{ item }">
      <v-chip
        :color="getColor(item.priority)"
        dark small
      >
        {{ item.priority }}
      </v-chip>
    </template>
    <template v-slot:item.profisco="{ item }">
      <v-chip
        :color="getColorProfisco(item.profisco)"
        dark small
      >
        {{ item.profisco ? 'Sim' : 'Não' }}
      </v-chip>
    </template>
    <template v-slot:item.status="{ item }">
        {{ status(item.status) }}
    </template>
    <template v-slot:item.type="{ item }">
      {{ item.type == 1 ? 'Sistema' : 'Infra' }}
    </template>
  </v-data-table>
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
            class:'indigo darken-4 white--text'
          },
          { text: 'Profisco', value: 'profisco', align: 'center', class:'indigo darken-4 white--text'},
          { text: 'Proridades', value: 'priority', align: 'center', class:'indigo darken-4 white--text'},
          { text: 'Lider', value: 'lider', class:'indigo darken-4 white--text'},
          { text: 'Colíder', value: 'colider', class:'indigo darken-4 white--text'},
          { text: 'Tipo', value: 'type', align: 'center', class:'indigo darken-4 white--text'},
          { text: 'Status', value: 'status', align: 'center', class:'indigo darken-4 white--text'},
          { text: 'Execução', value: 'execution', align: 'center', class:'indigo darken-4 white--text'},
        ],
      }
    },
    props:{
      projects: Array
    },
    methods: {
      getColor (x) {
        if (x == '3+') return 'red'
        else if (x == '3') return 'orange'
        else return 'green'
      },
      getColorProfisco (x) {
        return x 
        ? 'green'
        : 'red'
      },
      status(x){
        switch(x){
          case 1:
            return 'Não Iniciado'
            break;
          case 2:
            return 'Em andamento'
            break;
          case 3:
            return 'Concluído'
            break;
          case 99:
            return 'Paralisado'
            break;
          default:
            return 'nao encontrado'
        }

       
      }
    },
  }
</script>

