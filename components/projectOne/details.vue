<template>
    <div>
        <v-card-title>Informações</v-card-title>
        <v-card-text>
             <v-chip class="ml-2" small outlined color="blue" v-if="selectProject.status">Profisco</v-chip>
             <v-chip small outlined v-text="selectProject.type == 2 ? 'Infra':'Sistema'"></v-chip>
        </v-card-text>
        <v-card-text>
                <v-row class="mx-4 border">
                    <v-col cols="12" class="overline my-0 py-0">Processo nº: - </v-col>
                    <v-col cols="12" sm="4">
                        <span class="overline" >Líder: </span><span v-text="selectProject.lider ? selectProject.lider: '-'"></span> <br>
                        <span class="overline" >Colíder: </span><span v-text="selectProject.colider ? selectProject.colider: '-'"></span> <br>
                        <span class="overline" >Corpo Técnico: </span><span v-text="selectProject.sector ? selectProject.sector: '-'"></span> <br>
                        <span class="overline" >Tipo: </span><span v-text="selectProject.type == 2 ? 'Infra':'Sistema'"></span> <br>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" sm="4">
                        <span class="overline" >Valor: </span><span>{{selectProject.value}}</span> <br>
                        <span class="overline" >Empresa/Consultor: </span><span v-text="selectProject.company ? selectProject.company: '-'"></span> <br>
                        <span class="overline" >Início: </span><span> - </span> <br>
                        <span class="overline" >Fim: </span><span> - </span> <br>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" sm="4">
                        <span class="overline" >Profisco: </span><span v-text="selectProject.profisco ? 'Sim' : 'Não'"></span> <br>
                        <span class="overline" >Status: </span><span> {{statusName(selectProject.status)}}</span> <br>
                        <span class="overline" >Prioridade: </span><span> {{selectProject.priority}}</span> <br>
                        <span class="overline" >Execução: </span><span> {{executionName(selectProject.execution)}}</span> <br>
                    </v-col>
                </v-row>
            </v-card-text>
            <div v-show="false">
                <v-card-title>Informações adicionais</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima deleniti iusto veniam aut 
                    animi provident, exercitationem, quidem pariatur incidunt, autem est adipisci quo magni officiis repellat! Consequuntur, culpa at?
                </v-card-text>
            </div>
    </div>
</template>

<script>
    export default {
        props:{
            selectProject:true
        },
        methods:{
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
            executionName(value){
                switch (value) {
                    case 0:
                        return '0% - NÃO INICIADA'
                        break;

                    case 1:
                        return  '1% a 10% - ESTUDOS INICIAIS'
                        break;

                    case 2:
                        return  '11% a 30% - TERMO DE REFERÊNCIA/CONTRATAÇÃO'
                        break;

                    case 3:
                        return  '31% a 50% - EXECUÇÃO INICIAL'
                        break;

                    case 4:
                        return  '51% a 75% - EXECUÇÃO AVANÇADA'
                        break;

                    case 5:
                        return  '76% a 99% - ELABORAÇÃO CONCLUÍDA'
                        break;

                    case 6:
                        return  '100% - IMPLANTADA E EM PRODUÇÃO'
                        break;
                
                    default:
                        return "-"
                        break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>