<template>
    <v-container style="max-width:1080px;">
        <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs" />
        
        <h1>{{selectProject.name}}</h1>
        <v-card>
            <v-card-title>Objeto <v-spacer></v-spacer> <v-btn icon @click="alert"> <v-icon :color="notification ? 'warning' : 'secondary'">mdi-bell</v-icon> </v-btn></v-card-title>
            <v-card-text>
                {{selectProject.object}}
            </v-card-text>
            <projectOne-documents />
            <projectOne-details :selectProject="selectProject" />
        </v-card>
        <v-card class="mt-2">
            <v-card-title>Comunicação</v-card-title>
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
                    to: '/',
                },
                {
                    text: 'Projetos',
                    disabled: false,
                    to: '/projects',
                },
                {
                    text: `${this.$route.params.project}`,
                    disabled: true,
                    to: '/id',
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