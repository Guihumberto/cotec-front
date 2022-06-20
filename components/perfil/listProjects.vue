<template>
    <v-card-text>
        <v-card flat>
            <v-text-field v-model="search.search" clearable prepend-inner-icon="mdi-magnify" outlined dense label="Buscar" solo>
            </v-text-field>
            <v-checkbox class="ma-0 pa-0"
            label="Profisco"
            v-model="search.profisco"
            ></v-checkbox>
        </v-card>
            <v-list two-line>
                <v-list-item-group
                    v-model="selected"
                    active-class="pink--text"
                    multiple
                >
                    <template v-for="(item, index) in searchProjects">
                    <v-list-item :key="index">
                        <template>
                        <v-list-item-avatar class="mr-1">
                            <v-icon color="success" large>mdi-square</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title> {{item.name}} <v-chip x-small color="primary lighten-1" v-show="item.profisco" v-text="item.profisco? 'Profisco':''"></v-chip> </v-list-item-title>
                            <v-list-item-subtitle v-text="item.object"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action v-if="!item.statusFinalizar == 1">
                            <div d-flex>
                                <perfil-destinyProject v-if="item.status != 3" />
                                <perfil-finalizarProject :project="item" v-else />
                                <perfil-details :project="item" />
                                <v-btn title="atualizar andamento do projeto" icon small :to="{
                                    name: 'project',
                                    params:{project: item.name},
                                    query:{id: item.id}  
                                }"> <v-icon>mdi-update</v-icon> </v-btn>
                                <perfil-infoAdd :project="item" />
                                <perfil-editProject :project="item" />
                                <forms-confirmation :id="item" @action="deleteProject($event)" />            
                            </div>
                        </v-list-item-action>
                        <v-list-item-action v-else>
                            <v-icon title="Projeto Finalizado">mdi-information</v-icon>
                        </v-list-item-action>
                        
                        </template>
                    </v-list-item>

                    <v-divider
                        v-if="index < projects.length - 1"
                        :key="index"
                    ></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-card-text>
</template>

<script>

import {mapActions} from 'vuex';
import perfil from '../../pages/perfil.vue';

    export default {
    components: { perfil },
            data(){
                return{
                    selected:[2],
                    dialogUpdate: false,
                    search:{
                        search: '',
                        profisco: false
                    }
                }
            },
            props:{
                projects: Array
            },
            computed:{
                searchProjects(){
                    if(this.search.profisco || this.search.search){
                       let exp = new RegExp(this.search.search.trim().replace(/[\[\]!'@,><|://\\;&*()_+=]/g, ""), "i")
                       let res = this.projects.filter( el => el.profisco === this.search.profisco)
                       res = res.filter(project => exp.test(project.name))
                       return res 
                    } else {
                       return this.projects
                    }
                }
            },
            methods:{
                ...mapActions(['deleteProject']),
            }
        }
</script>