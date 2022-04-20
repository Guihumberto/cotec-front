<template>
    <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="indigo">
              <span class="white--text">JH</span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>João Humberto</v-list-item-title>
              <v-list-item-subtitle>Auditor Fiscal</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                to="/perfil" icon
              >
                <v-icon>mdi-tools</v-icon>
              </v-btn>
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
        }
    }
</script>