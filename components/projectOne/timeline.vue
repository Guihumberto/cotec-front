<template>
  <v-container style="max-width: 700px;">
    <h2 class="headline ligheten-1">Atualização do Projeto - {{project.name}}</h2>
    <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>JH</span>
        </template>
        <v-card flat outlined max-width="600">
          <v-card-text>
            <v-text-field
              v-model="title"
              hide-details
              flat
              label="Título da atualização"
              dense
              solo
              outlined
              @keydown.enter="comment"
            >
            </v-text-field>
            <v-text-field
              v-model="text"
              hide-details
              flat
              label="Insira o texto da atualização do projeto..."
              solo
              outlined dense
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
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card-text>
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
              cols="5"
              v-text="event.time"
            ></v-col>
            <v-col  cols="1" class="text-right">
              <forms-confirmation :id="event" @action="deleteUpdate($event)" />
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span> {{events ? 'Últimas Atualizações' : 'Não há atualizações inseridas neste projeto'}}</span>
      </v-timeline-item>
      
    </v-timeline>
  </v-container>
</template>

<script>
  const shortid = require('shortid');
  import {mapActions} from 'vuex'

  export default {
    data: () => ({
      events: [],
      title: null,
      text: null,
      nonce: 0
    }),

    props:{
      project: true
    },

    computed: {
      timeline () {
        return this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).slice().reverse()
      },
      idProject(){
        return this.$route.query.id
      }
    },

    methods: {
      ...mapActions(['deleteUpdate', 'addUpdate']),
      comment () {
        const time = (new Date()).toTimeString()
        let event = {
          id: shortid.generate(),
          title: this.title,
          idProject: this.idProject,
          IdUser: 1,
          text: this.text,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        }
        this.events.push(event)
        this.addUpdate(event)
        this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})

        this.text = null
        this.title = null
      },
    },
  }
</script>