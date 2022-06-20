<template>
  <v-container style="max-width: 700px;">
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 mb-6">Atualização de Status
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text class="mb-n6">
          <v-select
            outlined
            dense
            label="Status"
            class="mb-n1"
            :items="status"
            item-value="value"
            item-text="name"
            v-model="project.status"
          >
          </v-select>
          <v-radio-group v-model="project.execution" class="mt-0">
              <v-radio
              v-for="(n, index) in execution"
              :key="index"
              :label="n.name"
              :value="n.value"
              ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="py-4">
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" small outlined color="orange">Cancelar</v-btn>
          <v-btn @click="updateStatus" dark small color="orange lighten-1">Atualizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-card color="transparent" flat>
    <v-card-title
      class="blue-grey white--text"
    >
      <span class="text-h6">Atualização do Projeto - {{project.name}}</span>
    </v-card-title>
    <v-card-text>
    <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        :fill-dot="userLogin"
        class="white--text mb-12"
        :color="userLogin ? 'orange': 'grey'"
        large
      >
        <template v-slot:icon>
          <span v-if="userLogin">{{userInfo.email.substr(0,1).toUpperCase()}}</span>
        </template>
        <v-card flat outlined max-width="600" v-if="!project.statusFinalizar == 1">
          <v-card-text v-if="userLogin">
            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    @click="dialog = true"
                    v-bind="attrs"
                    v-on="on"
                    outlined color="orange" elevation="0" class="mr-n2" small>STATUS <v-icon class="ml-2">mdi-swap-horizontal-bold</v-icon></v-btn>
                </template>
                  <span>Atualização de status e execução</span>
                </v-tooltip>
            </v-card-actions>
            <v-form @submit.prevent="comment" ref="form"> <!--inserir atualização do Projeto-->
              <v-text-field
                v-model="title"
                hide-details
                flat
                label="Título da atualização"
                dense
                outlined
                @keydown.enter="comment"
                :rules="[rules.required, rules.min]"
              >
              </v-text-field>
              <v-text-field
                v-model="text"
                hide-details
                flat
                label="Insira o texto da atualização do projeto..."
                outlined dense
                required
                class="my-2"
                :rules="[rules.required, rules.min]"
                @keydown.enter="comment"
              >
              </v-text-field>
              <v-switch v-model="task" label="Tarefa" color="success" class="my-n1"></v-switch>
              <v-card-actions>
                <v-btn 
                  color="primary"
                  depressed
                  type="submit"
                  block
                  class="mx-n2"
                >
                  Enviar
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
          <v-alert
            v-else
            border="top"
            colored-border
            type="info" 
          >Faça login para inserir dados de atualização do Projeto.
          </v-alert>
        </v-card>
        <v-card v-else>
          <v-alert dense
            
            type="success">
            Projeto Finalizado
          </v-alert>
        </v-card>
        <v-checkbox
          v-model="justTask"
          label="Ocultar atualizações automáticas"
          class="mt-1 mb-n6"
        ></v-checkbox>   
      </v-timeline-item>
      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          :color="taskColor(event.task)"
          
        >
          <v-card :color="taskColor(event.task)">
            <v-card-text>
              <v-row justify="space-between">
                <v-col
                  cols="8"
                > 
                <v-icon 
                  title="Tarefa"
                  color="white" small v-if="event.task == 3">mdi-checkbox-marked-circle-plus-outline</v-icon>
                <span style="text-transform: uppercase" >{{event.title}}</span> - {{event.text}} </v-col>
                <v-col
                  class="text-right"
                  cols="4"
                > <small> <v-icon x-small>mdi-clipboard-text-clock-outline</v-icon> Data/Hora</small> <br> <small>
                {{dateMoment(event.time)}}</small>
                </v-col>
                <v-col v-show="false" cols="2" class="text-right" v-if="userLogin">
                  <forms-confirmation :id="event" @action="deleteUpdate($event)" />
                </v-col>
              </v-row>
            </v-card-text>
            <!-- inserir tarefas -->
            <v-card-actions v-if="event.task == 3">
                <div v-show="event.idResponse">
                  <span>Responsável: {{event.idResponse}}</span>
                  <span class="ml-2">Data Limite: {{event.dateLimit}}</span>
                </div>
                <v-spacer></v-spacer>
                <projectOne-addTask :projectTask="event" @addTask="addTaskSave($event)" />
            </v-card-actions>
            <!-- inserir Cronograma -->
            <v-card-actions v-if="event.task != 99 && event.task != 3">
              <v-spacer></v-spacer>
              <projectOne-addTimeLine :projectTask="event" @addTimeline="addTimelineSave($event)" />
            </v-card-actions>
             <!-- Cronograma -->
            <v-alert
                :value="true"
                color="secondary lighten-2"
                class="caption white--text"      
                dense   
                v-if="event.status"
            >
              <v-row>
                <v-col cols="12" sm="1"><v-btn @click="event.faseDetail = !event.faseDetail" x-small icon><v-icon color="white" v-text="event.faseDetail ? 'mdi-close':'mdi-information'"></v-icon></v-btn></v-col>
                <v-col cols="12" sm="3">Início: <span class="font-italic">{{dateFormat(event.dateStart)}}</span></v-col>
                <v-col cols="12" sm="3">Fim: <span class="font-italic">{{dateFormat(event.dateLimit)}}</span></v-col>
                <v-col cols="12" sm="4">Status: <v-chip x-small :color="statusColor(event.status)"> {{statusName(event.status)}}</v-chip></v-col>
                <v-col cols="12" sm="1"> <projectOne-addFase :projectTask="event" @addFase="addFaseSave($event), event.faseDetail = true" /></v-col>
              </v-row>
            </v-alert>
            <!-- Subgrupos FASE -->
            <v-slide-y-transition>
              <div v-show="event.faseDetail"> 
                <projectOne-faseList :event="event"/>
              </div>
            </v-slide-y-transition>
            <!-- FIM Subgrupos FASE -->
          </v-card>
         
        </v-timeline-item>
      </v-slide-x-transition>
      
      <v-timeline-item hide-dot="false">
        <v-btn v-if="timelineLength > 5" @click="showAll = !showAll"  text :color="btnTxt.color" block>{{btnTxt.text}}</v-btn>
      </v-timeline-item>

      <v-timeline-item
        class="mb-6"
        hide-dot
        v-show="false"
      >
        <span> {{timeline[0] ? 'Últimas Atualizações' : 'Não há atualizações inseridas neste projeto'}}</span>
      </v-timeline-item>
      
    </v-timeline>
    </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  const shortid = require('shortid');
  import {mapActions} from 'vuex'
  import moment from 'moment'

  export default {
    data: () => ({
      dialog: false,
      justTask: false,
      showAll: false,
      status: [
        {value: 1, name: 'Não Iniciado'},
        {value: 2, name: 'em andamento'},
        {value: 3, name: 'Concluído'},
        {value: 4, name: 'Paralisado'},
      ],
      execution: [
                    {value: 0, name: '0% - NÃO INICIADA'},
                    {value: 1, name: '1% a 10% - ESTUDOS INICIAIS'},
                    {value: 2, name: '11% a 30% - TERMO DE REFERÊNCIA/CONTRATAÇÃO'},
                    {value: 3, name: '31% a 50% - EXECUÇÃO INICIAL'},
                    {value: 4, name: '51% a 75% - EXECUÇÃO AVANÇADA'},
                    {value: 5, name: '76% a 99% - ELABORAÇÃO CONCLUÍDA'},
                    {value: 6, name: '100% - IMPLANTADA E EM PRODUÇÃO'},
      ],
      events: [],
      title: null,
      text: null,
      task: false,
      nonce: 0,
      rules: {
          required: (value) => !!value || "Campo obrigatório",
          min: (v) => (v||'').length >= 4 || "Mínimo 8 caracteres",
      },
    }),

    props:{
      project:true
    },

    computed: {
      timeline () {
        if(this.justTask){
          return this.showAll
          ? this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject && x.task != 99).sort(this.order).reverse()
          : this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject && x.task != 99).sort(this.order).reverse().slice(0, 5)
    
        } else {
         return this.showAll
         ? this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).sort(this.order).reverse()
         : this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).sort(this.order).reverse().slice(0, 5)
        }
      },
      timelineLength(){
        return this.justTask
         ? this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject && x.task != 99).length
         : this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).length
      },
      btnTxt(){
          return this.showAll
          ? {color:'error', text:'Ocultar'}
          : {color:'primary', text:'Mostrar tudo...'}
      },
      idProject(){
        return this.$route.query.id
      },
      userLogin(){
        return this.$store.getters.readUser
      },
      userLogin(){
        return this.$store.getters.readUser
      },
      userInfo(){
        return this.$store.getters.readUserInfo
      },
      hoje(){
        const hoje = new Date().toLocaleDateString('pt-BR')
        return hoje
      }
    },

    methods: {
      ...mapActions(['deleteUpdate', 'addUpdate', 'editProject', 'addUpdateEdit', 'addFase', 'addFaseEdit']),
      comment () {
        if (this.$refs.form.validate()) {
          const time = new Date()
          let event = {
            id: shortid.generate(),
            title: this.title,
            idProject: this.idProject,
            IdUser: 1,
            text: this.text,
            task: this.task ? 3 : 1,
            faseDetail: false,
            time: Date.now()
          }
          this.events.push(event)
          this.addUpdate(event)
          this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})

          this.text = null
          this.title = null
          this.task = false
        } 
      },
      comment2 () {
          const time = new Date()
          let event = {
            id: shortid.generate(),
            title: this.title,
            idProject: this.idProject,
            IdUser: 1,
            text: this.text,
            task: this.task ? 3 : 99,
            time: Date.now()
          }
          this.events.push(event)
          this.addUpdate(event)
          this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})

          this.text = null
          this.title = null
          this.task = false
      },
      updateStatus(){
        if(!!this.project.status && !!this.project.execution){
          this.editProject(this.project)
          this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização de Status realizada com sucesso', color:'primary', timeout:'3000'})
        }

        this.title = "status atualizado"
        this.text = `Atualização de Status: ${this.statusName(this.project.status)} Execução: ${this.executionName(this.project.execution)}`
        this.comment2()
        this.dialog = false
        this.text = ""
        this.title = ""
        
      },
      addTaskSave(event){
        const x = this.timeline.filter(item => item.id == event.id)
        const y = x[0]
        y.dateLimit = event.dateLimit
        y.dateTask = event.dateTask
        y.idResponse = event.idResponse
        y.response = event.response
        y.textGuide = event.textGuide
        console.log(event);
        this.timeline.map(item => item.id == y.id ? y : item)
        this.addUpdateEdit(event)
        this.$store.dispatch("snackbars/setSnackbars", {text:'Tarefa direcionada com sucesso', color:'primary', timeout:'3000'})
      },
      addTimelineSave(event){
        const x = this.timeline.filter(item => item.id == event.id)
        const y = x[0]
        y.dateLimit = event.dateLimit
        y.dateStart = event.dateStart
        y.status = event.status
        console.log(event);
        this.timeline.map(item => item.id == y.id ? y : item)
        this.addUpdateEdit(event)
        this.$store.dispatch("snackbars/setSnackbars", {text:'Tarefa direcionada com sucesso', color:'primary', timeout:'3000'})
      },
      addFaseSave(event){
        this.addFase(event)
        this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})
      },
      dateMoment(date){
        moment.locale('pt-br')
        const dateM = moment(date).format('lll')
        return dateM
      },
       dateFormat(date){
        moment.locale('pt-br')
        const dateM = moment(date).format('DD/MM/YYYY')
        return dateM
      },
      statusName(value){
                switch (value) {
                    case 0:
                        return "Não Iniciado"
                        break;
                    case 1:
                        return "Não Iniciado"
                        break;
                    case 2:
                        return "Em Andamento"
                        break;
                    case 3:
                        return "Concluído"
                        break;
                    case 4:
                        return "Paralisado"
                        break;
                
                    default:
                        return "-"
                        break;
                }
      },
      statusColor(value){
        switch (value) {
          case 1:
          case 4:
              return 'error';
            break;
          
           case 3:
              return 'success';
            break;
        
          default:
              return 'secondary';
            break;
        }
      },
      executionName(value){
                switch (value) {
                    case 0:
                        return '0% - NÃO INICIADA'
                        break;

                    case 1:
                        return  '1% a 10% - ESTUDOS INICIAIS'
                        break;

                    case 2:
                        return  '11% a 30% - TERMO DE REFERÊNCIA/CONTRATAÇÃO'
                        break;

                    case 3:
                        return  '31% a 50% - EXECUÇÃO INICIAL'
                        break;

                    case 4:
                        return  '51% a 75% - EXECUÇÃO AVANÇADA'
                        break;

                    case 5:
                        return  '76% a 99% - ELABORAÇÃO CONCLUÍDA'
                        break;

                    case 6:
                        return  '100% - IMPLANTADA E EM PRODUÇÃO'
                        break;
                
                    default:
                        return "-"
                        break;
                }
      },
      taskColor(value){
        switch (value) {
          case 1:
              return 'white'
              break;
          case 2:
              return 'error'
              break;
          case 3:
              return 'orange lighten-3'
              break;
          case 99:
              return 'info lighten-3'
              break;
          default:
            return 'white';
            break;
        }
      },
      order(a, b){
                return a.time -b.time
      }
    },
  }
</script>