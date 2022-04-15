<template>
     <v-card flat>
        <v-card-title>Meus Projetos <v-spacer></v-spacer>
          
            <perfil-addproject :project="project" @clearProject="clear"/> 
   
        </v-card-title>
        <perfil-listProjects :projects="projects" /> 
    </v-card>
</template>

<script>
  export default {
    data(){
      return{
        project:{
          id: '',
          name: '',
          profisco: false,
          priority: '',
          lider: '',
          colider: '',
          type: 0,
          execution: 0,
          value: 0,
          status: 0,
          sector: '',
          company: '',
          object: '',
          justify: ''
        },  
      }
    },
    computed:{
      projects(){
        return this.$store.getters.readProjects
      }
    },
    methods:{
      clear(){
         this.project = {
          id: '',
          name: '',
          lider: '',
          colider: '',
          type: 0,
          execution: '',
          priority: '',
          profisco: false,
          object: '',
          company: '',
          sector: '',
          status: 0,
          justify: ''
        }
      }
    }
  }
</script>