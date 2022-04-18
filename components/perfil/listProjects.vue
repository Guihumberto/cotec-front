<template>
    <v-card-text>
            <v-list two-line>
                <v-list-item-group
                    v-model="selected"
                    active-class="pink--text"
                    multiple
                >
                    <template v-for="(item, index) in projects">
                    <v-list-item :key="item.name">
                        <template v-slot:default="{ active }">
                        <v-list-item-content>
                            <v-list-item-title> {{item.name}} <v-chip x-small color="primary lighten-1" v-show="item.profisco" v-text="item.profisco? 'Profisco':''"></v-chip> </v-list-item-title>
                            <v-list-item-subtitle v-text="item.object"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <div d-flex>

                                <perfil-details :project="item" />
                                <perfil-infoAdd :project="item" />
                                <perfil-editProject :project="item" />
                                <forms-confirmation :id="item" @action="deleteProject($event)" />
                                
                            </div>
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
            }
        },
        props:{
            projects: Array
        },
        methods:{
            ...mapActions(['deleteProject']),
            delete(){
                
            }
        }
    }
</script>