<template>
    <v-card flat>
        <v-card-title>Filtros <v-spacer></v-spacer> <v-btn title="pesquisa avançada" icon @click="searchAdvanced = !searchAdvanced"> <v-icon v-text="iconSearch"></v-icon> </v-btn> </v-card-title>
        <v-card-text>
            <v-text-field @keyup="search" v-model="filter.search" dense outlined label="Busca" prepend-inner-icon="mdi-magnify" solo></v-text-field>
            <v-expand-transition>
                <v-row v-show="searchAdvanced">
                    <v-col cols="4" sm="3" class="my-0 py-0">
                    <v-radio-group
                        v-model="filter.type"
                        row
                        >
                            <v-radio
                                label="Sistema"
                                value="1"
                            ></v-radio>
                            <v-radio
                                label="Infra"
                                value="2"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="3" class="my-0 py-0">
                        <v-select v-model="filter.lider" dense outlined label="Lider/Colider"></v-select>
                    </v-col>
                    <v-col cols="12" sm="3" class="my-0 py-0">
                        <v-select v-model="filter.sector" dense outlined label="Setor"></v-select>
                    </v-col>
                    <v-col cols="12" sm="3" class="my-0 py-0">
                        <v-select v-model="filter.status" dense outlined label="Status"></v-select>
                    </v-col>
                    <v-col cols="4" sm="1" class="my-0 py-0">
                        <v-checkbox v-model="filter.profisco" label="Profisco"></v-checkbox>
                    </v-col>
                    <v-col sm="1">
                        <v-divider class="ml-3" vertical></v-divider>
                    </v-col>
                    <v-col cols="12" sm="7" class="my-0 py-0">
                        <v-radio-group v-model="filter.priority" row>
                            <span class="mr-2 pt-1">Prioridades:</span> 
                            <v-radio label="3+" value="3+" ></v-radio>
                            <v-radio label="3" value="3" ></v-radio>
                            <v-radio label="2" value="2" ></v-radio>
                            <v-radio label="1" value="1" ></v-radio>
                        </v-radio-group>
                    </v-col>
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