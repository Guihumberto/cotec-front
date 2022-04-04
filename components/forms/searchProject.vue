<template>
    <v-card>
        <v-card-title>Filtros</v-card-title>
        <v-card-text>
            <v-text-field dense outlined label="Busca" prepend-inner-icon="mdi-magnify" solo></v-text-field>
            <v-row>
                <v-col cols="4" sm="2">
                    <v-checkbox label="Profisco"></v-checkbox>
                </v-col>
                <v-col cols="4" sm="2">
                    <v-checkbox label="Profisco"></v-checkbox>
                </v-col>
                <v-col cols="4" sm="2">
                    <v-checkbox label="Profisco"></v-checkbox>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-select dense outlined label="Setor"></v-select>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-select dense outlined label="Status"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn text small color="primary">Qtd: 10</v-btn>
                <v-btn text small color="error">Limpar</v-btn>
            </v-row>

        </v-card-text>
    </v-card>
</template>