<template>
    <v-list>
    <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
    >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
    </v-list>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', link: '/'},
        { title: 'Projetos', link: '/projects'},
        { title: 'COTEC', link: '/cotec'},
        { title: 'Sobre', link: '/about' },
      ],
    }),
  }
</script>
