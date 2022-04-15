<template>
    <div class="my-5">
      <span class="Heading 6"><span class="verticalTag"></span>Últimas atualizações</span>
      <v-list three-line>
        <v-subheader>Mais Recentes</v-subheader>
        <template v-for="item in updates">
          <v-list-item :key="item.id">
            <v-list-item-avatar color="indigo">
              <avatar class="white--text">{{item.id}}</avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.id}} -  Nome do Projeto</v-list-item-title>
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
    </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      updates(){
        return this.$store.getters.readUpdates
      }
    }
  }
</script>