import {request} from "../utils/request";

export function getConfirmedData(){
    return request({
        url: '/getConfirmedDate',
        method: 'get',

    })
}

export function getConfirmedOnlyChina(onlyChina,showValue){
    return request({
        url: '/confirmed/refresh',
        method: 'get',
        params:{
            onlyChina: onlyChina,
            showValue: showValue,
        }
    })
}

export function getTotalConfirmed(){
    return request({
        url:'/getTotalConfirmed',
        method: 'get'
    })
}

export function getDeathData(){
    return request({
        url: '/getDeathDate',
        method: 'get'
    })
}

export function getDeathOnlyChina(onlyChina,showValue){
    return request({
        url: '/death/refresh',
        method: 'get',
        params:{
            onlyChina: onlyChina,
            showValue: showValue,
        }
    })
}

export function getTotalDeath(){
    return request({
        url:'/getTotalDeath',
        method: 'get',
    })
}

export function getRecoveredData(){
    return request({
        url: '/getRecoveredDate',
        method: 'get'
    })
}

export function getTotalRecovered(){
    return request({
        url:'/getTotalRecovered',
        method: 'get',
    })
}

export function getRecoveredOnlyChina(onlyChina,showValue){
    return request({
        url: '/recovered/refresh',
        method: 'get',
        params:{
            onlyChina: onlyChina,
            showValue: showValue,
        }
    })
}

