<template>
    <v-container style="height: 80vh;">
        <v-row class="mt-2" style="height: 60vh;">
            <v-col align-self="center" cols="12">
                <v-card height="30vh" max-width="500" class="mx-auto grey lighten-4" flat>
                    <h3 class="text--uppercase display-1 mb-2 text--center">Sistema de Projetos</h3>
                    <v-img 
                        class="white--text align-end" 
                        src="https://live.staticflickr.com/2785/4281134496_4b821c0254_b.jpg"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                        <v-card-text>
                            <h3 class="display-1 white--text mb-2">Login</h3>
                            <v-text-field append-icon="mdi-account" solo label="Login" outlined dense></v-text-field>
                            <v-text-field type="password" append-icon="mdi-lock" solo label="Senha" outlined dense></v-text-field>
                            <div class="mb-5 mt-n6 d-flex justify-space-between">
                                <v-checkbox
                                    dark dense
                                    class="mt-0"
                                    v-model="lembrarSenha"
                                    label="Lembrar senha"
                                ></v-checkbox>
                                <v-btn class="mt-1" small text dark>Esqueceu sua senha?</v-btn>
                            </div>
                            <v-btn @click="google" block color="error lighten-2"><v-icon>mdi-gmail</v-icon> entrar com google</v-btn>
                            
                            <v-btn block small outlined dark class="mt-2"> Não possui conta? Regitrar aqui</v-btn>
                        </v-card-text>
                     </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { firebase, auth, db} from '@/plugins/firebase.js'
    import { mapMutations } from 'vuex'

    export default {
        layout: 'alternative',
        data(){
            return{
                lembrarSenha: false
            }
        },
        methods:{
            ...mapMutations(['setUser']),
            async google(){
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().languageCode = 'pt';
                
                try {
                    //login user
                    const result = await firebase.auth().signInWithPopup(provider);
                    const user = result.user;
                    console.log(user);

                    //register user
                    const usuario = {
                        name: user.displayName,
                        email: user.email,
                        uid: user.uid,
                        photo: user.photoURL
                    }

                    this.setUser(usuario)

                    //Guardar en Firestore
                    await db.collection('usuarios').doc(usuario.uid).set(
                    usuario
                    )
                    console.log('Usuario guardado en DB');

                    this.$router.push( '/chat' )

                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>