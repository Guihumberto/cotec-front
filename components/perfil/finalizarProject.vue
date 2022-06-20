<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined title="Detalhes" color="success" text small v-bind="attrs" v-on="on">Finalizar Projeto</v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 success lighten-2">
          Finalizar Projeto
        </v-card-title>
        <v-form @submit.prevent="submit()" ref="form">
          <v-card-text class="mt-5">
               <v-select
                  outlined
                  dense
                  label="Status"
                  class="mb-n1"
                  :items="status"
                  item-value="value"
                  item-text="name"
                  v-model="finalizar.status"
                  :rules="[rules.required]"
                >
                </v-select>
                <v-expand-transition>
                  <v-textarea
                    v-if="finalizar.status == 2"
                    outlined
                    label="Texto"
                    counter="250"
                    :rules="[rules.required]"
                    v-model="finalizar.textFinal"
                  ></v-textarea>
                </v-expand-transition>  
            </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="success"
              outlined
              type="submit"
            >
              FINALIZAR
            </v-btn>
          </v-card-actions>
          </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    const shortid = require('shortid');

    export default {
        data () {
            return {
                dialog: false,
                finalizar:{
                  status: 0,
                  textFinal: null
                },
                status: [
                    {value: 1, name: 'Concluído'},
                    {value: 2, name: 'Concluído com resssalva'},
                  ],
                rules: {
                  required: (value) => !!value || "Campo obrigatório",
                }
            }
        },
        props:{
          project: Object
        },
        methods:{
          ...mapActions(['editProject', 'addUpdate']),
          submit(){
            if(this.$refs.form.validate()){
              this.project.statusFinalizar = this.finalizar.status
              if(this.finalizar.textFinal) {
                this.project.textFinal = this.finalizar.textFinal
              }
              this.editProject(this.project)
              let event = {
                    id: shortid.generate(),
                    title: "Projeto Finalizado",
                    idProject: this.project.id,
                    IdUser: 1,
                    text: "(mensagem automática)",
                    task: 99,
                    time: Date.now()
                }  
                this.addUpdate(event)
              this.$store.dispatch("snackbars/setSnackbars", {text:'Projeto finalizado com sucesso', color:'primary', timeout:'3000'})
              console.log(this.project);    
            }
          }
        }
    }
</script>

<style scoped>

</style>