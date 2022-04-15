<template>
<v-dialog width="800" v-model="dialog">
   <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          fab small
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

     <v-card ref="form">
       <v-form @submit.prevent="submit" >
       <v-card-title class="text-h5 grey lighten-2">Adicionar Projetos</v-card-title>
        <v-card-text>
          <v-switch label="Profisco" v-model="project.profisco"></v-switch>
          <v-radio-group row v-model="project.type">
             <span class="mr-2" >Tipo:</span>   
            <v-radio
              label="Sistema"
              value="1"
            ></v-radio>
             <v-radio
              label="Infra"
              value="2"
            ></v-radio>
             <v-radio
              label="Outros"
              value="3"
            ></v-radio>
          </v-radio-group>
          <v-text-field
            ref="project.name"
            outlined dense
            v-model.trim="project.name"
            :rules="[() => !!project.name || 'Campo obrigatório']"
            :error-messages="errorMessages"
            label="Nome do Projeto"
            placeholder="Digite o nome do projeto"
            required
          ></v-text-field>
          <v-textarea
            ref="project.object"
            outlined dense
            v-model.trim="project.object"
            :rules="[
              () => !!project.object || 'Campo Obrigatório',
              () => !!project.object && project.object.length <= 25 || 'Descreva o objetivo do projeto'
            ]"
            label="Objeto/Objetivo"
            placeholder="Descreva o objetivo e/ou objeto do projeto"
            counter="25"
            required
          ></v-textarea>
          <v-text-field
            ref="project.lider"
            outlined dense
            v-model.trim="project.lider"
            :rules="[() => !!project.lider || 'Campo Obrigatório']"
            label="Lider"
            placeholder="Digite o nome do Líder do Projeto"
            required
          ></v-text-field>
          <v-text-field
            ref="colider"
            outlined dense
            v-model.trim="project.colider"
            :rules="[() => !!project.colider || 'This field is required']"
            label="Colider"
            required
            placeholder="Digite o nome do colider"
          ></v-text-field>
          <v-text-field
            ref="setor"
            outlined dense
            v-model.trim="project.sector"
            :rules="[() => !!project.sector || 'Campo Obrigatório']"
            label="Setor"
            required
            placeholder="Corpo Técnico responsável"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-1"></v-divider>
        <v-card-actions>
          <v-btn text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            type="submit"
            :disabled="bloquear"
          >
            Enviar
          </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
</v-dialog>
</template>

<script>

import {mapActions} from 'vuex';
const shortid = require('shortid');

export default {
  data() {
    return{
      dialog: false,
      errorMessages: '',
      formHasErrors: ''
    }
  },
  props:{
    project: Object
  },
  computed:{
    bloquear(){      
      return this.project.name.trim()
      ? false
      : true
    }
  },
  methods:{
      ...mapActions(['setProjects']),
      submit(){
        console.log(this.project)
        //gerar id
        this.project.id = shortid.generate()

        //gravar dados
        this.setProjects(this.project)

        //fechar dialog

        this.dialog = false

        //limpar campos
        this.$emit(`clearProject`)
        
      }
    }
}
</script>