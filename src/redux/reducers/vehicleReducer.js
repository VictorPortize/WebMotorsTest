import {SAVE_MAKERS, SAVE_MODEL, SAVE_VEHICLES, SAVE_VERSION} from '../actions/vehicleActions'



const initialState = {
    makers:[],
    models:[],
    versions:[],
    allVehicles:[]
}

export default vehicleReducer = (state = initialState,action) => {
    switch(action.type){
        case SAVE_MAKERS:
            return Object.assign(state,{makers:action.array})
        case SAVE_MODEL:
            return Object.assign(state,{models:action.array})
        case SAVE_VERSION:
            return Object.assign(state,{versions:action.array})
        case SAVE_VEHICLES:
            let array = []
            for(let vehicle of action.array){
                array.push(...vehicle)
            }
            return Object.assign(state,{allVehicles:array})
        default:
            return state
    }
}