import {SAVE_MAKERS, SAVE_MODEL, SAVE_VEHICLES, SAVE_VERSION, SET_SELECT} from '../actions/vehicleActions'



const initialState = {
    makers:[],
    models:[],
    versions:[],
    allVehicles:[],
    select:null
}

export default vehicleReducer = (state = initialState,action) => {
    switch(action.type){
        case SAVE_MAKERS:
            return Object.assign(state,{makers:action.array})
        case SAVE_MODEL:
            let ticole = []
            for(let muitobom of action.array){
                ticole.push(...muitobom)
            }
            return Object.assign(state,{models:ticole})
        case SAVE_VERSION:
            let ticolee = []
            for(let muitoboom of action.array){
                ticolee.push(...muitoboom)
            }
            return Object.assign(state,{versions:ticolee})
        case SAVE_VEHICLES:
            let array = []
            for(let vehicle of action.array){
                array.push(...vehicle)
            }
            return Object.assign(state,{allVehicles:array})

        case SET_SELECT:
            return Object.assign(state,{select:action.data})
        default:
            return state
    }
}