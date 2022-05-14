<template>
    <v-card-actions>
                <v-col
                cols="12"
                class="py-2"
                >
                    <p>Download da documentação</p>
                    <v-btn-toggle
                        v-model="icon"
                        borderless
                    >
                        <v-btn value="left">
                        <span class="hidden-sm-and-down">Termo de Referência</span>

                        <v-icon right>
                            mdi-file-document-outline
                        </v-icon>
                        </v-btn>

                        <v-btn value="center">
                        <span class="hidden-sm-and-down">Contrato</span>

                        <v-icon right>
                            mdi-file-document-outline
                        </v-icon>
                        </v-btn>

                        <v-btn value="right">
                        <span class="hidden-sm-and-down">Aditivo</span>

                        <v-icon right>
                            mdi-file-document-outline
                        </v-icon>
                        </v-btn>

                        <v-btn value="justify">
                        <span class="hidden-sm-and-down">Ajustes</span>

                        <v-icon right>
                            mdi-file-document-outline
                        </v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-card-actions>
</template>

<script>
    export default {
        data(){
            return{
                icon: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>