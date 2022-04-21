<template>
<v-expand-x-transition>
<div class="my-5" v-show="close">
  <div class="d-flex justify-space-between">
    <span class="Heading 6"> <span class="verticalTag"></span> Lista de Priotidades - PDTI</span>
    <span>
      <v-btn small icon @click="minus = !minus"> <v-icon>{{minusMax}}</v-icon> </v-btn>
      <v-btn small icon @click="close = false"> <v-icon>mdi-close-box-outline</v-icon> </v-btn>
    </span>
  </div>

  <v-expand-transition>
  <v-data-table
    :headers="headers"
    :items="projects"
    :items-per-page="5"
    class="elevation-1"
    v-show="minus"
  >
    <template v-slot:item.priority="{ item }">
      <v-chip
        :color="getColor(item.priority)"
        dark small
      >
        {{ item.priority  }}
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
      {{ typeProject(item.type) }}
    </template>
  </v-data-table>
  </v-expand-transition>
</div>
</v-expand-x-transition>
</template>

<script>
  export default {
    data () {
      return {
        minus: true, 
        close: true,
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
          { text: 'Execução (%)', value: 'execution', align: 'center', class:'indigo darken-4 white--text'},
        ],
      }
    },
    props:{
      projects: Array
    },
    computed:{
      minusMax(){
        return this.minus 
        ? 'mdi-minus-box-outline'
        : 'mdi-plus-box-outline'
      }
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
      },
      typeProject(x){
        if( x == 1) { return 'Sistema'}
        if( x == 2) { return 'Infra'}
        if( x == 3) { return 'Outros'}
        
      }
    },
  }
</script>

