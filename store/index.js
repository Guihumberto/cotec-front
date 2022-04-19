export const strict = false

export const state = () => ({
    users:[
        {id: 1, name:'Joao Silva', mail:'joao@sefaz', senha:'1234'},
        {id: 2, name:'Maria Ribeiro', mail:'maria@sefaz', senha:'1234'},
        {id: 3, name:'Jose Alencar', mail:'jose@sefaz', senha:'1234'}
    ],
    projecto:{
        id:'', 
        name:'', 
        profisco: false, 
        priority: '', 
        lider:'', colider:'', 
        type: 0, execution: 0, value: 0.00, status: 0, sector: '', company:'', 
        object:'', 
        justify: ''
      },  
    projects: [],
    updatesProject:[],
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
    load(state, payload){
        state.projects = payload
    },
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
    },
    loadUpdate(state, payload){
        state.updatesProject = payload
    },
    updateProject(state, payload){
        state.updatesProject.push(payload)
    },
    delUpdate(state, payload) {
        state.updatesProject = state.updatesProject.filter( item => item.id != payload)
    },
}

export const actions = {
    async cargaAPI({ commit }){
        try {
            const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/projects.json')
            const dataDB = await res.json()
            const arrayProjects = []

            for (let id in dataDB){
                arrayProjects.push(dataDB[id])
            }
            console.log(arrayProjects)
            commit('load', arrayProjects)
            
        } catch (error) {
            console.log(error)
        }
    },
    async setProjects({ commit }, project) {
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/projects/${project.id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            })

            const dataDB = await res.json()
            commit('set', project)

        } catch(error){
            console.log(error)
        }
        
    },
    async deleteProject({ commit }, id) {
        try {
            await fetch(`https://cotec-api-default-rtdb.firebaseio.com/projects/${id}.json`, {
                method: 'DELETE',
            })
            commit('delete', id)
        } catch (error) {
            console.log(error)
        }
    },
    selectProject({commit}, id){
        commit('select', id)
    },
    async editProject({commit}, project){
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/projects/${project.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(project)
            })

            const dataDB = await res.json()
            commit('edit', project)
        } catch (error) {
            console.log(error)
        }
    },
    async cargaUpdate({ commit }){
        try {
            const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/updates.json')
            const dataDB = await res.json()
            const arrayProjects = []

            for (let id in dataDB){
                arrayProjects.push(dataDB[id])
            }
            console.log(arrayProjects)
            commit('loadUpdate', arrayProjects)
            
        } catch (error) {
            console.log(error)
        }
    },
    async addUpdate ({ commit }, event) {
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/updates/${event.id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })

           const dataDB = await res.json()
           console.log(dataDB);
           commit('updateProject', event)
        } catch (error) {
            console.log(error);     
        }
    },
    async deleteUpdate({ commit }, id) {
        try {
            await fetch(`https://cotec-api-default-rtdb.firebaseio.com/updates/${id}.json`, {
                method: 'DELETE',
            })
            commit('delUpdate', id)
        } catch (error) {
            console.log(error)
        }
    },
}