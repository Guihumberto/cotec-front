<template>
    <v-card class="mt-2" hover>
        <v-card-title>Projeto Teste</v-card-title>
        <v-card-subtitle>
            <div d-flex>
                <span> Lider: Joao Humberto</span> 
                <span class="mx-2">Colider: Maria da Silva</span>
                <span>Valor: R$12</span>
                <span class="ml-2">Empresa/Consultor: teste</span>
            </div>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, hic sequi aliquid odio possimus modi aperiam fugiat culpa? 
                Eos repellat at fugiat necessitatibus. Vitae est blanditiis fugiat facilis corporis doloremque?</p>
        </v-card-text>
        <v-card-actions>
            <v-row>
                <v-col cols="12" sm="9">
                    <painels-barProjectList />
                </v-col>
                <v-col cols="12" sm="3" align-self="end">
                    <v-btn small color="warning" to="/project"> <v-icon small>mdi-bell</v-icon> </v-btn> 
                    <v-btn small color="success" to="/project">Saber mais</v-btn>       
                </v-col>
            </v-row>         
        </v-card-actions>
    </v-card>
</template>