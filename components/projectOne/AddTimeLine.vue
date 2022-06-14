<template>
    <v-dialog v-model="taskDialog" max-width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
            @click="taskDialog = true"
            v-bind="attrs"
            v-on="on"
            title="Inserir cronograma."
            icon elevation="0"> <v-icon>mdi-calendar-month</v-icon></v-btn>
        </template>
        <v-card>
            <v-form @submit.prevent="addAdtionalUpdateTask()" ref="form">
                <v-card-title class="text--white text-h5 deep-orange lighten-2 mb-6">Inserir cronograma
                <v-spacer></v-spacer>
                <v-btn dark icon @click="taskDialog = false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text class="mb-n6">
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
                <div v-if="!projectTask.status">
                  <v-dialog
                    ref="refDateDialogStart"
                    :return-value.sync="taskDirection.dateStart"
                    v-model="showDateDialogStart"
                    persistent
                    width="290"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="Data Início"
                        outlined
                        prepend-inner-icon="mdi-calendar"
                        type="text"
                        dense
                        readonly
                        v-on="on"
                        :value="formatDateStart"
                        :rules="[rules.required]"
                    ></v-text-field>
                    </template>
                  
                    <v-date-picker
                      locale="pt-br"
                      scrollable
                      v-model="dateValue"
                    >
                      <v-spacer></v-spacer>
                      <v-btn outlined color="primary" small @click="cancelDateDialogStart()">Cancelar</v-btn>
                      <v-btn color="primary" small @click="$refs.refDateDialogStart.save(dateValue)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <v-dialog
                    ref="refDateDialog"
                    :return-value.sync="taskDirection.dateLimit"
                    v-model="showDateDialog"
                    persistent
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
                        :rules="[rules.required, rules.dateLessStart]"
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
                </div>

                
                <!-- justificativa -->
                <v-textarea
                    label="Justificativa"
                    outlined
                    v-model="taskDirection.justify"
                    dense
                    v-if="false"
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
    import moment from 'moment'
    export default {
        data(){
          return{
            taskDialog: false,
            showDateDialog: false,
            showDateDialogStart: false,
            dateValue: moment().format('YYYY-MM-DD'),
            taskDirection:{
              status: null,
              dateStart: moment().format('YYYY-MM-DD'),
              dateLimit: moment().format('YYYY-MM-DD'),
              justify: null
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
              this.taskDirection.id = this.projectTask.id
              this.taskDirection.IdUser = 1
              this.taskDirection.dateTimeLine = Date.now()

              this.$emit('addTimeline', this.taskDirection)

              this.taskDialog = false
              this.taskDirection = {
                status: null,
                dateStart: this.dateValue,
                dateLimit: this.dateValue,
                justify: null
              }
            }
          },
          cancelDateDialogStart(){
            this.showDateDialogStart = false
            this.dateValue = this.taskDirection.dateStart

          },
          cancelDateDialog(){
            this.showDateDialog = false
            this.dateValue = this.taskDirection.dateLimit

          }
        },
        computed:{
          formatDateStart(){
            return moment(this.taskDirection.dateStart).format('DD/MM/YYYY') // 25/04/2019
          },
          formatDate(){
            return moment(this.taskDirection.dateLimit).format('DD/MM/YYYY') // 25/04/2019
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>