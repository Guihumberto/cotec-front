<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined title="Detalhes" text small v-bind="attrs" v-on="on">Destinar Projeto</v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Destinar Projeto
        </v-card-title>
        <v-card-text class="mt-5">
            <v-form>
                <v-select
                outlined dense
                label="Lider"
                ></v-select>
                <v-select
                outlined dense
                label="Colíder"
                ></v-select>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            outlined
            @click="dialog = false"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>

<style scoped>

</style>