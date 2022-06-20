<template>
    <v-dialog v-model="taskDialog" max-width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
            @click="taskDialog = true"
            v-bind="attrs"
            x-small
            v-on="on"
            title="Inserir etapas."
            icon elevation="0"> <v-icon large color="white">mdi-plus</v-icon></v-btn>
        </template>
        <v-card>
            <v-form @submit.prevent="addAdtionalUpdateTask()" ref="form">
                <v-card-title class="text--white text-h5 deep-orange lighten-2 mb-6">Inserir etapas
                <v-spacer></v-spacer>
                <v-btn dark icon @click="taskDialog = false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text class="mb-n6">
                  <v-text-field
                    dense
                    outlined
                    label="Etapa"
                    :rules="[rules.required]"
                    v-model="taskDirection.etapa"
                  ></v-text-field>
                  <v-text-field
                    dense
                    outlined
                    label="Descrição"
                    v-model="taskDirection.description"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-autocomplete
                      outlined dense
                      v-model="taskDirection.status"
                      :items="status"
                      item-value="value"
                      item-text="name"
                      label="Status"
                      placeholder="Selecione..."
                      :rules="[rules.required]"
                      required
                  ></v-autocomplete>
    
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="py-4">
                <v-spacer></v-spacer>
                <v-btn @click="taskDialog = false" small outlined color="orange">Cancelar</v-btn>
                <v-btn type="submit" dark small color="deep-orange lighten-1">Enviar</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
    import moment from 'moment'
    const shortid = require('shortid');
    
    export default {
        data(){
          return{
            taskDialog: false,
            showDateDialog: false,
            showDateDialogStart: false,
            dateValue: moment().format('YYYY-MM-DD'),
            taskDirection:{
              status: null,
              etapa:'',
              description:'',
            },
            rules: {
                required: (value) => !!value || "Campo obrigatório",
                dateLessStart: () =>  moment(this.taskDirection.dateLimit) >=  moment(this.taskDirection.dateStart) || "Data Limie menor que a inicial",
            },
            status: [
                    {value: 1, name: 'Não iniciado'},
                    {value: 2, name: 'em andamento'},
                    {value: 3, name: 'Concluído'},
                    {value: 4, name: 'Paralisado'},
                ],
          }
        },
        props:{
          projectTask:Object
        },
        methods:{
          addAdtionalUpdateTask(){
            if (this.$refs.form.validate()) {
               this.taskDirection.id = shortid.generate(),
              this.taskDirection.idUpdate = this.projectTask.id
              this.taskDirection.IdUser = 1
              this.taskDirection.dateFase = Date.now()

    
              this.$emit('addFase', this.taskDirection)

              this.taskDialog = false
              this.taskDirection = {
                status: null,
                description:'',
                etapa:'',
              }
            }
          },
      
        },
    }
</script>

<style lang="scss" scoped>

</style>