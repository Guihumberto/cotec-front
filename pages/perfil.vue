<template>
    <v-container style="max-width:1080px;">
        <pageItem-breadcrumbs class="mx-0 px-1 py-2"/>
        <h1 class="my-2"><span class="box" /><span class="box1" /><span class="box2" />Perfil e Projetos</h1>
        <v-tabs vertical>
            <v-tab>
                <v-icon left>mdi-account</v-icon>
                Perfil
            </v-tab>
            <v-tab>
                <v-icon left>mdi-newspaper-variant-multiple-outline</v-icon>
                Projetos
            </v-tab>
            <v-tab><v-icon left>mdi-chart-box-plus-outline</v-icon>
                Incluir
            </v-tab>

      <v-tab-item>
        <perfil-dadosperfil />
      </v-tab-item>
      <v-tab-item>
       <perfil-projects />
      </v-tab-item>
      <v-tab-item>
        <perfil-addproject />
      </v-tab-item>
    </v-tabs>

    </v-container>
</template>