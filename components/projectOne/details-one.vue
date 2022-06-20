<template>

    <v-card-text>
        <v-row>
            <v-col cols="3">
                <span>Ação:</span><br>
            </v-col>
            <v-col>
               <span>{{project.name}}</span> 
               <v-chip class="ml-2" small outlined color="blue" v-if="project.status">Profisco</v-chip>
               <v-chip small outlined v-text="project.type == 2 ? 'Infra':'Sistema'"></v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <span>Objetivo:</span>
            </v-col>
            <v-col>
               <p class="texta_ajust">{{project.object}}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <span>Líder:</span><br>
                <span>Prioridade:</span><br>
                <span>Status:</span><br>
                <span>Execução:</span><br>
                <span>Empresa/Consultoria:</span><br>
            </v-col>
            <v-col>
               <span v-text="project.lider ? project.lider: '-'"></span><br>
               <span v-text="project.priority ? project.priority : '-'"></span><br>
               <span>{{statusName(project.status)}}</span><br>
               <span>{{executionName(project.execution)}}</span><br>
               <span v-text="project.company ? project.company: '-'"></span><br>
            </v-col>
        </v-row>
    </v-card-text>

</template>

<script>
    export default {
        props:{
            project: Object
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

<style scoped>
.texta_ajust{
    text-align: justify;
    hyphens: auto;
}

</style>