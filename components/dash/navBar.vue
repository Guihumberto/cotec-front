<template>
    <v-app-bar app flat>
        <v-text-field class="mt-3" append-icon="mdi-magnify" dense label="Busca"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon ><v-icon>mdi-bell</v-icon></v-btn>
        <v-btn icon to="/chat"><v-icon>mdi-email</v-icon></v-btn>
        <v-btn small fab outlined><v-icon large>mdi-account</v-icon></v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>