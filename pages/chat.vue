<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-card>
                <v-card-text class="indigo white--text">
                    <h3>  <v-icon dark>mdi-chat</v-icon> Bem-vindo Usuário</h3>
                    {{momento}} <v-btn @click="logoutTest">logout</v-btn>
                </v-card-text>
                <v-card-text style="height: 60vh; overflow: auto;" v-chat-scroll>
                    <div :class=" item.user == 'Humberto' ? 'text--right' : 'text--left'" v-for="(item, i) in msgs" :key="i">
                        <v-chip
                            class="ma-2"
                            color="primary"
                            pill outlined    
                            >
                            <v-icon left>
                                mdi-account-outline
                            </v-icon>
                            {{item.user}}
                        </v-chip>
                        <p class="caption">{{item.date}}</p>
                        <p class="black--text">{{item.msg}}</p>
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="sendMsg" v-model="validation">
                        <v-text-field v-model="msg" label="Mensagem" outlined
                            required
                            :rules="rule"
                        ></v-text-field>
                        <v-btn type="submit">Enviar</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card>
                <v-card-text class="cyan white--text">
                    <h3>Documentos</h3>
                    arquivos e documentos para dowload
                </v-card-text>
                <v-card-text style="height: 76vh">

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import { db } from '@/plugins/firebase.js'
    import moment from 'moment'
    import { mapActions } from 'vuex'

    export default {
        layout: 'alternative',
        data(){
            return{
                msg:'',
                validation: false,
                rule:[
                    v => !!v || 'Campo obrigatório'
                ],
                msgs:[]
            }
        },
        computed:{
            momento(){
                moment.locale('pt-br')
                const now = Date.now()
                return moment(now).format('lll')
            }
        },
        methods:{
            ...mapActions(['logoutTest']),
            sendMsg(){
                if(this.validation){
                    console.log(this.msg)

                    db.collection('chats').add({
                        msg: this.msg,
                        user: 'Humberto',
                        date: Date.now()
                    }).catch(error => console.log(error))

                    this.msg = ''
                } else {
                    console.log('nda escrito');
                }
            },
        },
        created(){

            moment.locale('pt-br')

            let ref = db.collection('chats').orderBy('date', 'desc').limit(10)

            ref.onSnapshot( querySnapshot => {

                this.msgs = []

                querySnapshot.forEach( doc => {
                    this.msgs.unshift({
                        msg: doc.data().msg,
                        user: doc.data().user,
                        date: moment(doc.data().date).format('lll'),
                    })
                });

                console.log(this.msgs);

            })

        }
    }
</script>

<style lang="scss" scoped>

</style>