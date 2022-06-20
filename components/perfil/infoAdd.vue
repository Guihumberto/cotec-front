<template>
    <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn title="informações adicionais" small color="success" icon v-bind="attrs" v-on="on"> <v-icon>mdi-plus-circle</v-icon> </v-btn>
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

                <v-radio-group v-model="project.execution">
                    <span class="mb-2">Execução:</span>  
                    <v-radio
                    v-for="n in execution"
                    :key="n.value"
                    :label="n.name"
                    :value="n.value"
                    ></v-radio>
                </v-radio-group>

                <v-radio-group row v-model="project.priority">
                    <span class="mr-2">Prioridade:</span>
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
    const shortid = require('shortid');

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
                execution: [
                    {value: 0, name: '0% - NÃO INICIADA'},
                    {value: 1, name: '1% a 10% - ESTUDOS INICIAIS'},
                    {value: 2, name: '11% a 30% - TERMO DE REFERÊNCIA/CONTRATAÇÃO'},
                    {value: 3, name: '31% a 50% - EXECUÇÃO INICIAL'},
                    {value: 4, name: '51% a 75% - EXECUÇÃO AVANÇADA'},
                    {value: 5, name: '76% a 99% - ELABORAÇÃO CONCLUÍDA'},
                    {value: 6, name: '100% - IMPLANTADA E EM PRODUÇÃO'},
                ],
                priority: ['1', '2', '3', '3+'],
            }
        },
        props:{
            project:Object
        },
        methods:{
            ...mapActions(['editProject', 'addUpdate']),
            addProject(){
                if(this.project.status != 4) {
                    switch (this.project.execution) {
                        case 0:
                            this.project.status = 1
                            break;
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            this.project.status = 2
                            break;
                        case 6:
                            this.project.status = 3
                            break;
                    
                        default:
                            break;
                    }
                }

                //gravar atualização
                let event = {
                id: shortid.generate(),
                title: "Atualização de informações do Projeto",
                idProject: this.project.id,
                IdUser: 1,
                text: "(mensagem automática)",
                task: false,
                time: Date.now()
                }  
                this.addUpdate(event)

                //Gravar Dados
                this.editProject(this.project)
                this.dialog = false
                this.$store.dispatch("snackbars/setSnackbars", {text:'Informações adicionais atualizadas', color:'primary', timeout:'3000'})
            },
        },
    }
</script>