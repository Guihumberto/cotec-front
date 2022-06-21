<template>
<div>
    <v-card class="mt-2" hover v-for="project in projects" :key="project.id" rounded="0">
        <v-card-title> <span class="boxList"></span> {{project.name}}</v-card-title>
        <v-card-subtitle>
            <div d-flex>
                <span> Lider: {{project.lider}}</span> 
                <span class="mx-2">Colider: {{project.colider}}</span>
                <!-- <span>Valor: R${{project.value}}</span> -->
                <span class="ml-2">Empresa/Consultor: {{project.company}}</span><br>
                <span v-if="project.execution">Execução: {{executionName(project.execution).pct}} -  {{executionName(project.execution).text}}</span>
            </div>
        </v-card-subtitle>
        <v-card-text>
            <p class="textJustify pr-2">{{project.object}}</p>
            <painels-barProjectList :tags="project" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions style="background-color: #D0F2EC">
            <v-spacer></v-spacer>
            <v-btn 
                small v-show="false" icon @click="alert" 
                :color="notification ? 'warning':'secondary lighten-3'" > <v-icon small>mdi-bell</v-icon> 
            </v-btn> 
            <v-btn outlined small 
                        color="success" 
                        :to="{
                        name: 'project',
                        params:{project: project.name},
                        query:{id: project.id}  
                    }" >Detalhes +
            </v-btn>             
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
        },
        executionName(value){
        switch (value) {
            case 0:
                return {pct: '0%', text: 'NÃO INICIADA'}
                break;

            case 1:
                return  {pct: '1% a 10%', text: 'ESTUDOS INICIAIS'} 
                break;

            case 2:
                return  {pct: '11% a 30%', text: 'TERMO DE REFERÊNCIA/CONTRATAÇÃO'}
                break;

            case 3:
                return  {pct: '31% a 50%', text: 'EXECUÇÃO INICIAL'}
                break;

            case 4:
                return  {pct: '51% a 75%', text: 'EXECUÇÃO AVANÇADA'} 
                break;

            case 5:
                return  {pct: '76% a 99%', text: ' ELABORAÇÃO CONCLUÍDA'} 
                break;

            case 6:
                return  {pct: '100%', text: 'IMPLANTADA E EM PRODUÇÃO'} 
                break;
        
            default:
                return {pct: '-', text: '-'}
                break;
        }
        }  
    }
  
}
</script>
<style scoped>
.textJustify{
  text-align: justify;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
</style>