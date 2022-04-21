<template>
    <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn small color="success" icon v-bind="attrs" v-on="on"> <v-icon>mdi-plus-circle</v-icon> </v-btn>
        </template>
        <v-card>
            <v-form @submit.prevent="addProject">
                <v-card-title class="text-h5 grey lighten-2">Informações Adicionais <v-spacer></v-spacer> <v-btn @click="dialog = false" icon> <v-icon>mdi-close</v-icon> </v-btn></v-card-title>
                <v-card-title> <span class="mark"></span> {{project.name}}</v-card-title>
                <v-card-text class="mt-2">
                <v-text-field
                    outlined dense
                    ref="company"
                    v-model="project.company"
                    :rules="[() => !!project.company || 'Campo Obrigatório']"
                    label="Empresa/Consultoria"
                    required
                    placeholder="Digite o nome da empresa/consultoria prestadora de serviço."
                ></v-text-field>
                <v-autocomplete
                    ref="project.status"
                    outlined dense
                    v-model="project.status"
                    :rules="[() => !!project.status || 'This field is required']"
                    :items="status"
                    item-value="value"
                    item-text="name"
                    label="Status"
                    placeholder="Selecione..."
                    required
                ></v-autocomplete>
                 <v-textarea
                    v-show="project.status == 99"
                    v-model="project.justify"
                    dense outlined
                    label="Justificativa"
                    placeholder="Informe o motivo do status paralisado."
                ></v-textarea>
                <v-radio-group row v-model="project.execution">
                    Execução: 
                    <v-radio
                    v-for="n in execution"
                    :key="n"
                    :label="`${n}%`"
                    :value="n"
                    ></v-radio>
                </v-radio-group>
                <v-radio-group row v-model="project.priority">
                    Prioridade: 
                    <v-radio
                    v-for="n in priority"
                    :key="n"
                    :label="n"
                    :value="n"
                    ></v-radio>
                </v-radio-group>
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

    import { mapActions } from 'vuex';

    export default {
        data(){
            return{
                dialog: false,  
                status: [
                    {value: 1, name: 'Não Iniciado'},
                    {value: 2, name: 'em andamento'},
                    {value: 3, name: 'Concluído'},
                    {value: 4, name: 'Paralisado'},
                ],
                execution: [0, 20, 40, 60, 80, 100],
                priority: ['1', '2', '3+'],
            }
        },
        props:{
            project:Object
        },
        methods:{
            ...mapActions(['editProject']),
            addProject(){
                this.editProject(this.project)
                this.dialog = false
                this.$store.dispatch("snackbars/setSnackbars", {text:'Informações adicionais atualizadas', color:'primary', timeout:'3000'})
            }
        },
    }
</script>