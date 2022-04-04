<template>
  <v-container style="max-width: 1080px;">
      <v-card>
        <v-card-title class="headline">
          <p class="textJustify">Seja bem-vindo ao sistema de acompanhamento de projetos da SEFAZ</p>  
        </v-card-title>
        <v-card-text>
          <p class="textJustify">
            O sistema tem como principal objetivo informar sobre os projetos que estão sendo sendo desenvolvidos dentro da Secretaria do Estado da Fazenda do Maranhão e seu status de andamento, bem como outras informações relevantes.
          <p>
            Para mais informações sobre o projeto <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
              documentação
            </nuxt-link>.
          </p>
          <p>
            Se você gostaria de contribuir ou sugerir alguma melhoria <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
              contato
            </nuxt-link>.
          </p>
          <p>
            Encontrou algum erro? Reporte ao COTEC <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
              contato
            </nuxt-link>.
          </p>
          <p>Obrigado por apoiar e utilizar o sistema de acompanhamento de projetos.</p>
          <div class="text-xs-right">
            <em><small>&mdash; João Humberto Silva Ribeiro Júnior</small></em>
          </div>
          <hr class="my-3">
          <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
            LGPD
          </nuxt-link>
          <br>
          <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
            PDTI
          </nuxt-link>
          <br>
          <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
            Sobre o COTEC
          </nuxt-link>
          <br>
          <nuxt-link
            to="/about"
            rel="noopener noreferrer"
          >
            Sobre o Projeto
          </nuxt-link>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/projects"
          >
            Projetos
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.textJustify{
  text-align: justify;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
</style>
