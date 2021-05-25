export const save_confirmed =({commit} , payload) => {
    commit('save_confirmed_case',payload)
}

export const save_death =({commit}, payload) => {
    commit('save_death_case',payload)
}

export const save_recovered =({commit},payload) => {
    commit('save_recovered_case',payload)
}

export const save_total_confirmed = ({commit} , payload) =>{
    commit('save_total_confirmed',payload)
}

export const save_total_death = ({commit},payload)=>{
    commit('save_total_death',payload)
}

export const save_total_recovered = ({commit},payload) => {
    commit('save_total_recovered',payload)
}

