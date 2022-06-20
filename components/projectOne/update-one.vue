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
        props:{
            idProject: String
        },
        computed:{
            timeline () {
                return this.$store.getters.readUpdates.filter(x => x.idProject == this.idProject).slice().reverse()
            },
        },
        methods: {
            dateMoment(date){
                moment.locale('pt-br')
                const dateM = moment(date).format('lll')
                return dateM
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>