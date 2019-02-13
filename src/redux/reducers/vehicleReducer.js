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
            let array = state.models
            let make = action.array
            array.push(make)
            return Object.assign(state,{models:array})
        case SAVE_VERSION:
            let array2 = state.versions
            let version = action.array
            array2.push(version)
            return Object.assign(state,{versions:array2})
        case SAVE_VEHICLES:
            return Object.assign(state,{allVehicles:action.array})
        default:
            return state
    }
}