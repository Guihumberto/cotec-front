<template>
    <v-card-text>
        <v-timeline align-top dense v-if="faseList[0]">
            <v-timeline-item small v-for="(fase, index) in faseList" :key="index">
                <v-row>
                    <v-col cols="12" sm="3" class="mr-n3 px-0"> <strong>{{fase.etapa}}</strong></v-col>
                    <v-col cols="12" sm="4"><span class="text-caption">{{fase.description}}</span></v-col>
                    <v-col cols="12" sm="3"><span class="text-caption">{{statusName(fase.status)}}</span></v-col>
                    <v-col cols="12" sm="1" class="px-0 mr-n3" v-if="userLogin">
                        <v-btn color="primary" @click="updateFase(fase)" small><v-icon>mdi-update</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-timeline-item>
        </v-timeline>
        <v-alert v-else type="warning" dense border="left">
            Não há etapas cadastradas
        </v-alert>
    </v-card-text>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props:{
            event: Object
        },
        computed:{
            faseList(){
                 return this.$store.getters.readFase.filter(item => item.idUpdate == this.event.id)
            }
        },
        methods:{
            ...mapActions(['cargaFaseList']),
            statusName(value){
                switch (value) {
                    case 0:
                        return "Não Iniciado"
                        break;
                    case 1:
                        return "Não Iniciado"
                        break;
                    case 2:
                        return "Em Andamento"
                        break;
                    case 3:
                        return "Concluído"
                        break;
                    case 4:
                        return "Paralisado"
                        break;
                
                    default:
                        return "-"
                        break;
                }
            },
             updateFase(fase){
                this.$store.dispatch("snackbars/setSnackbars", {text:'Aguarde', color:'warning', timeout:'3000'})
                let faseNew = 0
                    switch (fase.status) {
                    case 1:
                        faseNew = 2
                        break;
                    
                    case 2:
                        faseNew = 3
                        break;
                    
                    case 3:
                        faseNew = 1
                        break;
                    
                    
                    default:
                        break;
                    }
                    fase.status = faseNew
                    // this.addFaseEdit(fase)
                    console.log(fase);
                    this.$store.dispatch("snackbars/setSnackbars", {text:'Atualização inserida com sucesso', color:'primary', timeout:'3000'})
            },
        },
        fetch(){
            this.cargaFaseList()
        },
    }
</script>

<style scoped>

</style>