<template>
          <v-row>
            <v-col cols="12">
              <v-sheet rounded color="secondary" dark class="pa-2"><h2>Projetos</h2></v-sheet>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card dark  color="primary lighten-1" class="text-center" hover>
                <v-card-text><span class="headline white--text">20</span> <br> Total de Projetos</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card dark  color="success lighten-1" class="text-center" hover>
                <v-card-text><span class="headline white--text">5</span> <br> Em andamento</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card dark  color="error lighten-1" class="text-center" hover>
                <v-card-text><span class="headline white--text">5</span> <br>Não iniciados</v-card-text>
              </v-card>
            </v-col>
          </v-row>
</template>