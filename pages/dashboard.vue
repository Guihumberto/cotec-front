<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>Dashboard</v-toolbar-title>
        </v-toolbar>
        <v-row class="mt-n6 ml-5">
            <v-col cols="12" sm="8">
                <dash-painel />
                <v-row>
                    <v-toolbar flat class="mb-n6">Projetos</v-toolbar>
                    <v-col cols="12">
                        <v-card class="borders">
                            <dash-table />
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-toolbar flat class="mb-n6">Perguntas e respostas</v-toolbar>
                    <v-col cols="12">
                        <v-card class="borders">
                            <dash-ask />
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card class="borders">
                    <v-card-title>Paineis</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" v-for="(item, i) in 6" :key="i">
                                <v-card align="center" color="#2ebfaf" dark class="pa-5" hover>
                                    <h1>6</h1>
                                    <v-card-text class="mb-n5">
                                        detalhes
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-card flat>
                                    <v-card-title>Links Úteis</v-card-title>
                                    <v-list>
                                        <v-list-item-group>
                                        <template v-for="(item, i) in 10">
                                            <v-list-item  :key="i">
                                                <v-list-item-content>
                                                    <v-list-item-title>Link {{item}}</v-list-item-title>
                                                    <v-list-item-subtitle>www.teste.com.br</v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-btn icon>
                                                        <v-icon color="grey lighten-1">mdi-web</v-icon>
                                                    </v-btn>
                                                </v-list-item-action>
                                            </v-list-item>
                                            <v-divider v-if="item !=14"></v-divider>
                                        </template>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card>

                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        layout: 'alternative',
    }
</script>

<style lang="scss" scoped>
    .borders{
        border: 2px solid #2ebfaf !important;
    }
</style>