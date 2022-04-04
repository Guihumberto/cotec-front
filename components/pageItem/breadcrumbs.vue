<template>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Projetos',
          disabled: false,
          href: '/projects',
        },
        {
          text: 'Nome do Projeto',
          disabled: true,
          href: '/id',
        },
      ],
    }),
  }
</script>