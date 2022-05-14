<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        props:{
            selectProject:true
        }
    }
</script>

<style lang="scss" scoped>

</style>