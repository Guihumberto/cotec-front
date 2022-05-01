<template>
    <v-navigation-drawer app v-model="drawer" color="#E9EEF4">
        <div class="text-center mt-5">
            <h1>SEFAZ</h1>
            <v-divider class="mt-4"></v-divider>
            <v-avatar class="mt-4" color="grey" size="60">
                <v-icon color="white" large>mdi-account</v-icon>
            </v-avatar>
            <h1>João Humberto</h1>
            <h6>Auditor Fiscal</h6>
            <v-btn small class="mt-2" rounded outlined color="indigo">Perfil</v-btn>
        </div>
        <v-divider class="my-5"></v-divider>
        <v-list>
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i" v-slot="{ active }">
                    <v-list-item-icon>
                        <v-icon :color="active ? 'indigo': 'secondary'" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title :class="active ? 'indigo--text':'grey--text'" v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <template v-slot:append>
            <v-divider></v-divider>
            <v-list-item >
                <v-list-item-icon>
                    <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Sair</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        selectedItem: 0,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Projetos', icon: 'mdi-image' },
          { title: 'Sobre', icon: 'mdi-help-box' },
        ],
      }
    },
  }
</script>

