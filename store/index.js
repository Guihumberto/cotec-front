export const strict = false

export const state = () => ({
    users:[
        {id: 1, name:'Joao Silva', mail:'joao@sefaz', senha:'1234'},
        {id: 2, name:'Maria Ribeiro', mail:'maria@sefaz', senha:'1234'},
        {id: 3, name:'Jose Alencar', mail:'jose@sefaz', senha:'1234'}
    ],
    projects: [
        {id: 1, name:'LGPD', profisco: true, priority: '3+', lider:'Joao', colider:'Maria', type: 1, execution: 20, value: 130.000, status: 1, sector: 'COTEC', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real'},
        {id: 2, name:'ITIL', profisco: true, priority: '3', lider:'Joao', colider:'Maria', type: 1, execution: 20, value: 30.000, status: 3, sector: 'COGEF', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real'},
        {id: 3, name:'Pucomex', profisco: true, priority: '1', lider:'Joao', colider:'Maria', type: 2, execution: 50, value: 130.000, status: 2, sector: 'ASDIN', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real'},
        {id: 4, name:'Conta Corrente Parametrizada', profisco: false, priority: '2', lider:'Joao', colider:'Maria', type: 2, execution: 20, value: 300.000, status: 2, company:'teste', sector: 'COTEC', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real'},
        {id: 5, name:'EFD', profisco: false, priority: '2', lider:'Joao', colider:'Maria', type: 1, execution: 80, value: 350.000, status: 1, sector: 'CEGPA', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real'},
    ],
    updatesProject:[
        {idUpt: 1, id: 1, user: 1, title:'Integraçao PLADIF', text:'Lorem Ipsulum'},
        {idUpt: 2, id: 2, user: 1, title:'Criação de ambiente', text:'Lorem Ipsulum'},
        {idUpt: 3, id: 3, user: 2, title:'Assinatura do Contrato', text:'Lorem Ipsulum'},
        {idUpt: 4, id: 4, user: 2, title:'Aditivo', text:'Lorem Ipsulum'},
    ],
})

export const getters = {
    readProjects(state){
        return state.projects
    },
    readUsers(state){
        return state.users
    },
    readUpdates(state){
        return state.updatesProject
    },
}

// export const mutations = {
//     setPaises(state, payload){
//         state.paises = payload
//     },
//     setPaisesFilter(state, payload){
//         state.paisesFiltrados = payload
//     }
// }

// export const actions = {
//     async getPaises({commit}){
//         try {
//             const res = await fetch('https://restcountries.com/v3/all')
//             const data = await res.json()
//             commit('setPaises', data)
//         }catch (error){
//             console.log(error)
//         }
//     },
// }