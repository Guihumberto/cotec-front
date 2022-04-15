<template>
  <v-container style="max-width: 700px;">
    <h2 class="headline ligheten-1">Atualizações do Projeto - {{project.name}}</h2>
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
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Insira uma atualização do projeto..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              color="primary"
              depressed
              @click="comment"
            >
              Enviar
            </v-btn>
          </template>
        </v-text-field>
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
              cols="7"
              v-text="event.text"
            ></v-col>
            <v-col
              class="text-right"
              cols="5"
              v-text="event.time"
            ></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>Últimas Atualizações</span>
      </v-timeline-item>

      <v-timeline-item
        v-for="item in updates" :key="item.idUpt"
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            {{item.title}} - {{item.text}}
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
             12/12/2021 15:26
          </v-col>
        </v-row>
      </v-timeline-item>
      
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
    }),

    props:{
      project: Object
    },

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
      updates(){
        let res
        res = this.$store.getters.readUpdates.filter(x => x.id == this.project.id)

        return res
      },
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    },
  }
</script>