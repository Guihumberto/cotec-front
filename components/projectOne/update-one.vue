<template>
    <v-card-text>
        <v-list v-if="timeline[0]">
            <v-list-item two-line v-for="(item, i) in timeline" :key="i">
                <v-list-item-avatar class="mr-1">
                    <v-icon large>mdi-bookmark</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.text}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                        {{dateMoment(item.time)}}
                </v-list-item-action>
            </v-list-item>
            <v-btn v-if="timelineLenght > 5" @click="showAll = !showAll"  text :color="btnTxt.color" block>{{btnTxt.text}}</v-btn>
            
        </v-list>  
        <v-list v-else>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Não há Atualizações informadas!</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list> 
    </v-card-text>
</template>

<script>
    import moment from 'moment'
    export default {
        data(){
            return{
                showAll: false
            }
        },
        props:{
            idProject: String
        },
        computed:{
            timeline () {
                const timeline = this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).sort(this.order).reverse()
                return this.showAll
                ? timeline
                : timeline.slice(0,4)
            },
            timelineLenght(){
                return  this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).length
            },
            btnTxt(){
                return this.showAll
                ? {color:'error', text:'Ocultar'}
                : {color:'primary', text:'Mostrar tudo...'}
            },
        },
        methods: {
            dateMoment(date){
                moment.locale('pt-br')
                const dateM = moment(date).format('lll')
                return dateM
            },
            order(a, b){
                return a.time -b.time
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>