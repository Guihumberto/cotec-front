<template>
  <v-dialog
    v-model="dialog"
    width="800"
  >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          text
          class="mt-2"
          block
        >
         mostrar mais
        </v-btn>
      </template>
        <v-list three-line>
          <v-subheader v-if="updates[0]"><v-btn text small @click="dialog = false"> <v-icon small>mdi-close</v-icon> fechar</v-btn></v-subheader>
          <v-subheader v-else>Não há atualizações de projetos registradas no sistema</v-subheader>
          <template v-for="(item, index) in updates">

            <v-list-item :key="index">
              <v-list-item-avatar color="indigo" class="align_avatar">
                <span class="white--text" v-if="item.nameProject != 'Vazio'">{{item.nameProject.substr(0,1)}}</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title> {{item.nameProject}} </v-list-item-title>
                <v-list-item-subtitle> <span style="text-transform:uppercase" >{{item.title}}</span> - {{item.text}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="text-center">
                <small> <v-icon x-small>mdi-clock</v-icon> data/hora</small>
                <small> 
                  {{dateMoment(item.time)}}
                </small>
              </v-list-item-action>
            </v-list-item>
            <v-divider inset></v-divider>
          </template>
        </v-list>
  </v-dialog>
</template>

<script>
  import moment from 'moment'
  export default {
    data(){
      return{
        dialog: false,
        close: true,
      }
    },
    props:{
      projects: Array
    },
    computed:{
      updates(){
        let updateNew = []
        let updatesProject =  this.$store.getters.readUpdates
        
        updatesProject.forEach(update => {    
          //filtrando o projeto
          let project = this.projects.filter(project => project.id == update.idProject)

          //inserindo o nome do projeto
          if (typeof(project[0]) != 'undefined') {
            if(project[0].id == update.idProject){
              update.nameProject = project[0].name
            }
          } else {
              update.nameProject = ""
          }
          updateNew.push(update)
        })
        return updateNew.sort(this.order).reverse()
      },
      mergeUpdatesProjects(){
        let nameProject = ''
        const newUpdates = this.updates.forEach(element => {
         element.maria
         console.log(element)
        });
        return newUpdates
      },
    },
    methods:{
      dateMoment(date){
        moment.locale('pt-br')
        const dateM = moment(date).format('lll')
        return dateM
      },
    },
    order(a, b){
      return a.time -b.time
    }
  }
</script>