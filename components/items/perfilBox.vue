<template>
    <v-card>
        <v-list>
          <v-list-item to="/perfil">
            <v-list-item-avatar color="indigo">
              <span class="white--text">{{user.email.substr(0,1).toUpperCase()}}</span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{user.displayName}}</v-list-item-title>
              <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn icon @click="$emit('closeBox')" > <v-icon>mdi-close</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text outlined small
            @click="$emit('logoff')"
          >
            Sair
          </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        props:{
          user: Object
        }
    }
</script>