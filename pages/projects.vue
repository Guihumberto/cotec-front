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
                    href: '/',
                },
                {
                    text: 'Projetos',
                    disabled: true,
                    href: '/projects',
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
                let filtro
                let exp = new RegExp(this.dataSearch.search.trim().replace(/[\[\]!'@,><|://\\;&*()_+=]/g, ""), "i")
                filtro = this.projects.filter(project => exp.test(project.name))
                return filtro
            } else {
                return this.projects
            }
        }
    }
}
</script>