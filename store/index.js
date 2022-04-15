export const strict = false

export const state = () => ({
    users:[
        {id: 1, name:'Joao Silva', mail:'joao@sefaz', senha:'1234'},
        {id: 2, name:'Maria Ribeiro', mail:'maria@sefaz', senha:'1234'},
        {id: 3, name:'Jose Alencar', mail:'jose@sefaz', senha:'1234'}
    ],
    projecto:{
        id: '',
        name: '',
        profisco: false,
        priority: '',
        lider: '',
        colider: '',
        type: 0,
        execution: 0,
        value: 0,
        status: 0,
        sector: '',
        company: '',
        object: '',
        justify: ''
      },  
    projects: [
        {id: '1', name:'LGPD', profisco: true, priority: '3+', lider:'Joao', colider:'Maria', type: 1, execution: 20, value: 130.000, status: 1, sector: 'COTEC', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real', justify: ''},
        {id: '2', name:'ITIL', profisco: true, priority: '3', lider:'Joao', colider:'Maria', type: 1, execution: 20, value: 30.000, status: 3, sector: 'COGEF', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real', justify: ''},
        {id: '3', name:'Pucomex', profisco: true, priority: '1', lider:'Joao', colider:'Maria', type: 2, execution: 50, value: 130.000, status: 2, sector: 'ASDIN', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real', justify: ''},
        {id: '4', name:'Conta Corrente Parametrizada', profisco: false, priority: '2', lider:'Joao', colider:'Maria', type: 2, execution: 20, value: 300.000, status: 2, company:'teste', sector: 'COTEC', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real', justify: ''},
        {id: '5', name:'EFD', profisco: false, priority: '2', lider:'Joao', colider:'Maria', type: 1, execution: 80, value: 350.000, status: 1, sector: 'CEGPA', company:'teste', object:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real', justify: ''},
    ],
    updatesProject:[
        {idUpt: 1, id: 1, user: 1, title:'Integraçao PLADIF', text:'Lorem Ipsulum'},
        {idUpt: 2, id: 2, user: 1, title:'Criação de ambiente', text:'Lorem Ipsulum'},
        {idUpt: 3, id: 3, user: 2, title:'Assinatura do Contrato', text:'Lorem Ipsulum'},
        {idUpt: 4, id: 4, user: 2, title:'Aditivo', text:'Lorem Ipsulum'},
        {idUpt: 5, id: 1, user: 1, title:'Integraçao PLADIF', text:'Lorem Ipsulum'},
        {idUpt: 6, id: 2, user: 1, title:'Criação de ambiente', text:'Lorem Ipsulum'},
        {idUpt: 7, id: 3, user: 2, title:'Assinatura do Contrato', text:'Lorem Ipsulum'},
        {idUpt: 8, id: 4, user: 2, title:'Aditivo', text:'Lorem Ipsulum'},
        {idUpt: 9, id: 1, user: 1, title:'Integraçao PLADIF', text:'Lorem Ipsulum'},
        {idUpt: 10, id: 2, user: 1, title:'Criação de ambiente', text:'Lorem Ipsulum'},
        {idUpt: 11, id: 3, user: 2, title:'Assinatura do Contrato', text:'Lorem Ipsulum'},
        {idUpt: 12, id: 4, user: 2, title:'Aditivo', text:'Lorem Ipsulum'},
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

export const mutations = {
    set(state, payload) {
        state.projects.push(payload)
        console.log(state.projects)
    },
    delete(state, payload) {
        state.projects = state.projects.filter( item => item.id != payload)
    },
    select(state, payload){
        state.projecto = state.projects.find(item => item.id == payload)
    },
    edit(state, payload){
        const x = state.projects.map(item => item.id == payload.id ? payload : item)
        state.projects = x
    }
}

export const actions = {
    setProjects({ commit }, project) {
        commit('set', project)
    },
    deleteProject({ commit }, id) {
        commit('delete', id)
    },
    selectProject({commit}, id){
        commit('select', id)
    },
    editProject({commit}, project){
        commit('edit', project)
    }
}