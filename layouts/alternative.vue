<template>
    <v-app>
        <dash-sidebar />
        <dash-navBar />
        <v-main>
         <v-container>
             <v-row>
                 <v-col cols="12" sm="12">
                    <nuxt />
                 </v-col>
             </v-row>
         </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import { auth } from "@/plugins/firebase";

    export default {
        fetch(){
            const user = auth.currentUser
            if(user){
                this.$router.push( '/chat' )
            } else {
                this.$router.push( '/login' )
            }
            // auth.onAuthStateChanged(function(user){
            //     console.log(user.displayName);
            // })
        }
    }
</script>

<style lang="scss" scoped>

</style>