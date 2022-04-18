<template>
  <v-expand-x-transition>
    <div class="my-5" v-show="close">
      <div class="d-flex justify-space-between">
        <span class="Heading 6"><span class="verticalTag"></span>Últimas atualizações</span>
        <span>
          <v-btn small icon @click="minus = !minus"> <v-icon>{{minusMax}}</v-icon> </v-btn>
          <v-btn small icon @click="close = false"> <v-icon>mdi-close-box-outline</v-icon> </v-btn>
        </span>
      </div>
      <v-expand-transition>
      <v-list three-line v-show="minus">
        <v-subheader>Mais Recentes</v-subheader>
        <template v-for="item in updates">
          <v-list-item :key="item.id">
            <v-list-item-avatar color="indigo">
              <avatar class="white--text">{{nameproject(item.id).substr(0,1)}}</avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> {{nameproject(item.id)}} </v-list-item-title>
              <v-list-item-subtitle>{{item.title}} - {{item.text}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <small>data/hora</small>
              <small>12/12/2021 12:00</small>
            </v-list-item-action>
          </v-list-item>
           <v-divider inset></v-divider>
        </template>
      </v-list>
      </v-expand-transition>
    </div>
  </v-expand-x-transition>
</template>

<script>
  export default {
    data(){
      return{
        minus: true, 
        close: true,
      }
    },
    props:{
      projects: Array
    },
    computed:{
      updates(){
        return this.$store.getters.readUpdates
      },
      minusMax(){
        return this.minus 
        ? 'mdi-minus-box-outline'
        : 'mdi-plus-box-outline'
      },
    },
    methods:{
      nameproject(x){
        const name = this.projects.filter(el => el.id == x)
        return name[0].name
      }
    }
  }
</script>