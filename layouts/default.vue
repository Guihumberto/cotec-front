<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{institute}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{titleApp}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>

        <v-list-item two-line to="/perfil">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Auditor Fiscal</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <div class="pa-2">
          <v-btn block color="primary">
            Logout
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="#43a047"
      dark
      src="https://live.staticflickr.com/2785/4281134496_4b821c0254_b.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{titleApp}}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <Nuxt />
    </v-main>

    <v-footer padless app color="#42a047" dark>
      <v-img
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>{{titleApp}}</strong>
        </v-col>
    </v-img>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data(){ 
      return{
        drawer: false,
        titleApp:"COTEC",
        institute: "SEFAZ-MA",
         items: [
          { title: 'Início', icon: 'mdi-home', url:"/"},
          { title: 'Projetos', icon: 'mdi-newspaper-variant-multiple-outline', url:"/projects"},
          { title: 'COTEC', icon: 'mdi-desktop-classic', url:"/cotec"},
          { title: 'Sobre', icon: 'mdi-information', url:"/about" },
        ],
        right: null,
        }
    }
  }
</script>

<style>
    .box{
        border-right: 8px solid rgb(26, 125, 57);
        border-top: 1px solid rgb(26, 125, 57);
        border-bottom: 1px solid rgb(26, 125, 57);
    }
    .box1{
        border-right: 4px solid rgb(26, 125, 57);
        border-top: 1px solid rgb(26, 125, 57);
        border-bottom: 1px solid rgb(26, 125, 57);
        margin-left: 1px;
    }
    .box2{
        border-right: 2px solid rgb(26, 125, 57);
        border-top: 1px solid rgb(26, 125, 57);
        border-bottom: 1px solid rgb(26, 125, 57);
        margin-left: 1px;
        margin-right: 2px;
    }

</style>
