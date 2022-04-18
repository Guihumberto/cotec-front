<template>
    <v-container style="max-width:1080px;">
        <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs" />
        
        <h1>{{selectProject.name}}</h1>
        <v-card>
            <v-card-title>Objeto <v-spacer></v-spacer> <v-btn icon @click="alert"> <v-icon :color="notification ? 'warning' : 'secondary'">mdi-bell</v-icon> </v-btn></v-card-title>
            <v-card-text>
                {{selectProject.object}}
            </v-card-text>
            <v-card-actions>
                <v-col
                cols="12"
                class="py-2"
                >
                <p>Download da documentação</p>

                <v-btn-toggle
                    v-model="icon"
                    borderless
                >
                    <v-btn value="left">
                    <span class="hidden-sm-and-down">Termo de Referência</span>

                    <v-icon right>
                        mdi-file-document-outline
                    </v-icon>
                    </v-btn>

                    <v-btn value="center">
                    <span class="hidden-sm-and-down">Contrato</span>

                    <v-icon right>
                        mdi-file-document-outline
                    </v-icon>
                    </v-btn>

                    <v-btn value="right">
                    <span class="hidden-sm-and-down">Aditivo</span>

                    <v-icon right>
                        mdi-file-document-outline
                    </v-icon>
                    </v-btn>

                    <v-btn value="justify">
                    <span class="hidden-sm-and-down">Ajustes</span>

                    <v-icon right>
                        mdi-file-document-outline
                    </v-icon>
                    </v-btn>
                </v-btn-toggle>
                </v-col>
            </v-card-actions>
            <v-card-title>Informações</v-card-title>
            <v-card-text>
                <v-row class="mx-4 border">
                    <v-col cols="12" class="overline my-0 py-0">Processo nº: XXXX/2020</v-col>
                    <v-col cols="12" sm="4">
                        <span> <span class="overline" >Líder: </span>{{selectProject.lider}}</span> <br>
                        <span> <span class="overline" >Colíder: </span>{{selectProject.colider}}</span> <br>
                        <span> <span class="overline" >Corpo Técnico: </span>{{selectProject.sector}}</span> <br>
                        <span> <span class="overline" >Tipo: </span>{{selectProject.type}}</span> <br>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" sm="4">
                        <span> <span class="overline" >Valor: </span>{{selectProject.value}}</span> <br>
                        <span> <span class="overline" >Empresa/Consultor: </span>{{selectProject.company}}</span> <br>
                        <span> <span class="overline" >Início: </span> - </span> <br>
                        <span> <span class="overline" >Fim: </span> - </span> <br>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" sm="4">
                        <span> <span class="overline" >Profisco: </span>{{selectProject.profisco}}</span> <br>
                        <span> <span class="overline" >Status: </span>{{selectProject.status}}</span> <br>
                        <span> <span class="overline" >Prioridade: </span>{{selectProject.priority}}</span> <br>
                        <span> <span class="overline" >Execução: </span>{{selectProject.execution}}</span> <br>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-title>Informações adicionais</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima deleniti iusto veniam aut 
                animi provident, exercitationem, quidem pariatur incidunt, autem est adipisci quo magni officiis repellat! Consequuntur, culpa at?
            </v-card-text>
        </v-card>
        <v-card class="mt-2">
            <v-card-title>Extra</v-card-title>
            <v-card-text>
                <projectOne-information :typeDocument="option1" />  <br> <projectOne-information :typeDocument="option2" />
            </v-card-text>
        </v-card>
        <projectOne-timeline :project="selectProject" />
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            icon: true,
            notification: false,
            idProject: this.$route.query.id,
            option1: true,
            option2: false,
            nome: 'LGPD',
            breadcrumbs:[
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Projetos',
                    disabled: false,
                    href: '/projects',
                },
                {
                    text: 'Nome do Projeto',
                    disabled: true,
                    href: '/id',
                },
            ]
        }
    },
    computed:{
        projects(){
            return this.$store.getters.readProjects
        },
        selectProject(){
            let projectSelected = ''
            
            this.projects.forEach(x => 
                x.id == this.idProject ? projectSelected = x : ''
            );

            return projectSelected
        }
    },
    methods:{
        alert(){
            this.notification = ! this.notification

            if(this.notification){
                this.$store.dispatch("snackbars/setSnackbars", {text:'Notificações ativas!', color:'primary', timeout:'3000'})
            } else {
                this.$store.dispatch("snackbars/setSnackbars", {text:'Notificações desativadas!', color:'error', timeout:'3000'})
            }
        }
    }
}
</script>

<style scoped>
    .border{
        border: 1px solid rgb(223, 220, 220);
        border-radius: 12px;
        padding: 12px 0;
    }
</style>