<template>
    <v-container style="max-width: 1080px;">
        <pageItem-breadcrumbs class="mx-0 px-1 py-2" :breadcrumbs="breadcrumbs" />
        <h1 class="my-2"><span class="box" /><span class="box1" /><span class="box2" />Sobre</h1>
        <v-card>
            <v-card-title>Sistema de Acompanhamento de Projetos</v-card-title>
            <v-card-text>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos modi perferendis quasi dicta vel! Laborum 
                    deleniti quibusdam veritatis aliquam, nulla modi eos labore voluptatem dignissimos aspernatur ipsum voluptatum vitae.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae quisquam sed voluptas excepturi eius 
                    cupiditate earum numquam atque nemo temporibus repudiandae minima iste neque rem asperiores, repellat voluptates dolor?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere laudantium, cum sint sapiente sed soluta.
                    Fugiat impedit culpa ab optio libero corporis molestiae provident corrupti assumenda inventore, ipsum adipisci?
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos modi perferendis quasi dicta vel! Laborum 
                    deleniti quibusdam veritatis aliquam, nulla modi eos labore voluptatem dignissimos aspernatur ipsum voluptatum vitae.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae quisquam sed voluptas excepturi eius 
                    cupiditate earum numquam atque nemo temporibus repudiandae minima iste neque rem asperiores, repellat voluptates dolor?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere laudantium, cum sint sapiente sed soluta.
                    Fugiat impedit culpa ab optio libero corporis molestiae provident corrupti assumenda inventore, ipsum adipisci?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                COTEC
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>

import { db } from "@/plugins/firebase.js"

export default {
    data(){
        return{
            breadcrumbs:[
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Sobre',
                    disabled: true,
                    to: '/projects',
                },
            ]
        }
    },
    // fetch({ store }){
    //     return db.collection('projects').get()
    //         .then(query => {
    //             const projects = []
    //             query.forEach(data => {
    //                 projects.push(data.data())
    //             });
    //             return store.commit('set', projects)
    //         })
    //         .catch(function(error){
    //              console.log('console error', error);
    //         })
    // }
}
</script>