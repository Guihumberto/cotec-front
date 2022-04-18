<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          dark
          v-bind="attrs"
          v-on="on"
          icon
          small
        >
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 mb-2">
          Confirmação
        </v-card-title>
        <v-card-text>Deseja realmente apagar o projeto <strong style="text-transform: uppercase;">{{id.name}}</strong>? <br><small>Esta ação não poderá ser desfeita</small> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="error darken-1"
            text
            @click="$emit('action', id.id)"
            outlined
          >
            excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog: false
        }
    },
    props:{
        id: Object
    },
}
</script>