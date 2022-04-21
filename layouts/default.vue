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

        <v-list-item two-line to="/perfil" v-if="user">
          <v-list-item-avatar color="indigo" class="align_avatar">
              <span class="white--text">JH</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>João Humberto</v-list-item-title>
            <v-list-item-subtitle>Auditor Fiscal</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <div class="pa-2 text-center" v-if="user">
          <v-btn small outlined color="error" text @click="closeLogin"><v-icon small>mdi-logout</v-icon> Sair</v-btn>
          <v-btn small color="primary lighten-1" to="/perfil">Meus Projetos</v-btn>
        </div>

        <div class="pa-2" v-else>
          <forms-login @barLeft="drawer = false" :typeBtn="true" />
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


      <v-expand-x-transition>
        <v-col cols="5" sm="2">
          <v-text-field 
          v-if="searchBar"
          app outlined dense clearable rounded filled
          prepend-inner-icon="mdi-magnify"
          class="mt-7"
          ></v-text-field>
        </v-col>
      </v-expand-x-transition>

      <v-btn icon @click="searchBar = true" v-show="!searchBar">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div v-if="user" class="d-flex">
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-menu
          v-if="login"
          v-model="menuPerfil"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <items-perfilBox @logoff="closeLogin()" @closeBox="menuPerfil = false"/>
        </v-menu>
      </div>

      <div v-else> <forms-login :typeBtn="false" /> </div>

     <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <items-menuList />
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <Nuxt />
      
      <v-snackbar 
          v-for="(snack, i) in snacks.filter((s)=> s.showing)" :key="i + Math.random()"
          v-model="snack.showing"
          :timeout="snack.timeout"
          :color="snack.color"
          :style="`bottom: ${i * 60 + 8}px`"
        >
        <v-btn slot="action" icon small @click="snack.showing = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
        {{snack.text}}
      </v-snackbar>
    </v-main>

    <v-footer padless app color="#42a047" dark>
      <v-img
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        >
        <v-col
          class="text-center mb-0 pb-0"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>{{titleApp}}</strong>
        </v-col>
        <v-col cols="12" class="mt-0 pt-0 text-center">Secretaria do Estado da Fazenda - SEFAZ</v-col>
    </v-img>
  </v-footer>
  </v-app>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data(){ 
      return{
        drawer: false,
        menuPerfil: false,
        titleApp:"COTEC",
        institute: "SEFAZ-MA",
        login: true,
        snack: false,
        searchBar: false,
         items: [
          { title: 'Início', icon: 'mdi-home', url:"/"},
          { title: 'Projetos', icon: 'mdi-newspaper-variant-multiple-outline', url:"/projects"},
          { title: 'COTEC', icon: 'mdi-desktop-classic', url:"/cotec"},
          { title: 'Sobre', icon: 'mdi-information', url:"/about" },
        ],
        right: null,
        }
    },
    computed:{
      ...mapGetters({snacks:"snackbars/readSnackbars"}),
      user(){
        return this.$store.getters.readUser
      }
    },
    methods:{
      ...mapActions(['cargaAPI', 'cargaUpdate', 'closeSession']),
      closeLogin(){
        this.closeSession()
        this.$store.dispatch("snackbars/setSnackbars", {text:'Sessão encerrada', color:'error'})
        this.drawer = false
      }
    },
    fetch(){
      this.cargaAPI()
      this.cargaUpdate()
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
    .verticalTag{
      border-right: 5px solid rgb(26, 125, 57);
      margin-right: 2px;
    }
    .align_avatar{
      padding: 16px;
    }

</style>
