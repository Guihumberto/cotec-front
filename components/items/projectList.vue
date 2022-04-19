<template>
<div>
    <v-card class="mt-2" hover v-for="project in projects" :key="project.id">
        <v-card-title>{{project.name}}</v-card-title>
        <v-card-subtitle>
            <div d-flex>
                <span> Lider: {{project.lider}}</span> 
                <span class="mx-2">Colider:{{project.colider}}</span>
                <span>Valor: R${{project.value}}</span>
                <span class="ml-2">Empresa/Consultor: {{project.company}}</span>
                <span class="ml-2">Execução: {{project.execution}} %</span>
            </div>
        </v-card-subtitle>
        <v-card-text>
            <p>{{project.object}}</p>
            <painels-barProjectList :tags="project" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small icon @click="alert" :color="notification ? 'warning':'secondary lighten-3'" > <v-icon small>mdi-bell</v-icon> </v-btn> 
            <v-btn small color="success" :to="{
                        name: 'project',
                        params:{project: project.name},
                        query:{id: project.id}  
                      }" >Detalhes +</v-btn>              
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'listProject',

    data(){
        return{
            notification: false,
        }
    },

    props:{
        projects: true
    },

    methods:{
        alert(){
            this.notification = !this.notification

            if(this.notification){
                this.$store.dispatch("snackbars/setSnackbars", {text:'Notificações ativas!', color:'primary', timeout:'3000'})
            } else {
                this.$store.dispatch("snackbars/setSnackbars", {text:'Notificações desativadas!', color:'error', timeout:'3000'})
            }
        }  
    }
  
}
</script>