<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="button.color"
          dark
          v-bind="attrs"
          v-on="on"
          text
        >
          {{button.text}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <span :class="typeDocument ? 'black--text' : 'red--text'">{{button.text}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
   
              <v-col
                cols="12"
              >
                <v-textarea outlined label="Informações"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*Todos os campos são obrigatórios</small>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    export default {
        data(){
          return{
            dialog: false
          }
        },
        props:{
            typeDocument: Boolean
        },
        computed:{
            button(){
                return this.typeDocument 
                ? {text:'Solicitar Informações', color:'primary'}
                : {text:'Informar Erro', color:'error'}
            }
        }
    }
</script>