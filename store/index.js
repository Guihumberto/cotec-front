import { auth } from "@/plugins/firebase.js"

export const strict = false

export const state = () => ({
    user: null, 
    userInfo: null,
    users:[
    ],
    userControl: null,
    usersControl: [],
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
    faseProject:[],
})

export const getters = {
    readUser(state){
        return !!state.user
    },
    readUserInfo(state){
        return state.userInfo
    },
    readUserControl(state){
        return state.userControl
    },
    readUsersControl(state){
        return state.usersControl
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
    readFase(state){
        return state.faseProject
    },
}

export const mutations = {
    setUser(state, payload){
        state.user = payload
        state.userInfo = payload
    },
    userControlSet(state, payload) {
        state.userControl = payload
    },
    load(state, payload){
        state.projects = payload
    },
    loadUsersControl(state, payload){
        state.usersControl = payload
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
    loadFaseList(state, payload){
        state.faseProject = payload
    },
    updateProject(state, payload){
        state.updatesProject.push(payload)
    },
    faseProject(state, payload){
        state.faseProject.push(payload)
    },
    editFase(state, payload){
        const x = state.faseProject.map(item => item.id == payload.id ? payload : item)
        state.faseProject = x
    },
    updateProjectEdit(state, payload){
        const x = state.updatesProject.map(item => item.id == payload.id ? payload : item)
        console.log(payload);
        state.projects = x
    },
    delUpdate(state, payload) {
        state.updatesProject = state.updatesProject.filter( item => item.id != payload)
    },
}

export const actions = {
    closeSession({ commit }) {
        commit('setUser', null)
        commit('userControlSet', null)
        this.$router.push('/')
        localStorage.removeItem('usuario')
    },
    async loginUser({ commit, dispatch }, user) {
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
        dispatch("snackbars/setSnackbars", {text:'Usuário ou senha inválido.', color:'error'})
        return console.log(userDB.error)
        }
        commit('setUser', userDB)
        this.$router.push( this.$route.query.redirect || '/' )
        localStorage.setItem('usuario', JSON.stringify(userDB))
    } catch (error) {
        console.log(error)
    }
    },
    async register({ commit, dispatch }, user) {
    try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB236S5G4dvW4QVB9I7znEHIg21LlkAG3Q', {
        method: 'POST',
        body: JSON.stringify({
            displayName: user.displayName,
            email: user.email,
            password: user.password,
            returnSecureToken: true
            })
        })
        const userDB = await res.json()
        console.log(userDB)
        if (userDB.error) {
        dispatch("snackbars/setSnackbars", {text:'E-mail já possui cadastrado.', color:'error'})
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
    async usersControl({ commit }, user){
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/users/${user.id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const dataDB = await res.json()
            commit('userControlSet', user)

        } catch(error){
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
    async cargaUserControl({ commit },){
        try {
            const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/users.json')
            const dataDB = await res.json()
            const arrayProjects = []

            for (let id in dataDB){
                arrayProjects.push(dataDB[id])
            }
            commit('loadUsersControl', arrayProjects)     
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
    async cargaFaseList({ commit }){
        try {
            const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/fase.json')
            const dataDB = await res.json()
            const arrayProjects = []

            for (let id in dataDB){
                arrayProjects.push(dataDB[id])
            }
            commit('loadFaseList', arrayProjects)
            
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
    async addUpdateEdit ({ commit }, event) {
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/updates/${event.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(event)
            })

           const dataDB = await res.json()
           commit('updateProjectEdit', event)
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
    async addFase ({ commit }, event) {
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/fase/${event.id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })

           const dataDB = await res.json()
           console.log(dataDB);
           commit('faseProject', event)
        } catch (error) {
            console.log(error);     
        }
    },
    async addFaseEdit({commit}, fase){
        try {
            const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/fase/${fase.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(fase)
            })

            const dataDB = await res.json()
            commit('editFase', project)
        } catch (error) {
            console.log(error)
        }
    },
    setUserTest({ commit }, user){
        const usuario = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL
        }
        commit('setUser', usuario)
    },
    logoutTest({ commit }){
        auth.signOut()
        commit('setUser', null)
        this.$router.push( '/login' )
    }
}