<template>
  <v-container style="max-width: 1080px;">
      <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs"/>

      <painels-painelQtd :projects="projects" />
      <painels-listPrioritys />
      <painels-lastUpdate />
      <painels-presentation />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return{
      breadcrumbs:[
                {
                    text: 'Home',
                    disabled: true,
                    href: '/',
                },
            ]
        }
  },

  computed:{
    projects(){
      return this.$store.getters.readProjects
    },
  },
  
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
