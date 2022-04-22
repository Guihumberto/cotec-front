<template>
    <v-container style="max-width: 1080px;">
            <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs" />
            <h1 class="my-2"><span class="box" /><span class="box1" /><span class="box2" /> Projetos</h1>
            <forms-searchProject @search="dataSearch = $event" :qtdProject="filtro.length" />
            <items-projectList :projects="filtro" />
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            dataSearch: null,
            breadcrumbs:[
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Projetos',
                    disabled: true,
                    to: '/projects',
                },
            ]
        }
    },
    computed:{
        projects(){
            return this.$store.getters.readProjects
        },
        filtro(){
            if(this.dataSearch){
                const projects = this.projects
                let filtro = this.dataSearch
                //let exp = new RegExp(projects.search.trim().replace(/[\[\]!'@,><|://\\;&*()_+=]/g, ""), "i")
                //filtro = filtro.filter(project => exp.test(project.name))
                filtro.profisco 
                ? filtro = projects.filter(project => project.profisco == true)
                : filtro = projects
                if(this.dataSearch.search){
                    let exp = new RegExp(this.dataSearch.search.trim().replace(/[\[\]!'@,><|://\\;&*()_+=]/g, ""), "i")
                    filtro = filtro.filter(project => exp.test(project.name))
                }
                if(this.dataSearch.status){
                    filtro = filtro.filter(project => project.status == this.dataSearch.status)
                } 
                if(this.dataSearch.type){
                    filtro = filtro.filter(project => project.type == this.dataSearch.type)
                } 
                if(this.dataSearch.priority){
                    filtro = filtro.filter(project => project.priority == this.dataSearch.priority)
                } 
                return filtro
            } else {
                return this.projects
            }
        },
    },
    created(){
        if(this.$route.query.status){
               this.dataSearch = {
                   status: this.$route.query.status}
               this.filtro
            }
    }
}
</script>