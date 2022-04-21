<template>
    <v-card flat>
        <v-card-title>Filtros <v-spacer></v-spacer> <v-btn title="pesquisa avançada" icon @click="searchAdvanced = !searchAdvanced"> <v-icon v-text="iconSearch"></v-icon> </v-btn> </v-card-title>
        <v-card-text>
            <v-text-field @keyup="search" v-model="filter.search" dense outlined label="Busca" 
               bprepend-inner-icon="mdi-magnify" solo flat>
            </v-text-field>
            <v-expand-transition>
                <v-row v-show="searchAdvanced">
                    <v-col cols="12" sm="2" class="my-0 py-auto">
                        <v-select 
                          @click="search"
                          v-model="filter.status" dense outlined label="Status"
                          :items="status"
                          item-text="name"
                          item-value="value"
                          >
                        </v-select>
                    </v-col>
                    <v-col cols="4" sm="1" class="my-0 py-0">
                        <v-checkbox @click="search" v-model="filter.profisco" label="Profisco"></v-checkbox>
                    </v-col>
                    <v-col cols="4" sm="4" class="ml-5 my-0 py-0">
                        <v-radio-group
                            v-model="filter.type"
                            row
                            >
                                <v-radio
                                    label="Sistema"
                                    value="1"
                                    @click="search"
                                ></v-radio>
                                <v-radio
                                    label="Infra"
                                    value="2"
                                    @click="search"
                                ></v-radio>
                                 <v-radio
                                    label="Outros"
                                    value="3"
                                    @click="search"
                                ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="4" class="my-0 py-0">
                        <v-radio-group v-model="filter.priority" row> 
                            <v-icon color="error" class="pr-2">mdi-arrow-up-circle</v-icon>
                            <v-radio label="3+" value="3+" @click="search"></v-radio>
                            <v-radio label="3" value="3" @click="search"></v-radio>
                            <v-radio label="2" value="2" @click="search"></v-radio>
                            <v-radio label="1" value="1" @click="search"></v-radio>
                        </v-radio-group>
                    </v-col>

                    <!-- <v-col cols="12" sm="3" class="my-0 py-0" v-show="false">
                        <v-select v-model="filter.lider" dense outlined label="Lider/Colider"></v-select>
                    </v-col>
                    <v-col cols="12" sm="3" class="my-0 py-0" v-show="false">
                        <v-select v-model="filter.sector" dense outlined label="Setor"></v-select>
                    </v-col> -->
                </v-row>
            </v-expand-transition>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn text small color="primary">Qtd: {{qtdProject}}</v-btn>
                <v-btn text small color="error" @click="clearFields">Limpar</v-btn>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            searchAdvanced: false,
            status: [
                {value: null, name: 'Todos'},
                {value: 1, name: 'Não Iniciado'},
                {value: 2, name: 'em andamento'},
                {value: 3, name: 'Concluído'},
                {value: 4, name: 'Paralisado'},
            ],
            filter:{
                    search: '',
                    sector: '',
                    status: '',
                    profisco: null,
                    priority: null,
                    type: null,
                    lider: null
                   }
        }
    },
    props:{
        qtdProject: true
    },
    computed:{
        iconSearch(){
            return this.searchAdvanced
            ? 'mdi-chevron-down'
            : 'mdi-chevron-up'
        }
    },
    methods:{
        search(){
            this.$emit('search', this.filter)
        },
        clearFields(){
            this.filter.search = ''
            this.filter.sector = ''
            this.filter.status = ''
            this.filter.profisco = ''
            this.filter.priority = ''
            this.filter.type = ''
            this.filter.lider = ''
            this.$store.dispatch("snackbars/setSnackbars", {text:'Os campos de busca foram limpos!', color:'primary', timeout:'3000'})
        }
    }
}
</script>

<style scoped>
    .border{
        border: solid 1px black;
    }
</style>