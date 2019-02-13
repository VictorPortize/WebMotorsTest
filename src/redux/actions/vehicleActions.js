/**
 * Actions do Vehicle Reducer
 */

export const SAVE_MAKERS = "SAVE_MAKERS"
export const saveMakers = array =>({
    type:SAVE_MAKERS,
    array
})
export const SAVE_MODEL = 'SAVE_MODEL'
export const saveModel = array => ({
    type: SAVE_MODEL,
    array,
})

export const SAVE_VERSION = "SAVE_VERSION"
export const saveVersion = array => ({
    type: SAVE_VERSION,
    array,
})

export const SAVE_VEHICLES = "SAVE_VEHICLES"
export const saveVehicles = array => ({
    type: SAVE_VEHICLES,
    array
})
