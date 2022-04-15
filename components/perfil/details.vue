<template>
    <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn title="Detalhes" icon small v-bind="attrs" v-on="on"> <v-icon>mdi-text-box-outline</v-icon> </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5 grey lighten-2"> Detalhes do Projeto <v-spacer></v-spacer> <v-btn @click="dialog = false" icon> <v-icon>mdi-close</v-icon> </v-btn> </v-card-title>
            <v-card-title><span class="mark"></span>{{project.name}}</v-card-title>
            <v-card-subtitle class="text-h6 mt-2">Dados do Projeto</v-card-subtitle>
            <v-card-text> {{project}} </v-card-text>
            <v-card-subtitle class="text-h6 mt-2">Informações Adicionais</v-card-subtitle>
            <v-card-text> <v-btn>inserir</v-btn> </v-card-text>
            <v-card-subtitle class="text-h6 mt-2">Atualizações</v-card-subtitle>
            <v-card-text> Update </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small text @click="dialog = !dialog">fechar</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
    export default {
        data(){
            return{
                dialog: false
            }
        },
        props:{
            project: Object
        }
        
    }
</script>

<style>
.mark{
    border-right: solid 5px green;
    border-top: solid 10px green;
    border-bottom: solid 10px green;
    margin-right: 3px;
}
</style>
