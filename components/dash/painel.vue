<template>
    <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12" sm="3" v-for="(item, i) in items" :key="i">
            <v-card color="#f9faf0" align="center" width="200" class=" rounded-circle borders pt-10" height="200" flat>
                <v-icon color="#2ebfaf" size="60">{{item.icon}}</v-icon>
                <v-card-text class="mt-n3 grey--text text-lg-h6">
                    {{item.text}}
                </v-card-text>
                <v-btn absolute fab class="white--text" color="#2EBFAF" left top>{{item.count}}</v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    {id: 1, text:'Todos os Projetos', icon:'mdi-home', count:50},
                    {id: 1, text:'Em andamento', icon:'mdi-timer', count:20},
                    {id: 1, text:'Não Iniciados', icon:'mdi-stop', count:15},
                    {id: 1, text:'Paralisados', icon:'mdi-alert-circle', count:15},
                ]
            }
        }  
    }
</script>

<style lang="scss" scoped>
.borders{
    border: 2px solid #2ebfaf !important;
}
.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
  top: 65px !important;
}
.v-btn--absolute.v-btn--left,
.v-btn--fixed.v-btn--left {
  left: -26px !important;
}


</style>