<template>
    <v-dialog v-model="taskDialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
            @click="taskDialog = true"
            v-bind="attrs"
            v-on="on"
            outlined icon dark elevation="0"> <v-icon>mdi-exclamation-thick</v-icon></v-btn>
        </template>
        <v-card>
            <v-form @submit.prevent="addAdtionalUpdateTask()">
                <v-card-title class="text--white text-h5 deep-orange lighten-2 mb-6">Tarefas
                <v-spacer></v-spacer>
                <v-btn dark icon @click="taskDialog = false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text class="mb-n6">
                <v-autocomplete
                    ref="project.status"
                    outlined dense
                    v-model="taskDirection.response"
                    :items="users"
                    item-value="value"
                    item-text="name"
                    label="Responsável"
                    placeholder="Selecione..."
                    required
                ></v-autocomplete>
                <v-dialog
                  ref="refDateDialog"
                  :return-value.sync="taskDirection.dateLimit"
                  v-model="showDateDialog"
                  lazy
                  persistent
                  full-width
                  width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      label="Data Limite"
                      outlined
                      prepend-inner-icon="mdi-calendar"
                      type="text"
                      dense
                      readonly
                      v-on="on"
                      :value="formatDate"
                  ></v-text-field>
                  </template>
                
                  <v-date-picker
                    locale="pt-br"
                    scrollable
                    v-model="dateValue"
                  >
                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary" small @click="cancelDateDialog()">Cancelar</v-btn>
                    <v-btn color="primary" small @click="$refs.refDateDialog.save(dateValue)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>

                <v-textarea
                    label="Orientações"
                    outlined
                    v-model="taskDirection.text"
                    dense
                ></v-textarea>
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
    import {mapActions} from 'vuex'
    import moment from 'moment'
    export default {
        data(){
          return{
            taskDialog: false,
            showDateDialog: false,
            dateValue: moment().format('YYYY-MM-DD'),
            taskDirection:{
              response: null,
              dateLimit: moment().format('YYYY-MM-DD'),
              text: null
            },
            rules: {
                required: (value) => !!value || "Campo obrigatório",
                min: (v) => (v||'').length >= 4 || "Mínimo 8 caracteres",
            },
            users: [
                    {value: 1, name: 'Maria'},
                    {value: 2, name: 'José'},
                    {value: 3, name: 'João'},
                    {value: 4, name: 'Cicrano'},
                ],
          }
        },
        props:{
          projectTask:Object
        },
        methods:{
          ...mapActions(['addUpdateEdit']),
          addAdtionalUpdateTask(){
            this.taskDirection.id = this.projectTask.id
            this.taskDirection.idResponse = 1
            this.taskDirection.dateTask = Date.now()
            this.addUpdateEdit(this.taskDirection)
            console.log(this.taskDirection)
            this.taskDialog = false
            this.$store.dispatch("snackbars/setSnackbars", {text:'Tarefa direcionada com sucesso', color:'primary', timeout:'3000'})
            this.taskDirection = {
              response: null,
              dateLimit: null,
              text: null
            }
          },
          cancelDateDialog(){
            this.showDateDialog = false
            this.dateValue = this.taskDirection.dateLimit

          }
        },
        computed:{
          formatDate(){
            return moment(this.taskDirection.dateLimit).format('DD/MM/YYYY') // 25/04/2019
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>