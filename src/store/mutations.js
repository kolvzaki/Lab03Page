export const save_confirmed_case = (state,confirmed_case) =>{
    state.confirmed_case = confirmed_case
}

export const save_death_case = (state,death_case) => {
    state.death_case = death_case
}

export const save_recovered_case = (state,recovered_case) => {
    state.recovered_case = recovered_case
}

export const save_total_confirmed = (state,total_confirmed) => {
    state.total_confirmed = total_confirmed
}

export const save_total_death = (state,total_death) => {
    state.total_death = total_death
}

export const save_total_recovered = (state, total_recovered) => {
    state.total_recovered = total_recovered
}