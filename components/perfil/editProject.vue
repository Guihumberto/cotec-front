<template>
    <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn small color="secondary" icon v-bind="attrs" v-on="on"> <v-icon>mdi-clipboard-edit</v-icon> </v-btn>
        </template>
        <v-card>
            <v-form @submit.prevent="edit">
                <v-card-title class="text-h5 grey lighten-2">Editar dados do Projeto<v-spacer></v-spacer> <v-btn @click="dialog = false" icon> <v-icon>mdi-close</v-icon> </v-btn></v-card-title>
                <v-card-title> <span class="mark"></span> {{project.name}}</v-card-title>
                <v-card-text>
                    <v-textarea
                        ref="project.object"
                        outlined dense
                        v-model.trim="project.object"
                        :rules="[
                        () => !!project.object || 'Campo Obrigatório',
                        () => !!project.object && project.object.length <= 25 || 'Descreva o objetivo do projeto'
                        ]"
                        label="Objeto/Objetivo"
                        placeholder="Descreva o objetivo e/ou objeto do projeto"
                        counter="25"
                        required
                    ></v-textarea>
                    <v-text-field
                        ref="project.lider"
                        outlined dense
                        v-model.trim="project.lider"
                        :rules="[() => !!project.lider || 'Campo Obrigatório']"
                        label="Lider"
                        placeholder="Digite o nome do Líder do Projeto"
                        required
                    ></v-text-field>
                    <v-text-field
                        ref="colider"
                        outlined dense
                        v-model.trim="project.colider"
                        :rules="[() => !!project.colider || 'This field is required']"
                        label="Colider"
                        required
                        placeholder="Digite o nome do colider"
                    ></v-text-field>
                    <v-text-field
                        ref="setor"
                        outlined dense
                        v-model.trim="project.sector"
                        :rules="[() => !!project.sector || 'Campo Obrigatório']"
                        label="Setor"
                        required
                        placeholder="Corpo Técnico responsável"
                    ></v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text @click="dialog = false">Cancelar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit">Salvar</v-btn>
                </v-card-actions>

            </v-form>
        </v-card>
</v-dialog>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data(){
            return{
                dialog: false
            }
        },
        props:{
            project: Object
        },
        methods:{
            ...mapActions(['editProject']),
            edit(){
                this.editProject(this.project)
                this.dialog = false
            }
        }
    }
</script>