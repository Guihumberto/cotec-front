<template>
    <v-chip-group multiple>
        <v-chip color="primary" v-show="tags.priority" >{{tags.priority}}</v-chip>
        <v-chip
          color="cyan"
          label
          text-color="white"
          v-show="tags.profisco"
        >
          <v-icon left>
            mdi-arrow-up
          </v-icon>
          Profisco
        </v-chip>
        <v-chip v-show="tags.sector">{{tags.sector}}</v-chip>
        <v-chip color="error lighten-1" v-show="tags.status == 1">Não Iniciado</v-chip>
        <v-chip color="warning lighten-1" v-show="tags.status == 2">Em andamento</v-chip>
        <v-chip color="success lighten-1" v-show="tags.status == 3">Concluído</v-chip>
        <v-chip color="cyan lighten-1" v-show="tags.status == 2">{{tags.execution}}%</v-chip>
        <v-chip v-show="tags.type == 1" >Sistema</v-chip>
        <v-chip v-show="tags.type == 2" >Infra</v-chip>
      </v-chip-group>
</template>

<script>
export default {
  props:{
    tags: Object
  }
}
</script>