<template>
    <v-container style="max-width:1080px;">
        <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs" />
        <div v-if="userLogin">
            <h1 class="my-2"><span class="box" /><span class="box1" /><span class="box2" />Perfil e Projetos</h1>

            <v-tabs>
                <v-tab>
                    <v-icon left>mdi-account</v-icon>
                    Perfil
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-newspaper-variant-multiple-outline</v-icon>
                    Todos os Projetos
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-newspaper</v-icon>
                    Meus Projetos
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-star-box-multiple</v-icon>
                    Acompanhar
                </v-tab>

                <v-tab-item>
                    <perfil-dadosperfil />
                </v-tab-item>
                <v-tab-item>
                <perfil-projects />
                </v-tab-item>
                </v-tabs>
        </div>
        <div v-else>
            <pageItem-isNotLogin />
        </div>

    </v-container>
</template>

<script>
export default {
    data(){
        return{
            breadcrumbs:[
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Perfil e Projetos',
                    disabled: true,
                    to: '/perfil',
                },
            ]
        }
    },
    computed:{
        userLogin(){
            return this.$store.getters.readUser
        }
    }
}
</script>