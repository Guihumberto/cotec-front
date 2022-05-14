<template>
  <v-expand-x-transition>
    <div class="my-5" v-show="close">
      <div class="d-flex justify-space-between">
        <span class="Heading 6"><span class="verticalTag"></span>Últimas atualizações</span>
        <span>
          <v-btn small icon @click="minus = !minus"> <v-icon>{{minusMax}}</v-icon> </v-btn>
          <v-btn small icon @click="close = false"> <v-icon>mdi-close-box-outline</v-icon> </v-btn>
        </span>
      </div>
      <v-expand-transition>
      <v-list three-line v-show="minus">
        <v-subheader v-if="updates[0]">Mais Recentes</v-subheader>
        <v-subheader v-else>Não há atualizações de projetos registradas no sistema</v-subheader>
        <template v-for="item in updates">

          <v-list-item :key="item.id">
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
      </v-expand-transition>
    </div>
  </v-expand-x-transition>
</template>

<script>
  import moment from 'moment'
  export default {
    data(){
      return{
        minus: true, 
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
        return updateNew
      },
      mergeUpdatesProjects(){
        let nameProject = ''
        const newUpdates = this.updates.forEach(element => {
         element.maria
         console.log(element)
        });
        return newUpdates
      },
      minusMax(){
        return this.minus 
        ? 'mdi-minus-box-outline'
        : 'mdi-plus-box-outline'
      },
    },
    methods:{
      dateMoment(date){
        moment.locale('pt-br')
        const dateM = moment(date).format('lll')
        return dateM
      },
    },
    created(){
      
    }
  }
</script>