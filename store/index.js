import { db } from "@/plugins/firebase.js"

export const strict = false

export const state = () => ({
    user: null, 
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
    readUser(state){
        return !!state.user
    },
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
    setUser(state, payload){
        state.user = payload
    },
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
    closeSession({ commit }) {
    commit('setUser', null)
    this.$router.push('/')
    localStorage.removeItem('usuario')
    },
    async loginUser({ commit }, user) {
    try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB236S5G4dvW4QVB9I7znEHIg21LlkAG3Q', {
        method: 'POST',
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        })
        const userDB = await res.json()
        console.log('userDB', userDB)
        if (userDB.error) {
        return console.log(userDB.error)
        }
        commit('setUser', userDB)
        this.$router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))
    } catch (error) {
        console.log(error)
    }
    },
    async register({ commit }, user) {
    try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB236S5G4dvW4QVB9I7znEHIg21LlkAG3Q', {
        method: 'POST',
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        })
        const userDB = await res.json()
        console.log(userDB)
        if (userDB.error) {
        console.log(userDB.error)
        return
        }
        commit('setUser', userDB)
        this.$router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))

    } catch (error) {
        console.log(error)
    }
    },
    async loadLocalStorage({ commit }) {
    if (localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
    } else {
        return commit('setUser', null)
    }
    // try {
    //   const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/projects/${state.user.localId}.json?auth=${state.user.idToken}`)
    //   const dataDB = await res.json()
    //   const arrayTareas = []
    //   for (let id in dataDB){
    //     arrayTareas.push(dataDB[id])
    //   }
    //   commit('cargar', arrayTareas)

    // } catch (error) {
    //   console.log(error)
    // }
    },
    async cargaAPI({ commit }){
        if (localStorage.getItem('usuario')) {
            commit('setUser', JSON.parse(localStorage.getItem('usuario')))
          } else {
            commit('setUser', null)
          }
        try {
            const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/projects.json')
            const dataDB = await res.json()
            const arrayProjects = []

            for (let id in dataDB){
                arrayProjects.push(dataDB[id])
            }
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