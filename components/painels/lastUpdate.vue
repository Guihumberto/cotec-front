<template>
    <div class="my-5">
        <span class="Heading 6"><span class="verticalTag"></span>Últimas atualizações</span>
        <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { header: 'Hoje' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'LGPD',
          subtitle: `<span class="text--primary">OS07</span> &mdash; criação dos formulários de envio da nota`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'ITIL <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">Relatório</span> &mdash; envio do relatório com a escolha da empresa.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Pucomex',
          subtitle: '<span class="text--primary">OS09</span> &mdash; entrega dos relatórios de consulta pelo sistema',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Conta Corrente Parametrizada',
          subtitle: '<span class="text--primary">kickoff</span> &mdash; Planejamento das entregas',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Controle de Acesso',
          subtitle: '<span class="text--primary">Reunião</span> &mdash; Mapeamento das decisões.',
        },
      ],
    }),
  }
</script>