<template>
  <v-container style="max-width: 700px;">
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 mb-6">Atualização de Status</v-card-title>
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
          <v-radio-group row v-model="project.execution" class="mt-0">
              <v-radio
              v-for="n in execution"
              :key="n"
              :label="`${n}%`"
              :value="n"
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
    <h2 class="headline ligheten-1">Atualização do Projeto - {{project.name}}</h2>
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
        <v-card flat outlined max-width="600">
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
            <v-text-field
              v-model="title"
              hide-details
              flat
              label="Título da atualização"
              dense
              outlined
              @keydown.enter="comment"
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
              @keydown.enter="comment"
            >
            </v-text-field>
            <v-card-actions>
              <v-btn 
                color="primary"
                depressed
                @click="comment"
                block
                class="mx-n2"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card-text>
          <v-alert
              v-else
            border="top"
            colored-border
            type="info" 
          >Faça login para inserir dados de atualização do Projeto.
          </v-alert>
        </v-card>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col
              cols="6"
            > <span style="text-transform: uppercase" >{{event.title}}</span> - {{event.text}} </v-col>
            <v-col
              class="text-right"
              cols="4"
            > <small>Data/Hora</small> <br> <small>
            {{dateMoment(event.time)}}</small>
            </v-col>
            <v-col  cols="2" class="text-right" v-if="userLogin">
              <forms-confirmation :id="event" @action="deleteUpdate($event)" />
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span> {{timeline[0] ? 'Últimas Atualizações' : 'Não há atualizações inseridas neste projeto'}}</span>
      </v-timeline-item>
      
    </v-timeline>
  </v-container>
</template>

<script>
  const shortid = require('shortid');
  import {mapActions} from 'vuex'
  import moment from 'moment'

  export default {
    data: () => ({
      dialog: false,
      status: [
        {value: 1, name: 'Não Iniciado'},
        {value: 2, name: 'em andamento'},
        {value: 3, name: 'Concluído'},
        {value: 4, name: 'Paralisado'},
      ],
      execution: [20, 40, 60, 80, 100],
      events: [],
      title: null,
      text: null,
      nonce: 0
    }),

    props:{
      project:true
    },

    computed: {
      timeline () {
        return this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).slice().reverse()
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
      ...mapActions(['deleteUpdate', 'addUpdate', 'editProject']),
      comment () {
        const time = new Date()
        let event = {
          id: shortid.generate(),
          title: this.title,
          idProject: this.idProject,
          IdUser: 1,
          text: this.text,
          time: Date.now()
        }
        this.events.push(event)
        this.addUpdate(event)
        this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})

        this.text = null
        this.title = null
      },
      updateStatus(){
        if(!!this.status && !!this.execution){
          this.editProject(this.project)
          this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização de Status realizada com sucesso', color:'primary', timeout:'3000'})
        }
        this.dialog = false
        
      },
      dateMoment(date){
      moment.locale('pt-br')
      const dateM = moment(date).format('lll')
      return dateM
      },
    },
  }
</script>